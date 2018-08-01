import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { shade } from "../functions";
import { colors } from "../theme";
import { darken, luminanace, hexToRgb } from "../functions";
import { RubberBand } from "animate-css-styled-components";

const buttonType = props =>
    props.theme.button.types[props.type]
        ? props.theme.button.types[props.type]
        : props.theme.button.types.default;

const foregroundColor = props => buttonType(props).foregroundColor;

const backgroundColor = props => buttonType(props).backgroundColor;

const isHollow = props => Boolean(buttonType(props).hollow);

const outline = props => `inset 0 0 0 ${props.theme.button.borderWidth}px
${backgroundColor(props)}`;

const e = React.createElement;

const Button = styled(({ element, children, ...props }) =>
    e(element, props, children)
).attrs({ role: "button" })`
    border: none;
    text-align: center;
    font-family: inherit;
    height: ${props => props.height}px;
    line-height: ${props => props.height}px;
    font-size: ${props => props.theme.button.fontSize}px;
    font-weight: ${props => props.theme.button.fontWeight};
    text-transform: ${props => props.theme.button.textTransform};
    border-radius: ${props => props.theme.button.borderRadius}px;
    margin-bottom: ${props =>
        props.margin != undefined
            ? props.margin
            : props.theme.spacing.margin}em;
    transition: background-color 0.25s ease;
    box-shadow: ${props => outline(props)};
    padding: 0 ${props => props.theme.spacing.padding}em;
    display: inline-block;
    text-decoration: none;
    background-color: ${props =>
        !isHollow(props) ? backgroundColor(props) : "transparent"};
    color: ${props => foregroundColor(props)};

    //  disabled button styles
    ${props =>
        props.disabled
            ? css`
                  opacity: 0.5;
                  cursor: not-allowed;
              `
            : css`
                  cursor: pointer;
              `};

    // active style
    ${props =>
        !isHollow(props) &&
        !props.disabled &&
        css`
            &:hover {
                background-color: ${props =>
                    darken(backgroundColor(props), 0.8)};
                box-shadow: none;
            }
        `};

    // expanded
    ${props =>
        props.expanded &&
        css`
            width: 100%;
        `};

    // focus
    &:focus {
        outline: none;
        box-shadow: ${props => outline(props)},
            0px 0px 0px 3px
                rgba(
                    ${props => {
                        const rgb = hexToRgb(backgroundColor(props));
                        return `${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2`;
                    }}
                );
    }
`;

Button.displayName = "Button";

Button.propTypes = {
    /** Optional: you can choose an element for the button. Defaults to button.*/
    element: PropTypes.string,
    expanded: PropTypes.bool,
    disabled: PropTypes.bool,
    margin: PropTypes.number,
    height: PropTypes.number
};

Button.defaultProps = {
    element: "button",
    expanded: false,
    disabled: false,
    height: 30,
    type: "default"
};

export default Button;
