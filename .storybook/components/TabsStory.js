import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, number, text } from "@storybook/addon-knobs";
import {
    TabContainer,
    Tab,
    TabContent,
    Panel,
    Row,
    Column
} from "../../src/index";

const stories = storiesOf("Tabs", module);

stories.addDecorator(withKnobs);

stories.addWithInfo("Default", () => {
    let current = number("current", 1);
    let dividerText = text("dividerText", "Or");
    return (
        <Panel>
            <Row>
                <Column>
                    <TabContainer>
                        <Tab index={1} current={current} divider={dividerText}>
                            test
                        </Tab>
                        <Tab index={2} current={current} divider={dividerText}>
                            test
                        </Tab>
                        <Tab index={3} current={current} divider={dividerText}>
                            test
                        </Tab>
                    </TabContainer>
                    <TabContent>
                        <Row>
                            <Column>
                                {current == 1 && <h1>Tab 1</h1>}
                                {current == 2 && <h1>Tab 2</h1>}
                                {current == 3 && <h1>Tab 3</h1>}
                            </Column>
                        </Row>
                    </TabContent>
                </Column>
            </Row>
        </Panel>
    );
});
