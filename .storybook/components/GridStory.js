import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Panel, Row, Column } from "../../src/index";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

const stories = storiesOf("Grid", module);
stories.addDecorator(withKnobs);

stories
    .add(
        "Default",
        withInfo(
            "Default usage. If a parent element width is defined, then the column will use this to overwride the default media query. This is useful when building components that need to respond to the parent container's width."
        )(() => {
            let parentWidth = number("parentWidth", 0, {
                range: true,
                min: 0,
                max: 1400,
                step: 1
            });
            let width = number("width", 1400, {
                range: true,
                min: 0,
                max: 1400,
                step: 1
            });
            let expanded = boolean("expanded", false);
            let collapse = boolean("collapse", false);
            let equaliseChildHeight = boolean("equaliseChildHeight", false);
            return (
                <div>
                    <Row
                        width={width}
                        expanded={expanded}
                        collapse={collapse}
                        equaliseChildHeight={equaliseChildHeight}
                    >
                        <Column medium={6} parentWidth={parentWidth}>
                            <Panel style={{ height: "100%" }}>
                                <p>medium="6"</p>
                                <p>With lots of content</p>
                                <p>With lots of content</p>
                                <p>With lots of content</p>
                                <p>With lots of content</p>
                                <p>With lots of content</p>
                                <p>With lots of content</p>
                                <p>With lots of content</p>
                            </Panel>
                        </Column>
                        <Column large={3} medium={6} parentWidth={parentWidth}>
                            <Panel style={{ height: "100%" }}>
                                <p>large="3" medium="6"</p>
                            </Panel>
                        </Column>
                        <Column large={3} parentWidth={parentWidth}>
                            <Panel style={{ height: "100%" }}>
                                <p>large="3"</p>
                            </Panel>
                        </Column>
                    </Row>
                    {parentWidth != 0 && (
                        <Row>
                            <Column>
                                <p>Parent width: {parentWidth}px</p>
                            </Column>
                        </Row>
                    )}
                </div>
            );
        })
    )
    .add(
        "Centered",
        withInfo("Centered Column")(() => {
            return (
                <Row>
                    <Column small="6" centered>
                        <Panel>
                            <p>centered</p>
                        </Panel>
                    </Column>
                </Row>
            );
        })
    );
