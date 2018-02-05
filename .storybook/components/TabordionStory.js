import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import {
    withKnobs,
    number,
    text,
    select,
    boolean,
    func
} from "@storybook/addon-knobs";
import { Tabordion, Panel, Row, Column, Icon, Button } from "../../src/index";

const stories = storiesOf("Tabordion", module);

stories.addDecorator(withKnobs);

stories.addWithInfo(
    "Default",
    "Tabordion is a component that can be tabs, accordion or both! Children of the Tabordion just need a heading prop to automatically render the necessary UI elements. You May Hook into next() and prev() by setting a ref on the Tabordion and then calling the function.",
    () => {
        let current = number("current", 0);
        let dividerText = text("dividerText", "Or");
        let respondsAt = number("respondsAt", 600);
        let type = select("type", ["tabs", "accordion", "steps"], "tabs");
        let unmounts = boolean("unmounts", true);
        let responsive = boolean("responsive", true);

        return (
            <Panel>
                <Row>
                    <Column>
                        <Tabordion
                            current={current}
                            divider={dividerText}
                            type={type}
                            unmounts={unmounts}
                            responsive={responsive}
                            onTabClick={() => alert("you clicked an item")}
                        >
                            <Row heading="Tab 1" icon={<Icon name="gear" />}>
                                <Column>
                                    <h1>Tab 1</h1>
                                    <p>
                                        <input />
                                    </p>
                                </Column>
                            </Row>
                            <Row heading="Tab 2" icon={<Icon name="bell" />}>
                                <Column>
                                    <h1>Tab 2</h1>
                                </Column>
                            </Row>
                            <Row heading="Tab 3" icon={<Icon name="check" />}>
                                <Column>
                                    <h1>Tab 3</h1>
                                </Column>
                            </Row>
                            <Row heading="Tab 4" icon={<Icon name="menu" />}>
                                <Column>
                                    <h1>Tab 4</h1>
                                </Column>
                            </Row>
                        </Tabordion>
                    </Column>
                </Row>
            </Panel>
        );
    }
);
