import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { shade } from "./_functions";
import Label from "./label";

const StyledInput = styled.input`
    margin-bottom: ${props => props.theme.margin}em;
`;

const Radio = ({
    options,
    input,
    type,
    name,
    label,
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
            {options &&
                options.map((radio, index) => (
                    <div key={index}>
                        <StyledInput
                            type="radio"
                            {...input}
                            value={radio.value}
                        />
                        {radio.text}
                    </div>
                ))}
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    );
};

Radio.displayName = "Radio";

Radio.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.any,
            text: PropTypes.string.isRequired
        })
    ),
    name: PropTypes.string.isRequired,
    size: PropTypes.string,
    expanded: PropTypes.bool,
    inlineLabel: PropTypes.bool,
    input: PropTypes.object,
    type: PropTypes.string,
    label: PropTypes.string,
    readOnly: PropTypes.bool,
    meta: PropTypes.shape({
        touched: PropTypes.bool,
        error: PropTypes.string
    })
};
Radio.defaultProps = {
    size: "default",
    expanded: false,
    inlineLabel: true,
    type: "text",
    readOnly: false,
    meta: {}
};
export default Radio;
