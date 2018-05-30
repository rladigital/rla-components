import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { shade } from "../../functions";
import FormLabel from "./label";
import InputError from "./inputError";

const Container = styled.div`
    margin-bottom: ${props => props.theme.spacing.margin - 0.2}em;
`;

const RadioDot = styled.circle.attrs({
    cx: 10,
    cy: 10
})`
    r: 0;
    fill: ${props => props.theme.colors.primary};
    transition: r 0.25s ease;
`;

const RadioCircle = styled.circle.attrs({
    r: 9,
    cx: 10,
    cy: 10
})`
    stroke-width: 1px;
    fill: ${props => props.theme.colors.black};
    stroke: ${props => props.theme.colors.darkGray};
`;

const Radio = styled.svg.attrs({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
})`
    display: inline-block;
    vertical-align: middle;
`;

const Input = styled.input`
    display: none;
    &:checked + ${Radio} ${RadioDot} {
        r: 6px;
    }
`;

const Wrapper = styled.label`
    margin-bottom: 0.2rem;
    display: ${props => (props.inlineRadioButtons ? "inline-block" : "block")};
    padding-right: ${props => props.theme.spacing.margin}rem;
    cursor: pointer;
`;

const Text = styled.span`
    vertical-align: middle;
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
    inlineRadioButtons,
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
                <FormLabel
                    name={name}
                    label={label}
                    {...rest}
                    marginBottom={1.2}>
                    {label}
                </FormLabel>
            )}
            <Container>
                {options &&
                    options.map((radio, index) => (
                        <Wrapper
                            key={index}
                            inlineRadioButtons={inlineRadioButtons}>
                            <Input
                                type="radio"
                                name={name}
                                {...rest}
                                value={radio.value}
                                onChange={handleChange}
                                checked={radio.checked}
                            />
                            <Radio>
                                <RadioCircle />
                                <RadioDot />
                            </Radio>
                            <Text>{" " + radio.text}</Text>
                        </Wrapper>
                    ))}
            </Container>
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
    inlineRadioButtons: PropTypes.bool,
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
    inlineRadioButtons: false,
    type: "text",
    readOnly: false,
    error: ""
};
export default RadioField;
