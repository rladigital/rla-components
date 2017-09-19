import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "../../src/index";

storiesOf("Button", module)
    .add("Default", () => <Button>Default Button</Button>)
    .add("Color Variants", () => (
        <div>
            <Button color="primary">primary</Button>
            <Button color="success">success</Button>
            <Button color="alert">alert</Button>
            <Button color="warning">warning</Button>
            <Button color="white">white</Button>
            <Button color="lightGray">lightGray</Button>
            <Button color="mediumGray">mediumGray</Button>
            <Button color="darkGray">darkGray</Button>
            <Button color="black">black</Button>
        </div>
    ))
    .add("Hollow", () => <Button hollow>hollow</Button>)
    .add("Disabled", () => <Button disabled>disabled</Button>)
    .add("Alignment", () => (
        <div>
            <Button>left (default)</Button>
            <Button right>right</Button>
            <Button centered>centered</Button>
        </div>
    ));
