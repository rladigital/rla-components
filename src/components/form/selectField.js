import React from "react";
import PropTypes from "prop-types";
import styled, { withComponent } from "styled-components";
import { shade } from "../../functions";
import FormLabel from "./label";
import InputError from "./inputError";
import { BaseInput } from "./input";

const Select = BaseInput.withComponent("select").extend`
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='32' height='24' viewBox='0 0 32 24'><polygon points='0,0 32,0 16,24' style='fill: rgb%28138, 138, 138%29'></polygon></svg>");
    background-origin: content-box;
    background-position: right center;
    background-repeat: no-repeat;
    background-size: 9px 6px;
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
    error,
    labelWidth,
    labelAlign,
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
                <FormLabel
                    name={name}
                    width={labelWidth}
                    align={labelAlign}
                    {...rest}>
                    {label}
                </FormLabel>
            )}
            <Select
                id={name}
                onChange={handleChange}
                labelWidth={labelWidth}
                labelAlign={labelAlign}
                {...rest}>
                <option value="">{emptyOption}</option>
                {options &&
                    options.map((opt, index) => (
                        <option value={opt.value} key={index}>
                            {opt.text}
                        </option>
                    ))}
            </Select>
            <InputError error={error} />
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
    input: PropTypes.object,
    label: PropTypes.string,
    emptyOption: PropTypes.string,
    error: PropTypes.string,
    height: PropTypes.number,
    labelWidth: PropTypes.number,
    labelAlign: PropTypes.text
};
SelectField.defaultProps = {
    size: "default",
    emptyOption: "— Select One —",
    error: "",
    height: 30
};
export default SelectField;
