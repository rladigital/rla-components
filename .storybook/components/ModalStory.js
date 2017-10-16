import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button, Column, Modal, Row } from "../../src/index";

storiesOf("Modal", module).addWithInfo("Default", () => {
    let visibility = true;
    return (
        <div>
            <Modal
                visible={visibility}
                onClose={() => {
                    visibility = false;
                }}
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
