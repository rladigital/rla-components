import React from "react";
import styled, { withTheme } from "styled-components";
import { ZoomIn, ZoomOut } from "animate-css-styled-components";

class Tooltip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            visible: false
        };
    }

    // Update position of the tooltip
    _onMouseMove(e) {
        const height = this.tooltipElement
            ? this.tooltipElement.clientHeight
            : 9999;

        this.setState({
            x: e.pageX,
            y: e.pageY,
            visible: true,
            height: height
        });
    }

    // Remove the tooltip when not hovering
    _onMouseLeave() {
        this.setState({ visible: false });
    }

    render() {
        const { theme } = this.props;

        const TooltipText = styled.div`
            color: ${theme.colors.white};
            background: ${theme.colors.primary};
            padding: ${theme.padding / 2}em ${theme.padding}em;
            border-radius: ${theme.radius}em;
            transform: translateX(-50%);
            position: absolute;
            opacity: 0.9;
            &:after {
                content: " ";
                position: absolute;
                bottom: -9px;
                border-top: 10px ${theme.colors.primary} solid;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                left: 50%;
                margin-right: -50%;
                transform: translateX(-50%);
            }
        `;

        const coords = {
            top: this.state.y - (this.state.height + 40),
            left: this.state.x
        };

        return (
            <span
                onMouseMove={e => this._onMouseMove(e)}
                onMouseLeave={() => this._onMouseLeave()}
            >
                {this.state.visible && (
                    <TooltipText
                        style={coords}
                        onMouseMove={e => e.stopPropagation()}
                        innerRef={tooltipElement =>
                            (this.tooltipElement = tooltipElement)}
                    >
                        {this.props.text}
                    </TooltipText>
                )}

                {this.props.children}
            </span>
        );
    }
}

Tooltip.displayName = "Tooltip";

export default withTheme(Tooltip);
