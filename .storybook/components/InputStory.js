import React from "react";
import moment from "moment";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, number, array } from "@storybook/addon-knobs";

import {
    InputField,
    TextareaField,
    Button,
    RadioField,
    SelectField,
    MultiCheckbox,
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
        )(() => (
            <div>
                <InputField
                    name="test"
                    label="With Label"
                    value={text("With Label Text")}
                    onChange={value => {
                        console.log(value);
                    }}
                />
                <InputField
                    name="test"
                    label="With Label Block"
                    value={text("With Label Block Text")}
                    inlineLabel={false}
                    onChange={value => {
                        console.log(value);
                    }}
                />
                <InputField
                    name="test"
                    placeholder="with placeholder"
                    value={text("With Placeholder Text")}
                    onChange={value => {
                        console.log(value);
                    }}
                />
                <InputField
                    name="test"
                    type="password"
                    value={text("Password")}
                    onChange={value => {
                        console.log(value);
                    }}
                />
                <InputField
                    name="test"
                    size="small"
                    value={text("Small Text")}
                    onChange={value => {
                        console.log(value);
                    }}
                />
                <InputField
                    name="test"
                    value={text("Default Size Text")}
                    onChange={value => {
                        console.log(value);
                    }}
                />
                <InputField
                    name="test"
                    value={text("Large Text")}
                    size="large"
                    onChange={value => {
                        console.log(value);
                    }}
                />
            </div>
        ))
    )
    .add(
        "Textarea",
        withInfo("This is an example textarea.")(() => {
            return (
                <div>
                    <TextareaField
                        name="test"
                        placeholder="placeholder text"
                        value={text("Text for the textarea")}
                        label="With Label"
                        onChange={value => {
                            console.log(value);
                        }}
                    />
                </div>
            );
        })
    )
    .add(
        "Radio Buttons",
        withInfo("This is for radio buttons.")(() => {
            const options = [
                { value: "1", text: "first" },
                { value: "2", text: "second" },
                { value: "3", text: "third" },
                { value: "4", text: "forth" }
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
                    />
                </div>
            );
        })
    )
    .add(
        "Select",
        withInfo("This is for select menus.")(() => {
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
                        label="With Label"
                        emptyOption="--Pick an Option--"
                        options={options}
                        onChange={selection => {
                            console.log(selection);
                        }}
                    />
                </div>
            );
        })
    )
    .add(
        "Checkboxes",
        withInfo("This is for checkboxes.")(() => {
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
                    />
                </div>
            );
        })
    )
    .add(
        "Date Picker",
        withInfo("This is a date picker.")(() => {
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
                    />
                </div>
            );
        })
    )
    .add(
        "Time Picker",
        withInfo("This is a time picker.")(() => {
            return (
                <div>
                    <TimePicker
                        name="deadline"
                        label="Deadline"
                        onChange={newTime => {
                            console.log(newTime);
                        }}
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
                    />
                </div>
            );
        })
    );
