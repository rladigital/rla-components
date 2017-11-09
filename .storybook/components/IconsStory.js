import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Icon, Row, Column, Panel } from "../../src/index";
import icons from "../../src/components/icons.js";

storiesOf("Icons", module)
    .addWithInfo("Icon Library", () => (
        <Row>
            {Object.keys(icons).map(function(key) {
                return (
                    <Column medium={3} small={6} key={key}>
                        <Panel>
                            <p>
                                <Icon name={key} size="2" /> name="{key}"
                            </p>
                        </Panel>
                    </Column>
                );
            })}
        </Row>
    ))
    .addWithInfo("Sizng", () => (
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
    .addWithInfo(
        "Colors",
        "The color of the icon will automatically be inherited from the parent element, unless a color from the palette is specified in the color attribute.",
        () => (
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
                        <Icon name="bell" color="alert" /> color="alert"{" "}
                    </span>
                </p>
            </div>
        )
    );
