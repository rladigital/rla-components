import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, number } from "@storybook/addon-knobs";

import { Progress } from "../../src/index";

const stories = storiesOf("Progress", module);

stories.addDecorator(withKnobs);

stories.add(
    "Default",
    withInfo("Progress usage")(() => {
        let current = number("current", 50);
        let total = number("total", 100);
        let height = number("height", 30);
        let speed = text("speed", "1s");

        return (
            <Progress
                current={current}
                total={total}
                height={height}
                speed={speed}
                text={`${current}/${total}`}
            />
        );
    })
);
