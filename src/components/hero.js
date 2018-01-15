import PropTypes from "prop-types";
import styled from "styled-components";
import Panel from "./panel";

const panel = props => props.theme.panel.types[props.type];

const Hero = Panel.extend`
    height: ${props => props.height}px;
    background-image: url('${props => props.backgroundImage}');
    background-size: cover;
    background-position: center;
    background-size: ${props => props.backgroundSize};
    background-repeat: no-repeat;
`;

Panel.displayName = "Hero";

Panel.propTypes = {
    type: PropTypes.string,
    textAlign: PropTypes.string,
    height: PropTypes.number,
    backgroundImage: PropTypes.string,
    backgroundSize: PropTypes.string
};

Panel.defaultProps = {
    type: "default",
    textAlign: "left",
    height: 500,
    backgroundSize: "cover"
};

export default Hero;
