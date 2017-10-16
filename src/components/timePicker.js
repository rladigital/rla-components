import React, { Component } from "react";
import PropTypes from "prop-types";
import RCTimePicker from "rc-time-picker";
import moment from "moment";
import styled, { css } from "styled-components";
import { shade } from "./_functions";
import Label from "./label";

import "rc-time-picker/assets/index.css";

const TIME_FORMAT = "HH:mm";

class TimePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTime: moment()
        };
    }

    handleChange(time) {
        this.setState({
            selectedTime: time
        });
        this.props.onTimeChange(time.format(TIME_FORMAT));
    }

    render() {
        const { label, name, value, ...rest } = this.props;
        // const timeValue =
        //     this.state.selectedTime === ""
        //         ? moment()
        //         : moment(this.state.selectedTime, TIME_FORMAT);
        console.log(rest);
        return (
            <div>
                {label && (
                    <Label for={name} {...this.props}>
                        {label}
                    </Label>
                )}
                {this.props.easyRead && <b>{this.props.easyRead}</b>}
                <RCTimePicker
                    name={this.props.name}
                    defaultValue={this.state.selectedTime}
                    value={this.state.selectedTime}
                    onChange={this.handleChange.bind(this)}
                    {...rest}
                />
            </div>
        );
    }
}

TimePicker.propTypes = {
    onTimeChange: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired,
    showSecond: PropTypes.bool,
    use12Hours: PropTypes.bool
};

TimePicker.defaultProps = {
    showSecond: false
};

export default TimePicker;
