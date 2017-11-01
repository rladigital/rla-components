import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { ZoomIn, ZoomOut } from "animate-css-styled-components";

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    render() {
        const DropdownWrapper = styled.div`
            position: relative;
            display: inline-block;
        `;

        const Dropdown = styled.div`
            position: absolute;
            min-width: ${props => props.theme.dropdown.minWidth}em;
            background: ${props => props.theme.dropdown.background};
            text-align: ${props => props.alignX};
            z-index: 1;

            // X position
            ${props => props.alignX} : 0;

            // Y position
            ${props => props.alignY} : 0;

            // Pull to top
            ${props =>
                props.alignY == "top" && css`transform: translateY(-100%);`};

            // Pull to bottom
            ${props =>
                props.alignY == "bottom" && css`transform: translateY(100%);`};
        `;

        const activeOn = {
            hover: {
                show: "onMouseEnter",
                hide: "onMouseLeave"
            },
            click: {
                show: "onClick",
                hide: "onMouseLeave"
            }
        };

        let dropdownProps = {};

        dropdownProps[activeOn[this.props.activeOn].show] = () =>
            this.setState({ visible: true });

        dropdownProps[activeOn[this.props.activeOn].hide] = () =>
            this.setState({ visible: false });

        return (
            <DropdownWrapper {...dropdownProps}>
                {this.props.children}
                {(this.state.visible || this.props.visible) && (
                    <Dropdown
                        alignX={this.props.alignX}
                        alignY={this.props.alignY}
                    >
                        {this.props.menu}
                    </Dropdown>
                )}
            </DropdownWrapper>
        );
    }
}

Dropdown.propTypes = {
    /** Horizontal align left / right  */
    alignX: PropTypes.string,
    /** Vertical align top / bottom  */
    alignY: PropTypes.string,
    /** Display the dropdown on hover / click / custom */
    activeOn: PropTypes.string,
    /** Override visibility */
    visible: PropTypes.bool
};

Dropdown.defaultProps = {
    alignX: "left",
    alignY: "bottom",
    activeOn: "hover"
};

Dropdown.displayName = "Dropdown";

export default Dropdown;
