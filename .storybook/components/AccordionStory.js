import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import { Accordion, Row, Column, Panel } from "../../src/index";

storiesOf("Accordion", module).add(
    "Default",
    withInfo("Default accordion")(() => (
        <Row>
            <Column large={6} centered>
                <Panel>
                    <Row>
                        <Column>
                            <Accordion
                                active={0}
                                sections={[
                                    {
                                        label: "lorem ipsum",
                                        content: (
                                            <Row>
                                                <Column>
                                                    <p>Tab 1</p>
                                                </Column>
                                            </Row>
                                        )
                                    },
                                    {
                                        label: "dolor sit",
                                        content: (
                                            <Row>
                                                <Column>
                                                    <p>Tab 2</p>
                                                </Column>
                                            </Row>
                                        )
                                    },
                                    {
                                        label: "amet",
                                        content: (
                                            <Row>
                                                <Column>
                                                    <p>Tab 3</p>
                                                </Column>
                                            </Row>
                                        )
                                    }
                                ]}
                                allowMultiple={true}
                            />
                        </Column>
                    </Row>
                </Panel>
            </Column>
        </Row>
    ))
);
