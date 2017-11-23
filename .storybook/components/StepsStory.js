import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, number, object } from "@storybook/addon-knobs";
import { Steps, Panel } from "../../src/index";

const stories = storiesOf("Steps", module);

stories.addDecorator(withKnobs);

stories.addWithInfo("Default", () => {
    let current = number("current", 1);
    let stages = object("stages", [
        {
            label: "Step 1",
            icon: "bell",
            onClick: () => console.log("Callback for step 0.")
        },
        {
            label: "Step 2",
            icon: "gear",
            onClick: () => console.log("Callback for step 1.")
        },
        {
            label: "step 3",
            icon: "menu",
            onClick: () => console.log("Callback for step 2.")
        },
        {
            label: "step 4",
            icon: "check",
            onClick: () => console.log("Callback for step 3.")
        }
    ]);
    return (
        <Panel type="light" textAlign="center">
            <Steps current={current} stages={stages} />
        </Panel>
    );
});
