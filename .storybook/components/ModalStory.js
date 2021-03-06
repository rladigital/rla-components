import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { Button, Column, Modal, Row } from "../../src/index";

const stories = storiesOf("Modal", module);

stories.addDecorator(withKnobs);

stories.addWithInfo("Default", () => {
    let visibility = boolean("visibility", false);
    let maxWidth = text("maxWidth", "2000px");
    return (
        <div>
            <Modal
                visible={visibility}
                onClose={() => {
                    visibility = false;
                }}
                maxWidth={maxWidth}
            >
                <Row>
                    <Column>
                        <h1>
                            <span role="img" aria-label="Party Popper">
                                🎉
                            </span>{" "}
                            Here's the modal
                        </h1>
                        <p>For all your exciting stuff...</p>
                    </Column>
                </Row>
            </Modal>
        </div>
    );
});
