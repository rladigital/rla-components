import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import { Button } from "../../src/index";

const stories = storiesOf("Button", module);

stories.addDecorator(withKnobs);

stories
    .add(
        "Default",
        withInfo("Button usage")(() => {
            let disabled = boolean("disabled", false);
            let hollow = boolean("hollow", false);
            return (
                <Button disabled={disabled} hollow={hollow}>
                    Button text
                </Button>
            );
        })
    )
    .add(
        "Color Variants",
        withInfo("Color Variant options")(() => (
            <div>
                <Button>default</Button>
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
    )
    .add(
        "Sizes",
        withInfo("Size options")(() => (
            <div>
                <Button size="small">small</Button>
                <Button>default</Button>
                <Button size="large">large</Button>
            </div>
        ))
    )
    .add(
        "Hollow",
        withInfo("Hollow buttons")(() => <Button hollow>hollow</Button>)
    )
    .add(
        "Disabled",
        withInfo("Disabled button")(() => <Button disabled>disabled</Button>)
    )
    .add(
        "Alignment",
        withInfo("Button Alignment")(() => (
            <div>
                <Button>left (default)</Button>
                <Button align="right">right</Button>
                <Button align="center">center</Button>
            </div>
        ))
    );
