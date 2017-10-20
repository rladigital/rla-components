import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-router";

import { StyledLink } from "../../src/index";

const ChildId = ({ match }) => (
    <div>
        <h3>ID: {match.params.id}</h3>
    </div>
);

storiesOf("Links", module)
    .addDecorator(StoryRouter())
    .add("StyledLink", () => (
        <div>
            <div>
                <StyledLink to="test">Default StyledLink</StyledLink>
            </div>
            <div>
                <StyledLink to="test" color="accent">
                    Colored StyledLink
                </StyledLink>
            </div>
        </div>
    ));
