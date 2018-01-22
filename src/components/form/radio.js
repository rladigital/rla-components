import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { shade } from "../../functions";
import FormLabel from "./label";
import InputError from "./inputError";

const StyledInput = styled.input`
    margin-bottom: ${props => props.theme.margin}em;
`;

const RadioField = ({
    options,
    input,
    type,
    name,
    onChange,
    label,
    readOnly,
    error,
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
            )}
            {options &&
                options.map((radio, index) => (
                    <div key={index}>
                        <StyledInput
                            type="radio"
                            name={name}
                            {...rest}
                            value={radio.value}
                            onChange={handleChange}
                        />
                        {" " + radio.text}
                    </div>
                ))}

            <InputError error={error} />
        </div>
    );
};

RadioField.displayName = "RadioField";

RadioField.propTypes = {
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
    type: PropTypes.string,
    label: PropTypes.string,
    readOnly: PropTypes.bool,
    error: PropTypes.string
};
RadioField.defaultProps = {
    size: "default",
    expanded: false,
    inlineLabel: true,
    type: "text",
    readOnly: false,
    error: ""
};
export default RadioField;
