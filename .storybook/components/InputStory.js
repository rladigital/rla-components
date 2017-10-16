import React from "react";
import moment from "moment";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import {
    Input,
    Textarea,
    Button,
    Radio,
    Select,
    DatePicker,
    TimePicker
} from "../../src/index";

storiesOf("Input", module)
    .add(
        "Text Inputs",
        withInfo(
            "This is the default input. It is automatically set to type='text'. The input accepts all of the standard HTML5 attributes such as placeholder, value etc. Styles are applied based on type."
        )(() => (
            <div>
                <Input name="test" defaultValue="default" label="With Label" />
                <Input
                    name="test"
                    defaultValue="default"
                    label="With Label Block"
                    inlineLabel={false}
                />
                <Input name="test" placeholder="with placeholder" />
                <Input name="test" defaultValue="password" type="password" />
                <Input name="test" defaultValue="small" size="small" />
                <Input name="test" defaultValue="default" />
                <Input name="test" defaultValue="large" size="large" />
            </div>
        ))
    )
    .add(
        "Textarea",
        withInfo("This is an example textarea.")(() => {
            return (
                <div>
                    <Textarea
                        name="test"
                        placeholder="placeholder text"
                        label="With Label"
                    />
                </div>
            );
        })
    )
    .add(
        "Radio Buttons",
        withInfo("This is for radio buttons.")(() => {
            const options = [
                { id: 1, name: "first" },
                { id: 2, name: "second" },
                { id: 3, name: "third" },
                { id: 4, name: "forth" }
            ];
            return (
                <div>
                    <Radio
                        name="test"
                        defaultValue="default"
                        label="With Label"
                        options={options}
                    />
                </div>
            );
        })
    )
    .add(
        "Select",
        withInfo("This is for select menus.")(() => {
            const options = [
                { id: 1, name: "first" },
                { id: 2, name: "second" },
                { id: 3, name: "third" },
                { id: 4, name: "forth" }
            ];
            return (
                <div>
                    <Select
                        name="test-select"
                        defaultValue="default"
                        label="With Label"
                        emptyOption="--Pick an Option--"
                        options={options}
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
                        onTimeChange={newTime => {
                            console.log(newTime);
                        }}
                    />
                </div>
            );
        })
    );
