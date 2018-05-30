import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { BaseInput } from "../input";

const backgroundImage = (size, arrowScale, arrowColor, backgroundColor) => {
    return encodeURI(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <rect width="${size}" height="${size}" style="fill: ${backgroundColor}"/>
        <path d="M-3,1.24H-4.53A.47.47,0,0,1-5,.78V-.79a.47.47,0,0,1,.47-.47H-3a.47.47,0,0,1,.47.47V.78A.47.47,0,0,1-3,1.24ZM1.25.78V-.79a.47.47,0,0,0-.47-.47H-.78a.47.47,0,0,0-.47.47V.78a.47.47,0,0,0,.47.47H.78A.47.47,0,0,0,1.25.78ZM5,.78V-.79a.47.47,0,0,0-.47-.47H3a.47.47,0,0,0-.47.47V.78A.47.47,0,0,0,3,1.24H4.53A.47.47,0,0,0,5,.78ZM1.25,4.53V3a.47.47,0,0,0-.47-.47H-.78A.47.47,0,0,0-1.25,3V4.53A.47.47,0,0,0-.78,5H.78A.47.47,0,0,0,1.25,4.53Zm-3.75,0V3A.47.47,0,0,0-3,2.49H-4.53A.47.47,0,0,0-5,3V4.53A.47.47,0,0,0-4.53,5H-3A.47.47,0,0,0-2.5,4.53Zm7.5,0V3a.47.47,0,0,0-.47-.47H3A.47.47,0,0,0,2.5,3V4.53A.47.47,0,0,0,3,5H4.53A.47.47,0,0,0,5,4.53ZM8.75-5.63V8.12A1.88,1.88,0,0,1,6.88,10H-6.87A1.88,1.88,0,0,1-8.75,8.12V-5.63A1.88,1.88,0,0,1-6.87-7.51H-5v-2A.47.47,0,0,1-4.53-10H-3a.47.47,0,0,1,.47.47v2h5v-2A.47.47,0,0,1,3-10H4.53A.47.47,0,0,1,5-9.54v2H6.88A1.88,1.88,0,0,1,8.75-5.63ZM6.88,7.89V-3.76H-6.87V7.89a.24.24,0,0,0,.23.23H6.64A.24.24,0,0,0,6.88,7.89Z" style="transform: translate(50%, 50%) scale(${arrowScale}); fill: ${arrowColor};"/>
    </svg>`);
};

const StyledInput = BaseInput.extend`
    background-image: url("data:image/svg+xml;utf8,${props =>
        backgroundImage(
            props.height,
            props.theme.input.iconScale,
            props.theme.input.iconColor,
            props.theme.input.iconBackground
        )}");
    background-origin: content-box;
    background-position: right  center;
    background-repeat: no-repeat;
    background-size: ${props => props.height}px ${props => props.height}px;
    appearance: none;
    padding-right: 0;
`;
class DatePickerInputField extends Component {
    render() {
        const { name, ...rest } = this.props;

        return <StyledInput name={name} {...rest} />;
    }
}

DatePickerInputField.displayName = "DatePickerInputField";

DatePickerInputField.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    height: PropTypes.number,
    expanded: PropTypes.bool,
    block: PropTypes.bool,
    input: PropTypes.object,
    type: PropTypes.string,
    label: PropTypes.string,
    readOnly: PropTypes.bool,
    error: PropTypes.string
};

DatePickerInputField.defaultProps = {
    height: 30,
    expanded: true,
    block: true,
    type: "text",
    readOnly: false,
    error: ""
};

export default DatePickerInputField;
