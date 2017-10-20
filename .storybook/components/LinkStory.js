import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import StoryRouter from "storybook-router";

import { StyledLink, ButtonLink } from "../../src/index";

const ChildId = ({ match }) => (
    <div>
        <h3>ID: {match.params.id}</h3>
    </div>
);

storiesOf("Links", module)
    .addDecorator(StoryRouter())
    .add(
        "Styled Link",
        withInfo(
            "The Styled Link should be used instead of the default react router Link component."
        )(() => (
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
        ))
    )
    .add(
        "Button Link",
        withInfo("It's a React Router Link that looks like a Button")(() => (
            <div>
                <div>
                    <ButtonLink linkProps={{ to: "test" }} to="test">
                        Default ButtonLink
                    </ButtonLink>
                </div>
                <div>
                    <ButtonLink linkProps={{ to: "test" }} color="alert">
                        Colored ButtonLink
                    </ButtonLink>
                </div>
            </div>
        ))
    );
