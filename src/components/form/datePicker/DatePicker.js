import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ReactDatePicker from "react-datepicker";
import moment from "moment";
import styled, { css } from "styled-components";
import { shade } from "../../_functions";
import FormLabel from "../label";
import DatePickerInputField from "./DatePickerInputField";
import CalendarContainer from "./CalendarContainer";

import "react-datepicker/dist/react-datepicker.css";

const DATE_FORMAT = "DD/MM/YYYY";

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: moment()
        };
    }

    componentDidMount(props) {
        const { initialValue } = this.props;

        if (/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/i.exec(initialValue)) {
            this.handleChange(moment(initialValue, DATE_FORMAT));
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                selectedDate: moment.isMoment(nextProps.value)
                    ? nextProps.value
                    : moment(nextProps.value, DATE_FORMAT)
            });
        }
    }

    handleChange(date) {
        this.setState({
            selectedDate: date
        });
        const newDate = date === null ? "" : date.format(DATE_FORMAT);
        return this.props.onChange({ name: this.props.name, value: newDate });
    }

    render = () => {
        const field = this.props;
        return (
            <div>
                {this.props.label && (
                    <FormLabel {...field}>{this.props.label}</FormLabel>
                )}
                {this.props.easyRead && <b>{this.props.easyRead}</b>}
                <ReactDatePicker
                    {...field}
                    customInput={<DatePickerInputField />}
                    dateFormat={DATE_FORMAT}
                    selected={this.state.selectedDate}
                    onChange={this.handleChange.bind(this)}
                    className={`form-control ${
                        field.meta.touched && field.meta.invalid ? "alert" : ""
                    }`}
                    popperContainer={CalendarContainer}
                    popperClassName="showInFront"
                />
                {field.meta.touched &&
                    field.meta.error && (
                        <small className="alert">{field.meta.error}</small>
                    )}
            </div>
        );
    };
}

DatePicker.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired,
    initialValue: PropTypes.any,
    size: PropTypes.string,
    expanded: PropTypes.bool,
    inlineLabel: PropTypes.bool,
    input: PropTypes.object,
    label: PropTypes.string,
    emptyOption: PropTypes.string,
    meta: PropTypes.shape({
        touched: PropTypes.bool,
        error: PropTypes.string
    })
};
DatePicker.defaultProps = {
    meta: {}
};
export default DatePicker;
