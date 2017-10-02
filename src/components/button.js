import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { shade } from "./_functions";

const background = props =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.accent;

const sizes = {
    small: "1",
    regular: props => props.theme.inputHeight,
    large: "3"
};

const spacing = "0.4em";

const Button = styled.button`
    width: ${props => (props.expanded ? "100%" : "auto")};
    min-height: ${props => (props.size ? sizes[props.size] : sizes.regular)}em;
    background: ${props => (props.hollow ? "transparent" : background)};
    color: ${props => (props.hollow ? background : "white")};
    margin: 0 ${props => (props.expanded || props.right ? 0 : spacing)}
        ${props => props.theme.margin}em
        ${props => (props.right ? spacing : 0)}em;
    padding: 0 1em;
    border-style: solid;
    border-width: 0.1em;
    border-color: ${background};
    border-radius: ${props => props.theme.radius}em;
    float: ${props => (props.right ? "right" : "none")};
    font-size: 1em;
    transition: color 0.25s, background 0.25s, border 0.25s;

    /* disabled button styling */
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

    /*centered button styling*/
    ${props =>
        props.centered &&
        css`
            display: block;
            margin: auto;
        `};
`;

Button.displayName = "Button";

Button.propTypes = {
    expanded: PropTypes.bool
};

export default Button;
