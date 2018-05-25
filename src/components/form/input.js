import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { shade } from "../../functions";
import InputError from "./inputError";
import FormLabel from "./label";

const types = [
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
];

export const BaseInput = styled.input`
    padding: 0 5px;
    height: ${props => props.height}px;
    width: ${props => (props.labelWidth ? 100 - props.labelWidth : 100)}%;
    border-radius: ${props => props.theme.input.radius}em;
    border: 1px solid ${props => props.theme.input.borderColor};
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    margin-bottom: ${props => props.theme.spacing.margin}em;
    font-size: 1em;
    background: ${props => props.theme.input.background};
    color: ${props => props.theme.input.color};
    margin-bottom: ${props => props.theme.spacing.margin}em;
`;

export const StyledInput = BaseInput.extend`
    ${props =>
        types.indexOf(props.type) !== -1 &&
        css`
            ::placeholder {
                color: ${props => props.theme.input.color};
                opacity: 0.5;
            }
        `};
`;
const InputField = ({
    type,
    name,
    label,
    readOnly,
    meta,
    onChange,
    error,
    labelWidth,
    labelAlign,
    ...rest
}) => {
    let fieldOptions = {};

    if (readOnly) {
        fieldOptions["readOnly"] = "readOnly";
    }

    if (error) {
        fieldOptions["error"] = "error";
    }

    const handleChange = event => {
        onChange({
            name: name,
            value: event.target.value
        });
    };

    return (
        <div>
            {label && (
                <FormLabel
                    align={labelAlign}
                    width={labelWidth}
                    name={name}
                    {...rest}>
                    {label}
                </FormLabel>
            )}
            <StyledInput
                type={type}
                name={name}
                id={name}
                labelWidth={labelWidth}
                onChange={handleChange}
                {...fieldOptions}
                {...rest}
            />
            <InputError error={error} />
        </div>
    );
};

InputField.displayName = "InputField";

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    input: PropTypes.object,
    type: PropTypes.string,
    label: PropTypes.string,
    readOnly: PropTypes.bool,
    error: PropTypes.string,
    height: PropTypes.number,
    labelWidth: PropTypes.number,
    labelAlign: PropTypes.text
};

InputField.defaultProps = {
    size: "default",
    type: "text",
    readOnly: false,
    error: "",
    height: 30
};

export default InputField;
