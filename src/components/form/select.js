import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { shade } from "../_functions";
import FormLabel from "./label";

const StyledInput = styled.input`
    margin-bottom: ${props => props.theme.margin}em;
`;

const SelectField = ({
    options,
    type,
    name,
    onChange,
    label,
    inlineLabel,
    emptyOption,
    expanded,
    readOnly,
    meta,

    ...rest
}) => {
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
            )}{" "}
            <select onChange={handleChange} {...rest}>
                <option value="">{emptyOption}</option>
                {options &&
                    options.map((opt, index) => (
                        <option value={opt.value} key={index}>
                            {opt.text}
                        </option>
                    ))}
            </select>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    );
};

SelectField.displayName = "SelectField";

SelectField.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.any,
            text: PropTypes.string.isRequired
        })
    ),
    size: PropTypes.string,
    expanded: PropTypes.bool,
    inlineLabel: PropTypes.bool,
    input: PropTypes.object,
    label: PropTypes.string,
    emptyOption: PropTypes.string,
    meta: PropTypes.shape({
        touched: PropTypes.bool,
        error: PropTypes.string
    })
};
SelectField.defaultProps = {
    size: "default",
    expanded: false,
    inlineLabel: true,
    emptyOption: "--Select One--",
    meta: {}
};
export default SelectField;
