import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, number, object } from "@storybook/addon-knobs";
import { Steps, Step, Panel, Icon } from "../../src/index";

const stories = storiesOf("Steps", module);

stories.addDecorator(withKnobs);

stories.addWithInfo("Default", () => {
    let current = number("current", 1);

    return (
        <Panel textAlign="center">
            <Steps current={current}>
                <Step
                    label="start"
                    onClick={() => alert('You clicked "start"')}
                >
                    <Icon name="gear" />
                </Step>
                <Step
                    label="middle"
                    onClick={() => alert('You clicked "middle"')}
                >
                    <Icon name="bell" />
                </Step>
                <Step label="end" onClick={() => alert('You clicked "end"')}>
                    <Icon name="check" />
                </Step>
            </Steps>
        </Panel>
    );
});
