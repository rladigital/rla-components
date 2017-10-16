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
                <Label for={name} {...rest}>
                    {label}
                </Label>
            )}
            {options &&
                options.map(e => (
                    <div key={e.id} style={{ float: "left" }}>
                        <StyledInput type="radio" {...input} value={e.id} />
                        {e.name}
                    </div>
                ))}
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    );
};

Radio.displayName = "Radio";

Radio.propTypes = {
    options: PropTypes.arrayOf({
        id: PropTypes.any,
        name: PropTypes.string.isRequired
    }),
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
