import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text } from "@storybook/addon-knobs";

import { Badge } from "../../src/index";

const stories = storiesOf("Badge", module);

stories.addDecorator(withKnobs);

stories.add(
    "Default",
    withInfo("Button usage")(() => {
        let background = text("Background", "#ff0000");

        return <Badge background={background}>Badge</Badge>;
    })
);
