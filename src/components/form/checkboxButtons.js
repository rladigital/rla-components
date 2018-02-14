import React from "react";
import Button from "../button";
import FormLabel from "./label";
import PropTypes from "prop-types";
import isArray from "lodash/isArray";
import InputError from "./inputError";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faSquare from "@fortawesome/fontawesome-free-solid/faSquare";
import faCheckSquare from "@fortawesome/fontawesome-free-solid/faCheckSquare";
import { withTheme } from "styled-components";

class CheckboxButtons extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            values: props.defaultValue || []
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value && isArray(nextProps.value)) {
            this.setState({
                values: nextProps.value
            });
        }
    }

    handleChange = value => {
        const { onChange } = this.props;
        let values = [...this.state.values];
        let valuePosition = values.indexOf(value);

        if (valuePosition != -1) {
            values.splice(valuePosition, 1);
        } else {
            values.push(value);
        }

        this.setState({ values }, () =>
            onChange({ name: this.props.name, value: values })
        );
    };

    render() {
        const { values } = this.state;
        const {
            theme,
            options,
            error,
            buttonProps: { defaultColor, activeColor, ...buttonProps },
            ...rest
        } = this.props;

        const buttons = options.map(option => {
            let isChecked = values.indexOf(option.value) > -1;
            let params = {
                ...buttonProps,
                key: option.value,
                color: isChecked
                    ? activeColor || theme.checkboxButton.activeColor
                    : defaultColor || theme.checkboxButton.defaultColor,
                onClick: () => this.handleChange(option.value)
            };

            return [
                <Button {...params}>
                    <FontAwesomeIcon
                        icon={isChecked ? faCheckSquare : faSquare}
                    />{" "}
                    {option.text}
                </Button>,
                " "
            ];
        });

        return (
            <div>
                {this.props.label && (
                    <FormLabel {...rest}>{this.props.label}</FormLabel>
                )}

                <div>{buttons}</div>

                <InputError error={error} />
            </div>
        );
    }
}

CheckboxButtons = withTheme(CheckboxButtons);

CheckboxButtons.displayName = "CheckboxButtons";

CheckboxButtons.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.any.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
    defaultValue: PropTypes.array,
    buttonProps: PropTypes.object,
    error: PropTypes.string
};

CheckboxButtons.defaultProps = {
    error: "",
    buttonProps: {}
};

export default CheckboxButtons;
