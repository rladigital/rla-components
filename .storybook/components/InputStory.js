import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import { Input, Button } from "../../src/index";

storiesOf("Input", module).add(
    "Text Inputs",
    withInfo(
        "This is the default input. It is automatically set to type='text'. The input accepts all of the standard HTML5 attributes such as placeholder, value etc. Styles are applied based on type."
    )(() => (
        <div>
            <Input defaultValue="default" />
            <Input placeholder="with placeholder" />
            <Input defaultValue="password" type="password" />
        </div>
    ))
);
