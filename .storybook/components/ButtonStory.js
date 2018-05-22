import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import {
    withKnobs,
    boolean,
    text,
    select,
    number
} from "@storybook/addon-knobs";

import { Button, SaveButton, SubmitButton } from "../../src/index";
import { colors, sizes } from "../../src/theme";

const stories = storiesOf("Button", module);

stories.addDecorator(withKnobs);

stories
    .add(
        "Default",
        withInfo("Button usage")(() => {
            let expanded = boolean("expanded", false);
            let disabled = boolean("disabled", false);
            let hollow = boolean("hollow", false);
            let color = select("color", Object.keys(colors));
            let textColor = select("textColor", Object.keys(colors));
            let margin = number("margin", undefined);

            return (
                <Button
                    expanded={expanded}
                    disabled={disabled}
                    hollow={hollow}
                    color={color}
                    textColor={textColor}
                    margin={margin}>
                    Button text
                </Button>
            );
        })
    )
    .add(
        "Submit Button",
        withInfo(
            "A button designed to be used for form submissions, where the button needs to be disabled whilst submitting"
        )(() => {
            let submitting = boolean("Submitting", false);
            let label = text("Label", "Submit");
            return <SubmitButton submitting={submitting} label={label} />;
        })
    )
    .add(
        "Save Button",
        withInfo(
            "A more specific submit button designed to be used for form submissions, when saving information, where the button needs to be disabled whilst saving"
        )(() => {
            let saving = boolean("Saving", false);
            let label = text("Label", "Save");
            return <SaveButton saving={saving} label={label} />;
        })
    );
