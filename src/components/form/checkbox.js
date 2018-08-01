import React, { Component } from "react";
import PropTypes from "prop-types";
import isUndefined from "lodash/isUndefined";
import isArray from "lodash/isArray";
import styled, { css } from "styled-components";

import { shade } from "../../functions";
import FormLabel from "./label";
import InputError from "./inputError";

const Container = styled.div`
    margin-bottom: ${props => props.theme.spacing.margin - 0.2}em;
`;

const G = styled.g`
    transform: translate(50%, 50%);
`;

const CheckboxCheck = styled.path.attrs({
    d:
        "M-2.73,6.11-8.29.56a.86.86,0,0,1,0-1.21l1.21-1.21a.86.86,0,0,1,1.21,0l3.75,3.75,8-8a.86.86,0,0,1,1.21,0L8.29-4.9a.86.86,0,0,1,0,1.21L-1.52,6.11A.86.86,0,0,1-2.73,6.11Z"
})`
    transform: scale(0);
    fill: ${props => props.theme.checkbox.color};
    transition: transform 0.25s ease;
`;

const CheckboxSquare = styled.rect.attrs({
    width: 20,
    height: 20,
    rx: 3,
    ry: 3
})`
    stroke-width: 1px;
    fill: ${props => props.theme.checkbox.background};
    stroke: ${props => props.theme.checkbox.stroke};
`;

const Checkbox = styled.svg.attrs({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20"
})`
    display: inline-block;
    vertical-align: middle;
`;

const Input = styled.input`
    display: none;
    &:checked + ${Checkbox} ${CheckboxCheck} {
        transform: scale(1);
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

class MultiCheckbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            values: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (
            nextProps.value !== this.props.value &&
            Array.isArray(nextProps.value)
        ) {
            this.setState({
                values: nextProps.value
            });
        }
    }

    handleChange(event, value) {
        const { onChange } = this.props;
        let newValues = this.state.values.slice();
        if (event.target.checked) {
            newValues.push(value);
        } else {
            newValues.splice(newValues.indexOf(value), 1);
        }
        this.setState({
            values: newValues
        });
        return onChange({ name: this.props.name, value: newValues });
    }

    render() {
        const { options, onBlur, error, ...rest } = this.props;
        const { values } = this.state;

        const checkboxes = options.map(option => {
            const isChecked = values.indexOf(option.value) > -1;

            return (
                <Wrapper key={option.value}>
                    <Input
                        type="checkbox"
                        onChange={event =>
                            this.handleChange(event, option.value)
                        }
                        checked={isChecked}
                        value={option.value}
                    />
                    <Checkbox>
                        <CheckboxSquare />
                        <G>
                            <CheckboxCheck />
                        </G>
                    </Checkbox>
                    <Text>{" " + option.text}</Text>
                </Wrapper>
            );
        });

        return (
            <Container>
                {this.props.label && (
                    <FormLabel {...rest} marginBottom={1.2}>
                        {this.props.label}
                    </FormLabel>
                )}
                {checkboxes}

                <InputError error={error} />
            </Container>
        );
    }
}
MultiCheckbox.displayName = "MultiCheckbox";

MultiCheckbox.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.any.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
    error: PropTypes.string
};

export default MultiCheckbox;
