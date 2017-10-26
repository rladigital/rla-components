import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Panel } from "../../src/index";

storiesOf("Panel", module).addWithInfo("Default", () => (
    <div>
        <Panel>
            <p>This is a default panel (light)</p>
        </Panel>
        <Panel type="dark">
            <p>This is a dark panel</p>
        </Panel>
        <Panel type="accent">
            <p>This is an accent panel</p>
        </Panel>
    </div>
));
