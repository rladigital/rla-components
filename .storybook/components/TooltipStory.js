import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button, Tooltip } from "../../src/index";

storiesOf("Tooltip", module).addWithInfo("Default", () => (
    <Tooltip text="Hi, I'm a tooltip 😊">
        <Button size="large" hollow>
            Hover here for a tooltip
        </Button>
    </Tooltip>
));
