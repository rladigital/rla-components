import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledLabel = styled.label`
    display: ${props => (props.inlineLabel ? "block" : "inline-block")};
`;

const Label = props => {
    return (
        <StyledLabel for={props.name} {...props}>
            {props.children}
        </StyledLabel>
    );
};

Label.displayName = "Label";

Label.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    inlineLabel: PropTypes.bool
};
Label.defaultProps = {
    size: "default",
    expanded: false,
    inlineLabel: true
};
export default Label;
