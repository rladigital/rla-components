import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {
    UserInfo,
    UserInfoIcon,
    UserInfoText,
    UserInfoTitle,
    Icon,
    Row,
    Column
} from "../../src/index";

storiesOf("UserInfo", module).addWithInfo("Default", () => (
    <Row>
        <Column medium={6} centered>
            <UserInfo>
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
));
