import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
    MainNavContainer,
    MainNavMenu,
    MainNavMenuLink
} from "../../src/index";

storiesOf("Navigation", module).addWithInfo("Default", () => (
    <Router>
        <Switch>
            <Route path="/">
                <MainNavContainer>
                    <MainNavMenu>
                        <MainNavMenuLink to="/">Home</MainNavMenuLink>
                        <MainNavMenuLink to="/assets">Assets</MainNavMenuLink>
                        <MainNavMenuLink to="/pinpoint">
                            Pinpoint
                        </MainNavMenuLink>
                    </MainNavMenu>
                </MainNavContainer>
            </Route>
        </Switch>
    </Router>
));
