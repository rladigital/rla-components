import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import { Icon } from "../../index";
import { Scrollbars } from "react-custom-scrollbars";

const Container = styled.div`
    width: 100%;
    height: ${props => props.height};
    position: relative;
    overflow: hidden;
    background: ${props => props.theme.carousel.item.background};
`;

const ArrowButton = styled.a`
    top: 50%;
    font-size: ${props => props.theme.carousel.arrows.size}em;
    line-height: 0;
    position: absolute;
    transform: translateY(-50%);
    color: ${props => props.theme.carousel.arrows.color};
    cursor: pointer;
    z-index: 1;
`;

const ArrowButtonLeft = ArrowButton.extend`
    left: 0;
`;

const ArrowButtonRight = ArrowButton.extend`
    right: 0;
`;

const Dots = styled.div`
    bottom: 0;
    width: 100%;
    position: absolute;
    text-align: center;
`;

const Dot = styled.a`
    width: ${props => props.theme.carousel.dots.size}em;
    height: ${props => props.theme.carousel.dots.size}em;
    background: ${props =>
        props.active
            ? props.theme.carousel.dots.activeBackground
            : props.theme.carousel.dots.background};
    border-radius: ${props => props.theme.carousel.dots.radius}em;
    margin: ${props => props.theme.carousel.dots.margin}em;
    display: inline-block;
    cursor: pointer;
`;

const StyledScrollbars = styled(Scrollbars)`
    overflow-x: hidden;
`;

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            direction: undefined,
            reset: false
        };
    }

    prevItem() {
        var x;
        if (this.state.current) {
            x = this.state.current - 1;
        } else {
            x = this.props.children.length - 1;
        }
        this.setState({ current: x, direction: "left" });
    }

    nextItem() {
        var x;
        if (this.state.current != this.props.children.length - 1) {
            x = this.state.current + 1;
        } else {
            x = 0;
        }
        this.setState({ current: x, direction: "right" });
    }

    setCurrentItem(x) {
        var direction = this.state.current > x ? "left" : "right";
        this.setState({
            current: x,
            direction: direction
        });
    }

    render() {
        let childrenWithProps = React.Children.map(
            this.props.children,
            (child, i) =>
                React.cloneElement(child, {
                    i: i,
                    current: this.state.current,
                    direction: this.state.direction,
                    first: Boolean(i == 0),
                    last: Boolean(
                        i == React.Children.count(this.props.children) - 1
                    )
                })
        );

        return (
            <Container height={this.props.height}>
                <Scrollbars autoHide="true">{childrenWithProps}</Scrollbars>
                <ArrowButtonLeft onClick={() => this.prevItem()}>
                    <Icon name={this.props.theme.carousel.arrows.leftIcon} />
                </ArrowButtonLeft>
                <ArrowButtonRight onClick={() => this.nextItem()}>
                    <Icon name={this.props.theme.carousel.arrows.rightIcon} />
                </ArrowButtonRight>
                <Dots>
                    {React.Children.map(this.props.children, (child, i) => {
                        return (
                            <Dot
                                onClick={() => this.setCurrentItem(i)}
                                active={this.state.current == i}
                            />
                        );
                    })}
                </Dots>
            </Container>
        );
    }
}

Carousel = withTheme(Carousel);

Carousel.displayName = "Carousel";

Carousel.propTypes = {
    height: PropTypes.string
};

Carousel.defaultProps = {
    height: "100%"
};

export default Carousel;
