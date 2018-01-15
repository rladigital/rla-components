import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledLabel = styled.label`
    display: ${props => (props.inlineLabel ? "inline-block" : "block")};
    margin-bottom: ${props => props.theme.input.margin / 2}em;
    font-weight: bold;
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
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    inlineLabel: PropTypes.bool
};
FormLabel.defaultProps = {
    size: "default",
    expanded: false,
    inlineLabel: true
};
export default FormLabel;
