import React from "react";
import PropTypes from "prop-types";
import styled, { withComponent } from "styled-components";
import { shade } from "../../functions";
import FormLabel from "./label";
import InputError from "./inputError";
import { BaseInput } from "./input";

const backgroundImage = (size, arrowScale, arrowColor, backgroundColor) => {
    return encodeURI(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <rect width="${size}" height="${size}" style="fill: ${backgroundColor}"/>
        <path d="M0,6.41l-10-10,2.83-2.83L0,.76,7.17-6.41,10-3.59Z" style="transform: translate(50%, 50%) scale(${arrowScale}); fill: ${arrowColor};"/>
    </svg>`);
};

const Select = BaseInput.withComponent("select").extend`
    background-image: url("data:image/svg+xml;utf8,${props =>
        backgroundImage(
            props.height,
            props.theme.input.iconScale,
            props.theme.input.iconColor,
            props.theme.input.iconBackground
        )}");
    background-origin: content-box;
    background-position: right -${props => props.height + 5}px  center;
    background-repeat: no-repeat;
    background-size: ${props => props.height}px ${props => props.height}px;
    appearance: none;
    padding-right: ${props => props.height + 5}px;
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
    wrapperProps,
    ...rest
}) => {
    const handleChange = event => {
        onChange({
            name: name,
            value: event.target.value
        });
    };
    return (
        <span {...wrapperProps}>
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
