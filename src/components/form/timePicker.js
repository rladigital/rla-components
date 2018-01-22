import React, { Component } from "react";
import PropTypes from "prop-types";
import RCTimePicker from "rc-time-picker";
import moment from "moment";
import styled, { css } from "styled-components";
import { shade } from "../../functions";
import FormLabel from "./label";
import InputError from "./inputError";

import "rc-time-picker/assets/index.css";

const TIME_FORMAT = "HH:mm";

class TimePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTime: moment()
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                selectedTime: moment.isMoment(nextProps.value)
                    ? nextProps.value
                    : moment(nextProps.value, DATE_FORMAT)
            });
        }
    }

    handleChange(time) {
        this.setState({
            selectedTime: time
        });
        return this.props.onChange({
            name: this.props.name,
            value: time.format(TIME_FORMAT)
        });
    }

    render() {
        const { label, name, value, onChange, error, ...rest } = this.props;

        return (
            <div>
                {label && (
                    <FormLabel name={name} label={label} {...this.props}>
                        {label}
                    </FormLabel>
                )}

                {this.props.easyRead && <b>{this.props.easyRead}</b>}

                <RCTimePicker
                    name={this.props.name}
                    defaultValue={this.state.selectedTime}
                    value={this.state.selectedTime}
                    onChange={this.handleChange.bind(this)}
                    {...rest}
                />

                <InputError error={error} />
            </div>
        );
    }
}

TimePicker.displayName = "TimePicker";

TimePicker.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any,
    label: PropTypes.string,
    showSecond: PropTypes.bool,
    use12Hours: PropTypes.bool,
    error: PropTypes.string
};

TimePicker.defaultProps = {
    showSecond: false,
    error: ""
};

export default TimePicker;
