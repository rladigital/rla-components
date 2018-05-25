import React from "react";
import moment from "moment";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import {
    withKnobs,
    text,
    number,
    array,
    boolean,
    select
} from "@storybook/addon-knobs";

import {
    InputField,
    TextareaField,
    Button,
    RadioField,
    Select,
    SelectField,
    MultiCheckbox,
    CheckboxButtons,
    DatePicker,
    TimePicker,
    Range
} from "../../src/index";

const stories = storiesOf("Form Inputs", module);

stories.addDecorator(withKnobs);
stories
    .add(
        "Text Inputs",
        withInfo(
            "This is the default input. It is automatically set to type='text'. The inputField accepts all of the standard HTML5 attributes such as placeholder, value etc. Styles are applied based on type."
        )(() => {
            const error = text("error", "");
            const value = text("value");
            const label = text("label", "Label");
            const height = number("height");
            const labelWidth = number("labelWidth");
            const labelAlign = select("labelAlign", ["left", "right"], "left");

            return (
                <div>
                    <InputField
                        name="test"
                        label={label}
                        value={value}
                        height={height}
                        labelWidth={labelWidth}
                        labelAlign={labelAlign}
                        onChange={value => {
                            console.log(value);
                        }}
                        error={error}
                    />
                </div>
            );
        })
    )
    .add(
        "Textarea",
        withInfo("This is an example textarea.")(() => {
            const error = text("error", "");
            const value = text("Text for the textarea");

            return (
                <div>
                    <TextareaField
                        name="test"
                        placeholder="placeholder text"
                        value={value}
                        label="With Label"
                        onChange={value => {
                            console.log(value);
                        }}
                        error={error}
                    />
                </div>
            );
        })
    )
    .add(
        "Radio Buttons",
        withInfo("This is for radio buttons.")(() => {
            let error = text("error", "");
            let inlineLabel = boolean("Inline Label", true);
            let inlineRadioButtons = boolean("Inline the radio buttons", false);

            const options = [
                { value: "1", text: "first" },
                { value: "2", text: "second" },
                { value: "3", text: "third" },
                { value: "4", text: "forth", checked: true }
            ];
            return (
                <div>
                    <RadioField
                        name="test"
                        label="With Label"
                        options={options}
                        onChange={value => {
                            console.log(value);
                        }}
                        error={error}
                        inlineLabel={inlineLabel}
                        inlineRadioButtons={inlineRadioButtons}
                    />
                </div>
            );
        })
    )
    .add(
        "Select",
        withInfo("This is for Select menus.")(() => {
            let multi = boolean("multi", false);
            let tags = boolean("tags", false);
            let creatable = boolean("creatable", false);
            let placeholder = text("placeholder", "Select Option...");
            let error = text("error", "");

            const options = [
                { value: "first-value", text: "first" },
                { value: "second-value", text: "second" },
                { value: "third-value", text: "third" },
                { value: "forth-value", text: "forth" }
            ];
            return (
                <div>
                    <Select
                        name="test-select"
                        defaultValue="second-value"
                        labelProps={{ label: "Select an Option" }}
                        options={options}
                        onChange={selection => {
                            console.log(selection);
                        }}
                        tags={tags}
                        multi={multi}
                        error={error}
                        creatable={creatable}
                        placeholder={placeholder}
                    />
                </div>
            );
        })
    )
    .add(
        "SelectField",
        withInfo("This is for SelectField menus.")(() => {
            const error = text("error", "");
            const height = number("height");
            const labelWidth = number("labelWidth");
            const labelAlign = select("labelAlign", ["left", "right"], "left");
            const label = text("label", "Label");

            const options = [
                { value: "1", text: "first" },
                { value: "2", text: "second" },
                { value: "3", text: "third" },
                { value: "4", text: "forth" }
            ];
            return (
                <div>
                    <SelectField
                        name="test-select"
                        defaultValue="default"
                        label={label}
                        options={options}
                        height={height}
                        labelWidth={labelWidth}
                        labelAlign={labelAlign}
                        onChange={selection => {
                            console.log(selection);
                        }}
                        error={error}
                    />
                </div>
            );
        })
    )
    .add(
        "Checkboxes",
        withInfo("This is for checkboxes.")(() => {
            let error = text("error", "");

            const options = [
                { value: "1", text: "first" },
                { value: "2", text: "second" },
                { value: "3", text: "third" },
                { value: "4", text: "forth" }
            ];
            return (
                <div>
                    <MultiCheckbox
                        name="test-checkboxes"
                        defaultValue="default"
                        label="Checkboxes"
                        options={options}
                        onChange={selection => {
                            console.log(selection);
                        }}
                        error={error}
                    />
                </div>
            );
        })
    )
    .add(
        "CheckboxButtons",
        withInfo("This is for checkbox buttons.")(() => {
            let error = text("error", "");

            const options = [
                { value: "1", text: "first" },
                { value: "2", text: "second" },
                { value: "3", text: "third" },
                { value: "4", text: "forth" }
            ];
            return (
                <div>
                    <CheckboxButtons
                        name="test-checkboxbuttons"
                        defaultValue={["1", "3"]}
                        label="Checkbox Buttons"
                        options={options}
                        onChange={selection => {
                            console.log(selection);
                        }}
                        buttonProps={{
                            defaultColor: "success",
                            activeColor: "alert"
                        }}
                        error={error}
                    />
                </div>
            );
        })
    )
    .add(
        "Date Picker",
        withInfo("This is a date picker.")(() => {
            let error = text("error", "");

            return (
                <div>
                    <DatePicker
                        name="deadline"
                        minDate={moment()}
                        maxDate={moment().add(5, "days")}
                        label="Deadline"
                        style={{ display: "block" }}
                        value={moment()}
                        onChange={newDate => {
                            console.log(newDate);
                        }}
                        error={error}
                    />
                </div>
            );
        })
    )
    .add(
        "Time Picker",
        withInfo("This is a time picker.")(() => {
            let error = text("error", "");

            return (
                <div>
                    <TimePicker
                        name="deadline"
                        label="Deadline"
                        onChange={newTime => {
                            console.log(newTime);
                        }}
                        error={error}
                    />
                </div>
            );
        })
    )
    .add(
        "Range Select",
        withInfo(
            "This is a react component to use in place of an input type range."
        )(() => {
            let error = text("error", "");

            return (
                <div>
                    <Range
                        name="drivetime"
                        label="Drivetime"
                        value={number("Number Range (between 0 and 60", 0, {
                            range: true,
                            min: 0,
                            max: 60,
                            step: 1
                        })}
                        minValue={0}
                        maxValue={60}
                        onChange={value => {
                            console.log(value);
                        }}
                        error={error}
                    />
                </div>
            );
        })
    );
