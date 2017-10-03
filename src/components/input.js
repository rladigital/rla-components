import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { shade } from "./_functions";

const types = {
    text: [
        "date",
        "datetime-local",
        "email",
        "hidden",
        "month",
        "number",
        "password",
        "search",
        "tel",
        "text",
        "time",
        "week"
    ]
};

const Input = styled.input`
    ${props =>
        types.text.includes(props.type) &&
        css`
            width: 100%;
            max-width: ${props => (props.expanded ? "100%" : "10em")};
            height: ${props => props.theme.sizes[props.size]}em;
            border-radius: ${props => props.theme.radius}em;
            border: 1px solid ${props => props.theme.colors.mediumGray};
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            padding: 0 ${props => props.theme.sizes[props.size] / 4}em;
            margin: 0
                ${props =>
                    props.expanded || props.align == "right" ? 0 : "0.4em"}
                auto ${props => (props.align == "right" ? "0.4em" : 0)}em;
            font-size: 1em;
        `};
    margin-bottom: ${props => props.theme.margin}em;
`;

Input.displayName = "Input";

Input.propTypes = {
    size: PropTypes.string,
    expanded: PropTypes.bool,
    type: PropTypes.string
};

Input.defaultProps = {
    size: "default",
    expanded: false,
    type: "text"
};

export default Input;
