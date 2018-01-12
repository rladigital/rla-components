import React, { Component } from "react";
import PropTypes from "prop-types";
import isUndefined from "lodash/isUndefined";
import isArray from "lodash/isArray";
import styled, { css } from "styled-components";
import { shade } from "../_functions";
import FormLabel from "./label";
import InputError from "./inputError";

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
                <div key={option.value}>
                    <label>
                        <input
                            type="checkbox"
                            onChange={event =>
                                this.handleChange(event, option.value)}
                            checked={isChecked}
                            value={option.value}
                        />
                        {option.text}
                    </label>
                </div>
            );
        });

        return (
            <div>
                {this.props.label && (
                    <FormLabel {...rest}>{this.props.label}</FormLabel>
                )}
                {checkboxes}

                <InputError error={error} />
            </div>
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
