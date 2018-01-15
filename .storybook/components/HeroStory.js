import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { Hero } from "../../src/index";

const stories = storiesOf("Hero", module);

stories.addDecorator(withKnobs);

stories.addWithInfo(
    "Default",
    "Hero is an extension of Panel. You can add a background image",
    () => {
        let height = number("height", 500);
        let backgroundImage = text(
            "Background Image",
            "https://images.unsplash.com/photo-1427694012323-fb5e8b0c165b?auto=format&fit=crop&w=1966&q=80"
        );
        let backgroundSize = text("Background Size", "cover");
        return (
            <Hero
                height={height}
                backgroundImage={backgroundImage}
                backgroundSize="cover"
            />
        );
    }
);
