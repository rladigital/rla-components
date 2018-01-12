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
import InputError from "../inputError";

import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.css";

const DATE_FORMAT = "DD/MM/YYYY";
const DatePickerContainer = styled.div`
    width: 100%;
    max-width: ${props => (props.expanded ? "100%" : "100%")};
`;
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
            <DatePickerContainer>
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
                        field.error ? "alert" : ""
                    }`}
                    popperContainer={CalendarContainer}
                    popperClassName="showInFront"
                />

                <InputError error={field.error} />
            </DatePickerContainer>
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
    error: PropTypes.string
};
DatePicker.defaultProps = {
    error: '',
    expanded: true
};
export default DatePicker;
