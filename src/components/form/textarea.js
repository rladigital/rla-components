import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { shade } from "../../functions";
import FormLabel from "./label";
import InputError from "./inputError";
import { BaseInput } from "./input";

const StyledTextarea = BaseInput.withComponent("textarea").extend`

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
    error: ""
};
export default TextareaField;
