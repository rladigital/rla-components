import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Panel, Row, Column } from "../../src/index";

storiesOf("Grid", module)
    .addWithInfo("Default", () => (
        <Row>
            <Column medium="6">
                <Panel>
                    <p>medium="6"</p>
                </Panel>
            </Column>
            <Column large="3" medium="6">
                <Panel>
                    <p>large="3" medium="6"</p>
                </Panel>
            </Column>
            <Column large="3">
                <Panel>
                    <p>large="3"</p>
                </Panel>
            </Column>
        </Row>
    ))
    .addWithInfo("Centered", () => (
        <Row>
            <Column small="6" centered>
                <Panel>
                    <p>centered</p>
                </Panel>
            </Column>
        </Row>
    ));
