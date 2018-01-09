import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { ZoomIn, ZoomOut } from "animate-css-styled-components";

const DropdownWrapper = styled.div`
    width: ${props => props.width}px;
    position: absolute;
    top: ${props => props.rect.height + props.rect.top}px;
    left: ${props =>
        (props.position != "left" && props.rect.width) + props.rect.left}px;
    transform: ${props => props.position != "left" && "translateX(-100%)"};
`;

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible
        };
    }
    componentDidUpdate() {
        if (this.props.visible != this.state.visible) {
            setTimeout(() => {
                this.setState({ visible: this.props.visible });
            }, this.state.visible ? this.props.delay : 0);
        }
    }
    render() {
        let rect = {};
        if (this.props.toggleRef) {
            rect = this.props.toggleRef.getBoundingClientRect();
        }
        return (
            this.state.visible && (
                <DropdownWrapper
                    position={this.props.position}
                    width={this.props.width}
                    delay={this.props.delay}
                    rect={rect}
                >
                    {this.props.children}
                </DropdownWrapper>
            )
        );
    }
}

Dropdown.propTypes = {
    position: PropTypes.oneOf(["left", "right"]),
    width: PropTypes.number,
    delay: PropTypes.number,
    visible: PropTypes.bool,
    toggleRef: PropTypes.object
};

Dropdown.defaultProps = {
    position: "right",
    width: 100,
    delay: 0,
    visible: false
};

Dropdown.displayName = "Dropdown";

export default Dropdown;
