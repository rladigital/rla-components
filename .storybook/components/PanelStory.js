import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Panel } from "../../src/index";

storiesOf("Panel", module).add("Default", () => (
    <Panel>
        <p>This is a panel. You can use it to emphasise or divide content.</p>
    </Panel>
));
