import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import { Steps, Panel } from "../../src/index";

storiesOf("Steps", module).add(
    "Default",
    withInfo("Progress bar for showing steps")(() => (
        <Panel type="light" textAlign="center">
            <Steps
                current={1}
                stages={[
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
                ]}
            />
        </Panel>
    ))
);
