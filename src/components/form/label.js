import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledLabel = styled.label`
    width: ${props => props.width}px;
    display: ${props => (props.inlineLabel ? "inline-block" : "block")};
    text-align: ${props => props.align};
    vertical-align: middle;
    font-weight: bold;

    ${props => props.width < 100 && `padding-right: 4px`};
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
    name: PropTypes.string.isRequired,
    inlineLabel: PropTypes.bool,
    align: PropTypes.align
};
FormLabel.defaultProps = {
    width: 100,
    inlineLabel: true,
    align: "left"
};
export default FormLabel;
