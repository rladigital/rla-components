import PropTypes from "prop-types";
import styled from "styled-components";

const position = props => {
    if (props.current == props.i) {
        return "0";
    }
    if (props.current > props.i) {
        return "100%";
    }
    if (props.current < props.i) {
        return "-100%";
    }
};

const doesAnimate = props => {
    if (props.first || props.last) {
        return true;
    } else if (
        (props.current < props.i && props.direction == "right") ||
        (props.current > props.i && props.direction == "left")
    ) {
        return false;
    } else {
        return true;
    }
};

const CarouselItem = styled.div.attrs({})`
    width: 100%;
    height: 100%;
    color: ${props => props.theme.carousel.item.color};
    background: ${props => props.theme.carousel.item.background};
    padding: ${props => props.theme.carousel.item.padding}em
        ${props => props.theme.carousel.item.padding / 2}em;
    transition: ${props =>
        doesAnimate(props) ? "right 500ms linear" : "none"};
    position: absolute;

    right: ${props => position(props)};
`;

CarouselItem.displayName = "CarouselItem";

CarouselItem.propTypes = {
    i: PropTypes.number
};

CarouselItem.defaultProps = {};

export default CarouselItem;