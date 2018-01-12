import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { Row, Column, Footer } from "../../src/index";

const stories = storiesOf("Footer", module);

stories.addWithInfo(
    "Default",
    "This footer will automatically stick to the bottom of the page when the body is smaller than the window size.",
    () => {
        return (
            <Footer>
                <Row>
                    <Column>
                        <p>RLA Components</p>
                    </Column>
                </Row>
            </Footer>
        );
    }
);
