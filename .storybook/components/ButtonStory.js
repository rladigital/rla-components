import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

import { Button, SaveButton, LoadingButton } from "../../src/index";

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
    )
    .add(
        "Loading Button",
        withInfo(
            "A button designed to be used for form submissions, where the button needs to be disabled whilst submitting"
        )(() => {
            let loading = boolean("Loading", false);
            let label = text("Label", "Save");
            return <LoadingButton loading={loading} label={label} />;
        })
    )
    .add(
        "Save Button",
        withInfo(
            "A button designed to be used for form submissions, when saving information, where the button needs to be disabled whilst saving"
        )(() => {
            let saving = boolean("Saving", false);
            let label = text("Label", "Save");
            return <SaveButton saving={saving} label={label} />;
        })
    );
