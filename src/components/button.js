import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { shade } from "../functions";
import { colors } from "../theme";
import { darken, luminanace, hexToRgb } from "../functions";
import { RubberBand } from "animate-css-styled-components";

const outline = props => `inset 0 0 0 ${props.theme.button.borderWidth}px
${props.theme.colors[props.color]}`;

const Button = styled("button").attrs({
    role: "button"
})`
    border: none;
    text-align: center;
    font-family: inherit;
    height: ${props => props.height}px;
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

    // hollow button styles
    ${props =>
        !props.hollow
            ? css`
                  // textColor or automatic color
                  color: ${props =>
                      props.textColor
                          ? props.theme.colors[props.textColor]
                          : luminanace(props.theme.colors[props.color]) < 0.5
                              ? props.theme.button.textColor
                              : props.theme.button.textColorAlt};

                  background-color: ${props => props.theme.colors[props.color]};
              `
            : css`
                  color: ${props =>
                      props.textColor
                          ? props.theme.colors[props.textColor]
                          : props.theme.colors[props.color]};
                  background-color: transparent;
              `};

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
        !props.hollow &&
        !props.disabled &&
        css`
            &:hover {
                background-color: ${props =>
                    darken(props.theme.colors[props.color], 0.8)};
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
                        const rgb = hexToRgb(props.theme.colors[props.color]);
                        return `${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2`;
                    }}
                );
    }
`;

Button.displayName = "Button";

Button.propTypes = {
    element: PropTypes.string,
    expanded: PropTypes.bool,
    disabled: PropTypes.bool,
    hollow: PropTypes.bool,
    color: PropTypes.string,
    textColor: PropTypes.string,
    margin: PropTypes.number,
    height: PropTypes.number
};

Button.defaultProps = {
    element: "button",
    expanded: false,
    disabled: false,
    hollow: false,
    color: Object.keys(colors)[0],
    height: 30
};

export default Button;
