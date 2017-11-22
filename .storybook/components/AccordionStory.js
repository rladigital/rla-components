import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, object } from "@storybook/addon-knobs";

import { Accordion, Row, Column, Panel, Icon } from "../../src/index";

const stories = storiesOf("Accordion", module);

stories.addDecorator(withKnobs);

stories.addWithInfo("Default", () => {
    let sections = object("visibility", [
        {
            label: "Section 1 Header",
            content: "Section 1 content"
        },
        {
            label: ["Section 2 Header", "another label"],
            content: "Section 2 content"
        },
        {
            label: "Section 3 Header",
            content: "Section 3 content"
        }
    ]);
    return (
        <Row>
            <Column large={6} centered>
                <Panel>
                    <Row>
                        <Column>
                            <Accordion
                                active={0}
                                sections={sections}
                                allowMultiple={true}
                            />
                        </Column>
                    </Row>
                </Panel>
            </Column>
        </Row>
    );
});
