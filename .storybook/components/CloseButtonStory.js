import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text } from "@storybook/addon-knobs";

import { CloseButton } from "../../src/index";

const stories = storiesOf("CloseButton", module);

stories.addDecorator(withKnobs);

stories.add(
    "Default",
    withInfo("Just a simple close button.")(() => {
        return <CloseButton />;
    })
);
