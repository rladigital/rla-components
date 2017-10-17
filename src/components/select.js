import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { shade } from "./_functions";
import Label from "./label";

const StyledInput = styled.input`
    margin-bottom: ${props => props.theme.margin}em;
`;

const Select = ({
    options,
    input,
    type,
    name,
    label,
    emptyOption,
    readOnly,
    meta,
    ...rest
}) => {
    return (
        <div>
            {label && (
                <Label name={name} label={label} {...rest}>
                    {label}
                </Label>
            )}

            <select {...input}>
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

Select.displayName = "Select";

Select.propTypes = {
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
Select.defaultProps = {
    size: "default",
    expanded: false,
    inlineLabel: true,
    emptyOption: "--Select One--",
    meta: {}
};
export default Select;
