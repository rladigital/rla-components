import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import { Button } from "../../src/index";

storiesOf("Button", module)
    .add(
        "Default",
        withInfo("About Button")(() => <Button>Default Button</Button>)
    )
    .addWithInfo("Color Variants", () => (
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
    .addWithInfo("Hollow", () => <Button hollow>hollow</Button>)
    .addWithInfo("Disabled", () => <Button disabled>disabled</Button>)
    .addWithInfo("Alignment", () => (
        <div>
            <Button>left (default)</Button>
            <Button right>right</Button>
            <Button centered>centered</Button>
        </div>
    ));
