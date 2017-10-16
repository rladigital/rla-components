import React, { Component } from "react";
import PropTypes from "prop-types";
import isUndefined from "lodash/isUndefined";
import isArray from "lodash/isArray";
import styled, { css } from "styled-components";
import { shade } from "./_functions";
import Label from "./label";

class MultiCheckbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            values: []
        };

        this.handleChange = this.handleChange.bind(this);
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
        return onChange(newValues);
    }

    render() {
        const { options, onBlur, ...rest } = this.props;
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
                    <Label for={name} {...rest}>
                        {this.props.label}
                    </Label>
                )}
                {checkboxes}
            </div>
        );
    }
}

MultiCheckbox.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.any.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
    onChange: PropTypes.func.isRequired
};

export default MultiCheckbox;
