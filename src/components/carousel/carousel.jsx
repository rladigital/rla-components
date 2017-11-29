import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import { Icon } from "../../index";

const Container = styled.div`
    width: 300px;
    height: 300px;
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
`;

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: this.props.current,
            direction: undefined,
            reset: false
        };
    }

    prevItem() {
        if (this.state.current) {
            this.setState({
                current: this.state.current - 1,
                direction: "left",
                reset: false
            });
        } else {
            this.setState({
                current: this.props.children.length - 1,
                direction: "left",
                reset: true
            });
        }
    }

    nextItem() {
        if (this.state.current != this.props.children.length - 1) {
            this.setState({
                current: this.state.current + 1,
                direction: "right",
                reset: false
            });
        } else {
            this.setState({
                current: 0,
                direction: "right",
                reset: true
            });
        }
    }

    render() {
        let dots = [];
        let childrenWithProps = React.Children.map(
            this.props.children,
            (child, i) =>
                React.cloneElement(child, {
                    i: i,
                    current: this.state.current,
                    direction: this.state.direction
                })
        );

        for (var i = 0; i < React.Children.count(this.props.children); i++) {
            dots.push(<Dot active={this.state.current == i} />);
        }

        return (
            <Container>
                {childrenWithProps}
                <ArrowButtonLeft onClick={() => this.prevItem()}>
                    <Icon name={this.props.theme.carousel.arrows.leftIcon} />
                </ArrowButtonLeft>
                <ArrowButtonRight onClick={() => this.nextItem()}>
                    <Icon name={this.props.theme.carousel.arrows.rightIcon} />
                </ArrowButtonRight>
                <Dots>{dots}</Dots>
            </Container>
        );
    }
}
Carousel.displayName = "Carousel";

Carousel.propTypes = {
    current: PropTypes.number
};

Carousel = withTheme(Carousel);

Carousel.defaultProps = {};

export default Carousel;
