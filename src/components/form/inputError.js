import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const InputErrorPanel = styled.span`
    color: ${props => props.theme.input.error.color};
`;

const InputError = props => {
    if ( ! props.error) {
        return null;
    }

    return (<InputErrorPanel>{props.error}</InputErrorPanel>);
}

InputError.displayName = "InputError";

InputError.propTypes = {
    error: PropTypes.string
};

InputError.defaultProps = {
    error: ''
};

export default InputError;
