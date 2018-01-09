import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

export const StyledInput = styled.input`
    ${props =>
        css`
            width: 100%;
            max-width: ${props => (props.expanded ? "100%" : "10em")};
            height: ${props => props.theme.input.sizes[props.size]}em;
            border-radius: ${props => props.theme.input.radius}em;
            border: 1px solid
                ${props =>
                    props.error
                        ? props.theme.input.error.borderColor
                        : props.theme.input.borderColor};
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            padding: 0 ${props => props.theme.input.sizes[props.size] / 4}em;
            margin: 0
                ${props =>
                    props.expanded || props.align == "right" ? 0 : "0.4em"}
                auto ${props => (props.align == "right" ? "0.4em" : 0)}em;
            font-size: 1em;
        `};
    margin-bottom: ${props => props.theme.input.margin}em;
`;
class DatePickerInputField extends Component {
    render() {
        const { name, ...rest } = this.props;

        return <StyledInput name={name} {...rest} />;
    }
}

DatePickerInputField.displayName = "DatePickerInputField";

DatePickerInputField.propTypes = {};

DatePickerInputField.defaultProps = {};

export default DatePickerInputField;
