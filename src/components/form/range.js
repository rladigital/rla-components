import React, { Component } from "react";
import PropTypes from "prop-types";
import InputRange from "react-input-range";
import moment from "moment";
import styled, { css } from "styled-components";
import { shade } from "../_functions";
import FormLabel from "./label";
import { rangePropType, valuePropType } from "./rangePropTypes";

import "react-input-range/lib/css/index.css";

class Range extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
    }

    handleChange(value) {
        this.setState({
            value: value
        });
        return this.props.onChange({
            name: this.props.name,
            value: value
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    render() {
        const { label, name, value, onChange, ...rest } = this.props;

        return (
            <div>
                {label && (
                    <FormLabel
                        style={{ marginBottom: "15px" }}
                        name={name}
                        label={label}
                        {...this.props}
                    >
                        {label}
                    </FormLabel>
                )}
                {this.props.easyRead && <b>{this.props.easyRead}</b>}

                <InputRange
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                    {...rest}
                />
            </div>
        );
    }
}

Range.propTypes = {
    ariaLabelledby: PropTypes.string,
    ariaControls: PropTypes.string,
    classNames: PropTypes.objectOf(PropTypes.string),
    disabled: PropTypes.bool,
    draggableTrack: PropTypes.bool,
    formatLabel: PropTypes.func,
    label: PropTypes.string,
    maxValue: rangePropType,
    minValue: rangePropType,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onChangeStart: PropTypes.func,
    onChangeComplete: PropTypes.func,
    step: PropTypes.number,
    value: valuePropType
};

Range.defaultProps = {};

export default Range;
