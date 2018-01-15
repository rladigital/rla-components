import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { shade } from "../_functions";
import FormLabel from "./label";
import InputError from "./inputError";

const StyledTextarea = styled.textarea`
    width: 100%;
    border-radius: ${props => props.theme.input.radius}em;
    border: 1px solid ${props => props.theme.input.borderColor};
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    padding: 0 ${props => props.theme.input.sizes[props.size] / 4}em;
    margin: 0
        ${props => (props.expanded || props.align == "right" ? 0 : "0.4em")}
        auto ${props => (props.align == "right" ? "0.4em" : 0)}em;
    font-size: 1em;
    margin-bottom: ${props => props.theme.input.margin}em;
`;

const TextareaField = ({
    name,
    onChange,
    label,
    readOnly,
    rows,
    columns,
    error,
    ...rest
}) => {
    let fieldOptions = {};

    if (readOnly) {
        fieldOptions["readOnly"] = "readOnly";
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
                <FormLabel name={name} label={label} {...rest}>
                    {label}
                </FormLabel>
            )}
            <StyledTextarea
                rows={rows}
                cols={columns}
                onChange={handleChange}
                {...fieldOptions}
                {...rest}
            />

            <InputError error={error} />
        </div>
    );
};

TextareaField.displayName = "TextareaField";

TextareaField.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    size: PropTypes.string,
    expanded: PropTypes.bool,
    inlineLabel: PropTypes.bool,
    input: PropTypes.object,
    rows: PropTypes.number,
    columns: PropTypes.number,
    label: PropTypes.string,
    readOnly: PropTypes.bool,
    error: PropTypes.string
};
TextareaField.defaultProps = {
    size: "default",
    expanded: false,
    inlineLabel: true,
    rows: 6,
    columns: 20,
    type: "text",
    readOnly: false,
    error: ''
};
export default TextareaField;
