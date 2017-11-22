import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";

import {
    Accordion,
    AccordionItem,
    Row,
    Column,
    Panel,
    Icon
} from "../../src/index";

const stories = storiesOf("Accordion", module);

stories.addDecorator(withKnobs);

stories.addWithInfo("Default", () => {
    let active = number("active", 0);
    let allowMultiple = boolean("allowMultiple", false);
    let barClickable = boolean("barClickable", true);
    return (
        <Row>
            <Column large={6} centered>
                <Panel>
                    <Row>
                        <Column>
                            <Accordion
                                active={active}
                                allowMultiple={allowMultiple}
                                barClickable={barClickable}
                            >
                                <AccordionItem label="Section 1 Header">
                                    <Row>
                                        <Column>
                                            <p>Your content here</p>
                                        </Column>
                                    </Row>
                                </AccordionItem>
                                <AccordionItem
                                    label={[
                                        "Section 2 Header",
                                        "another label"
                                    ]}
                                >
                                    <Row>
                                        <Column>
                                            <p>Your content here</p>
                                        </Column>
                                    </Row>
                                </AccordionItem>
                                <AccordionItem label="Section 3 Header">
                                    <Row>
                                        <Column>
                                            <p>Your content here</p>
                                        </Column>
                                    </Row>
                                </AccordionItem>
                            </Accordion>
                        </Column>
                    </Row>
                </Panel>
            </Column>
        </Row>
    );
});
