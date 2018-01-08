import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { shade } from "./_functions";

const background = props => props.theme.button.colors[props.color];

const Button = styled.button`
    width: ${props => (props.expanded ? "100%" : "auto")};
    min-height: ${props => props.theme.button.sizes[props.size]}em;
    background: ${props => (props.hollow ? "transparent" : background)};
    color: ${props => (props.hollow ? background : "#FFF")};
    margin: 0
        ${props => (props.expanded || props.align == "right" ? 0 : "0.4em")}
        ${props => props.theme.button.margin}em
        ${props => (props.align == "right" ? "0.4em" : 0)}em;
    padding: 0 ${props => props.theme.button.sizes[props.size] / 2}em;
    transition: color 0.25s, background 0.25s, border 0.25s;
    border-color: ${background};
    border-radius: ${props => props.theme.button.radius}em;
    border-style: solid;
    border-width: 0.1em;
    font-size: 1em;
    font-weight: ${props => props.theme.button.fontWeight};
    text-transform: ${props => props.theme.button.textTransform};
    ${props =>
        !props.disabled
            ? css`
                  &:hover {
                      background: ${props =>
                          !props.hollow && shade(background(props), -40)};
                      color: ${props =>
                          props.hollow && shade(background(props), -40)};
                      border-color: ${props => shade(background(props), -40)};
                      cursor: pointer;
                  }
              `
            : css`
                  opacity: 0.5;
                  cursor: not-allowed;
              `};

    /*center align button styling*/
    ${props =>
        props.align == "center" &&
        css`
            display: block;
            margin: auto;
        `};

    /*right align button styling*/
    ${props =>
        props.align == "right" &&
        css`
            float: right;
        `};
`;

Button.displayName = "Button";

Button.propTypes = {
    expanded: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.string,
    hollow: PropTypes.bool,
    disabled: PropTypes.bool,
    alignment: PropTypes.string
};

Button.defaultProps = {
    expanded: false,
    color: "accent",
    size: "default",
    hollow: false,
    disabled: false,
    alignment: "left"
};

export default Button;
