import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { shade } from "../_functions";
import FormLabel from "./label";

const Select = styled.select`
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
        ${props => (props.expanded || props.align == "right" ? 0 : "0.4em")}
        auto ${props => (props.align == "right" ? "0.4em" : 0)}em;
    margin-bottom: ${props => props.theme.input.margin}em;
    font-size: 1em;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='32' height='24' viewBox='0 0 32 24'><polygon points='0,0 32,0 16,24' style='fill: rgb%28138, 138, 138%29'></polygon></svg>");
    background-origin: content-box;
    background-position: right -1rem center;
    background-repeat: no-repeat;
    background-size: 9px 6px;
    padding-right: 1.5rem;
    appearance: none;
`;

const SelectField = ({
    options,
    type,
    name,
    onChange,
    label,
    inlineLabel,
    emptyOption,
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
        <span>
            {label && (
                <FormLabel name={name} label={label} {...rest}>
                    {label}
                </FormLabel>
            )}{" "}
            <Select onChange={handleChange} {...rest}>
                <option value="">{emptyOption}</option>
                {options &&
                    options.map((opt, index) => (
                        <option value={opt.value} key={index}>
                            {opt.text}
                        </option>
                    ))}
            </Select>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </span>
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
