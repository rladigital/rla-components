import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, number, text, select } from "@storybook/addon-knobs";
import { Tabordion, Panel, Row, Column } from "../../src/index";

const stories = storiesOf("Tabordion", module);

stories.addDecorator(withKnobs);

stories.addWithInfo("Default", () => {
    let current = number("current", 0);
    let dividerText = text("dividerText", "Or");
    let respondsAt = number("respondsAt", 600);
    let type = select(
        "type",
        {
            tabs: "tabs",
            accordion: "accordion",
            "": "responsive"
        },
        "responsive"
    );
    return (
        <Panel>
            <Row>
                <Column>
                    <Tabordion
                        current={current}
                        divider={dividerText}
                        type={type}
                    >
                        <Row title="Tab 1">
                            <Column>
                                <h1>Tab 1</h1>
                            </Column>
                        </Row>
                        <Row title="Tab 2">
                            <Column>
                                <h1>Tab 2</h1>
                            </Column>
                        </Row>
                        <Row title="Tab 3">
                            <Column>
                                <h1>Tab 3</h1>
                            </Column>
                        </Row>
                    </Tabordion>
                </Column>
            </Row>
        </Panel>
    );
});
