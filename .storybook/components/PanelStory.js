import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Panel, Row, Column } from "../../src/index";

storiesOf("Panel", module).addWithInfo("Default", () => (
    <div>
        <Panel>
            <Row>
                <Column>
                    <p>This is a default panel (light)</p>
                </Column>
            </Row>
        </Panel>
        <Panel type="dark">
            <Row>
                <Column>
                    <p>This is a dark panel</p>
                </Column>
            </Row>
        </Panel>
        <Panel type="accent">
            <Row>
                <Column>
                    <p>This is an accent panel</p>
                </Column>
            </Row>
        </Panel>
    </div>
));
