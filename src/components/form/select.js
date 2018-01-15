import React from "react";
import FormLabel from "./label";
import PropTypes from "prop-types";
import isArray from "lodash/isArray";
import InputError from "./inputError";
import 'react-select/dist/react-select.css';
import ReactSelect, { Creatable } from 'react-select';

class Select extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            value: props.defaultValue || ''
        };
    }

    componentWillReceiveProps(props) {
        if (props.value !== this.props.value) {
            this.setState({ value: props.value });
        }
    }

    handleChange = selected => {
        let value              = '';
        let { name, onChange } = this.props;

        if (isArray(selected)) {
            value = selected.map(selected => selected.value)
        }
        else if (selected && selected.value) {
            value = selected.value
        }

        this.setState({ value: selected }, () => onChange({ name, value }));
    }

    shouldKeyDownEventCreateNewOption = ({ keyCode }) => {
        return [9, 13, this.props.tags ? 188 : ''].indexOf(keyCode) != -1 // Create new options only on tab and enter
    }

    render() {
        const { options, name, onChange, labelProps, error, creatable, tags, ...rest } = this.props
        const Component = creatable || tags ? Creatable : ReactSelect

        return (
            <div>
                {labelProps.label && (
                    <FormLabel name={name} {...labelProps}>
                        {labelProps.label}
                    </FormLabel>
                )}{" "}

                <Component
                    options={options.map(option => ({ value: option.value, label: option.text }))}
                    value={this.state.value}
                    onChange={this.handleChange}
                    shouldKeyDownEventCreateNewOption={this.shouldKeyDownEventCreateNewOption}
                    {...rest}
                />

                <InputError error={error} />
            </div>
        );
    }
}

Select.displayName = "Select";

Select.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.any,
            text: PropTypes.string.isRequired
        })
    ),
    labelProps: PropTypes.shape({
        label: PropTypes.string.isRequired
    }),
    placeholder: PropTypes.string,
    multi: PropTypes.bool,
    creatable: PropTypes.bool,
    tags: PropTypes.bool,
    error: PropTypes.string
};

Select.defaultProps = {
    error: '',
    labelProps: {
        label: ''
    }
};

export default Select;
