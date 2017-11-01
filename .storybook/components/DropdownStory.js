import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import { Button, Dropdown, Menu, MenuItem } from "../../src/index";

const menu = (
    <Menu>
        <MenuItem onClick={() => alert("menu item 1")}>Item 1</MenuItem>
        <MenuItem onClick={() => alert("menu item 2")}>Item 2</MenuItem>
        <MenuItem onClick={() => alert("menu item 3")}>Item 3</MenuItem>
    </Menu>
);

storiesOf("Dropdown", module)
    .add(
        "Default",
        withInfo("About Button")(() => (
            <Dropdown menu={menu}>
                <Button size="large" hollow>
                    Hover here for a dropdown
                </Button>
            </Dropdown>
        ))
    )
    .add(
        "Alignment",
        withInfo("About Button")(() => (
            <div>
                <div
                    style={{
                        position: "absolute",
                        right: 0
                    }}
                >
                    <Dropdown menu={menu} alignX="right" alignY="bottom">
                        <Button size="large" hollow>
                            alignX="right" alignY="bottom"
                        </Button>
                    </Dropdown>
                </div>
                <div
                    style={{
                        position: "absolute",
                        right: 0,
                        top: 200
                    }}
                >
                    <Dropdown menu={menu} alignX="right" alignY="top">
                        <Button size="large" hollow>
                            alignX="right" alignY="top"
                        </Button>
                    </Dropdown>
                </div>
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 200
                    }}
                >
                    <Dropdown menu={menu} alignX="left" alignY="top">
                        <Button size="large" hollow>
                            alignX="left" alignY="top"
                        </Button>
                    </Dropdown>
                </div>
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0
                    }}
                >
                    <Dropdown menu={menu} alignX="left" alignY="bottom">
                        <Button size="large" hollow>
                            alignX="left" alignY="bottom" (default)
                        </Button>
                    </Dropdown>
                </div>
            </div>
        ))
    )
    .add(
        "Ways to trigger the dropdown",
        withInfo("About Button")(() => (
            <div>
                <div>
                    <Dropdown menu={menu} activeOn="hover">
                        <Button size="large" hollow>
                            activeOn="hover"
                        </Button>
                    </Dropdown>
                </div>
                <div>
                    <Dropdown menu={menu} activeOn="click">
                        <Button size="large" hollow>
                            activeOn="click"
                        </Button>
                    </Dropdown>
                </div>
                <div>
                    <Dropdown menu={menu} visible={true}>
                        <Button size="large" hollow>
                            visible=&#123;true&#125;
                        </Button>
                    </Dropdown>
                </div>
            </div>
        ))
    );
