import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Icon } from "../../src/index";

storiesOf("Icons", module)
    .add("Icon Library", () => <div>TODO: show all icons</div>)
    .add("Sizng", () => (
        <div>
            <h1>
                <Icon name="bell" /> Inherit from H1
            </h1>
            <h2>
                <Icon name="bell" /> Inherit from H2
            </h2>
            <h3>
                <Icon name="bell" /> Inherit from H3
            </h3>
            <p>
                <Icon name="bell" size="4" /> Icon size="4"
            </p>
            <p>
                <Icon name="bell" size="3" /> Icon size="3"
            </p>
            <p>
                <Icon name="bell" size="2" /> Icon size="2"
            </p>
            <p>
                <Icon name="bell" /> Inherit from p
            </p>
        </div>
    ))
    .add("Colors", () => (
        <div>
            <h3>Inherited from parent</h3>
            <p>
                <span style={{ color: "PaleVioletRed" }}>
                    <Icon name="bell" /> PaleVioletRed{" "}
                </span>
            </p>
            <h3>From attribute</h3>
            <p>
                <span style={{ color: "SpringGreen" }}>
                    <Icon name="bell" color="DodgerBlue" /> color="DodgerBlue"{" "}
                </span>
            </p>
        </div>
    ));
