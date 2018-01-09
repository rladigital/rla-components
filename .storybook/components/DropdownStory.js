import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, boolean, select, number } from "@storybook/addon-knobs";

import { Button, Dropdown, Menu, MenuItem } from "../../src/index";

const stories = storiesOf("Dropdown", module);

stories.addDecorator(withKnobs);

stories.addWithInfo("Default", () => {
    let visible = boolean("Visible", true);
    let position = select("Position", ["left", "right"], "right");
    let delay = number("Delay", 1000);
    return (
        <div>
            <Button
                size="large"
                hollow
                innerRef="test"
                id="toggle"
                style={{ position: "absolute", left: 200, top: 50 }}
            >
                Dropdown here
            </Button>
            <Dropdown
                width={100}
                toggleRef={document.getElementById("toggle")}
                visible={visible}
                position={position}
                delay={delay}
            >
                <Menu>
                    <MenuItem onClick={() => alert("menu item 1")}>
                        Item 1
                    </MenuItem>
                    <MenuItem onClick={() => alert("menu item 2")}>
                        Item 2
                    </MenuItem>
                    <MenuItem onClick={() => alert("menu item 3")}>
                        Item 3
                    </MenuItem>
                </Menu>
            </Dropdown>
        </div>
    );
});
