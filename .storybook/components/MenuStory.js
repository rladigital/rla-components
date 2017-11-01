import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import { Menu, MenuItem } from "../../src/index";

storiesOf("Menu", module).add(
    "Default",
    withInfo("Menu component")(() => (
        <Menu>
            <MenuItem onClick={() => alert("menu item 1")}>Item 1</MenuItem>
            <MenuItem onClick={() => alert("menu item 2")}>Item 2</MenuItem>
            <MenuItem onClick={() => alert("menu item 3")}>Item 3</MenuItem>
        </Menu>
    ))
);
