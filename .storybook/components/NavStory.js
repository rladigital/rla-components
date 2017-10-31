import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainNavMenu, MainNavLink } from "../../src/index";

storiesOf("Navigation", module).addWithInfo("Default", () => (
    <Router>
        <Switch>
            <Route path="/">
                <MainNavMenu>
                    <MainNavLink to="/">Home</MainNavLink>
                    <MainNavLink to="/assets">Assets</MainNavLink>
                    <MainNavLink to="/pinpoint">Pinpoint</MainNavLink>
                </MainNavMenu>
            </Route>
        </Switch>
    </Router>
));
