import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
    MainNavContainer,
    MainNavMenu,
    MainNavMenuLink
} from "../../src/index";

const NavExample = () => (
    <MainNavContainer>
        <MainNavMenu>
            <MainNavMenuLink to="/">Home</MainNavMenuLink>
            <MainNavMenuLink to="/assets">Assets</MainNavMenuLink>
            <MainNavMenuLink to="/pinpoint">Pinpoint</MainNavMenuLink>
        </MainNavMenu>
    </MainNavContainer>
);
storiesOf("Navigation", module).addWithInfo("Default", () => (
    <Router>
        <Switch>
            <Route path="/" component={NavExample} />
        </Switch>
    </Router>
));
