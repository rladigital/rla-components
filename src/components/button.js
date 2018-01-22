import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { shade } from "../functions";
import { colors, spacing, sizes } from "../theme";
import { hexToHSL, HSLToHex } from "../functions";

function foregroundColor(x) {
    return hexToHSL(x).l < 0.7 ? "white" : "black";
}

function hoverColor(x) {
    let hsl = hexToHSL(x);
    hsl.l = hsl.l * 0.8;
    let hex = HSLToHex(hsl);
    return hex;
}

const Button = styled.button`
    border: none;
    font-size: 1em;
    text-align: center;
    transition: background-color 0.25s ease;
    min-height: ${props => sizes[props.size]}em;
    font-weight: ${props => props.theme.button.fontWeight};
    text-transform: ${props => props.theme.button.textTransform};
    border-radius: ${props => props.theme.button.borderRadius}em;
    margin-bottom: ${props =>
        props.marginBottom != undefined
            ? props.marginBottom
            : spacing.margin}em;

    // hollow button styles
    ${props =>
        !props.hollow
            ? css`
                  color: ${props => foregroundColor(colors[props.color])};
                  background-color: ${props => colors[props.color]};
              `
            : css`
                  color: ${props => colors[props.color]};
                  box-shadow: inset 0 0 0 1px ${props => colors[props.color]};
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
                background-color: ${props => hoverColor(colors[props.color])};
            }
        `};

    // expanded
    ${props =>
        props.expanded
            ? css`
                  width: 100%;
              `
            : css`
                  padding-left: ${props =>
                      props.padding != undefined
                          ? props.padding
                          : spacing.padding}em;
                  padding-right: ${props =>
                      props.padding != undefined
                          ? props.padding
                          : spacing.padding}em;
              `};
`;

Button.displayName = "Button";

Button.propTypes = {
    expanded: PropTypes.bool,
    disabled: PropTypes.bool,
    hollow: PropTypes.bool,
    color: PropTypes.string,
    marginBottom: PropTypes.number,
    padding: PropTypes.number,
    size: PropTypes.string
};

Button.defaultProps = {
    expanded: false,
    disabled: false,
    hollow: false,
    color: Object.keys(colors)[0],
    size: Object.keys(sizes)[0]
};

export default Button;
