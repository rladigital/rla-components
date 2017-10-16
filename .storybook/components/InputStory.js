import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import { Input, Button, Radio } from "../../src/index";

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
            </div>
        ))
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
        "Sizes",
        withInfo("Sizes can be changesd")(() => (
            <div>
                <Input name="test" defaultValue="small" size="small" />
                <Input name="test" defaultValue="default" />
                <Input name="test" defaultValue="large" size="large" />
            </div>
        ))
    );
