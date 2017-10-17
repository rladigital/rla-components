import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDatePicker from "react-datepicker";
import moment from "moment";
import styled, { css } from "styled-components";
import { shade } from "./_functions";
import Label from "./label";

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

    handleChange(date) {
        this.setState({
            selectedDate: date
        });
        const newDate = date === null ? "" : date.format(DATE_FORMAT);
        this.props.onChange(newDate);
    }

    render() {
        const field = this.props;
        return (
            <div>
                {this.props.label && (
                    <Label {...field}>{this.props.label}</Label>
                )}
                {this.props.easyRead && <b>{this.props.easyRead}</b>}
                <ReactDatePicker
                    {...field}
                    dateFormat={DATE_FORMAT}
                    selected={this.state.selectedDate}
                    onChange={this.handleChange.bind(this)}
                    className={`form-control ${field.meta.touched &&
                    field.meta.invalid
                        ? "alert"
                        : ""}`}
                />
                {field.meta.touched &&
                    field.meta.error && (
                        <small className="alert">{field.meta.error}</small>
                    )}
            </div>
        );
    }
}

DatePicker.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
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
