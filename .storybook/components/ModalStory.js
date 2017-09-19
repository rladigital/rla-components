import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button, Column, Modal, Row } from "../../src/index";

storiesOf("Modal", module).addWithInfo("Default", () => (
    <div>
        <Button size="large" onClick={() => this._toggleModal()} hollow>
            Click here for a modal
        </Button>
        <Modal visible={true} onClose={() => this._toggleModal()}>
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
));
