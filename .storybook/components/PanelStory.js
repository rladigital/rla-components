import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, select, number, text } from "@storybook/addon-knobs";

import { Row, Column, Panel } from "../../src/index";
import { colors, sizes } from "../../src/theme";

const stories = storiesOf("Panel", module);

stories.addDecorator(withKnobs);

stories.add(
    "Default",
    withInfo("Panel usage")(() => {
        let type = select("type", Object.keys(colors));
        let margin = number("margin", undefined);
        let padding = number("padding", undefined);
        let heading = text("heading", undefined);

        return (
            <Panel
                type={type}
                margin={margin}
                padding={padding}
                heading={heading}>
                <Row>
                    <Column>
                        <p>Panel text</p>
                    </Column>
                </Row>
            </Panel>
        );
    })
);
