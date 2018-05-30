import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledLabel = styled.label`
    width: ${props => props.width}px;
    display: ${props => (props.inlineLabel ? "inline-block" : "block")};
    text-align: ${props => props.align};
    vertical-align: middle;
    font-weight: bold;
    margin-bottom: ${props => props.marginBottom}rem;
    ${props => props.width < 100 && `padding-right: 4px`};

    // Input group styles
    ${props =>
        props.inputGroup &&
        css`
            vertical-align: top;
            height: ${props => props.height}px;
            line-height: ${props => props.height}px;
            border-radius: ${props => props.theme.input.radius}px 0 0
                ${props => props.theme.input.radius}px;
            border: 1px solid ${props => props.theme.input.borderColor};
            background: ${props => props.theme.input.background};
            border-right: none;
            text-align: center;
            padding-right: 0;
        `};
`;

const FormLabel = props => {
    return (
        <StyledLabel htmlFor={props.name} {...props}>
            {props.children}
        </StyledLabel>
    );
};

FormLabel.displayName = "FormLabel";

FormLabel.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    name: PropTypes.string.isRequired,
    inlineLabel: PropTypes.bool,
    inputGroup: PropTypes.bool,
    align: PropTypes.align,
    marginBottom: PropTypes.number
};
FormLabel.defaultProps = {
    height: 30,
    inlineLabel: true,
    inputGroup: false,
    align: "left",
    marginBottom: 0
};
export default FormLabel;
