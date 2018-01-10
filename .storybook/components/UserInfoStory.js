import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select } from "@storybook/addon-knobs";
import {
    UserInfo,
    UserInfoIcon,
    UserInfoText,
    UserInfoTitle,
    Icon,
    Row,
    Column
} from "../../src/index";

const stories = storiesOf("UserInfo", module);

stories.addDecorator(withKnobs);

stories.addWithInfo("Default", "area to display user info", () => {
    let textTransform = select("text-transform", ["none", "uppercase"], "none");
    return (
        <Row>
            <Column medium={6} centered>
                <UserInfo textTransform={textTransform}>
                    <UserInfoIcon
                        notifications="2"
                        onClick={() => alert("you clicked the bell")}
                    >
                        <Icon name="bell" />
                    </UserInfoIcon>
                    <UserInfoIcon
                        notifications="3"
                        onClick={() => alert("you clicked the gear")}
                    >
                        <Icon name="gear" />
                    </UserInfoIcon>
                    <UserInfoTitle>Alan Partridge</UserInfoTitle>
                    <UserInfoText>DJ</UserInfoText>
                    <UserInfoText>Radio Norfolk</UserInfoText>
                </UserInfo>
            </Column>
        </Row>
    );
});
