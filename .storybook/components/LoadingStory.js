import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Loading } from "../../src/index";

storiesOf("Loading", module)
    .addWithInfo("Default", () => <Loading />)
    .addWithInfo("Color Variants", () => (
        <div>
            <div style={{ float: "left" }}>
                <Loading color="#000" />
            </div>
            <div style={{ float: "left" }}>
                <Loading color="rgba(255,0,0,0.2)" />
            </div>
            <div style={{ float: "left" }}>
                <Loading color="rgba(0,0,0,0.1)" />
            </div>
        </div>
    ))
    .addWithInfo("Types", () => (
        <div>
            <div style={{ float: "left" }}>
                <Loading type="blank" />
            </div>
            <div style={{ float: "left" }}>
                <Loading type="balls" />
            </div>
            <div style={{ float: "left" }}>
                <Loading type="bars" />
            </div>
            <div style={{ float: "left" }}>
                <Loading type="bubbles" />
            </div>
            <div style={{ float: "left" }}>
                <Loading type="cubes" />
            </div>
            <div style={{ float: "left" }}>
                <Loading type="cylon" />
            </div>
            <div style={{ float: "left" }}>
                <Loading type="spin" />
            </div>
            <div style={{ float: "left" }}>
                <Loading type="spinningBubbles" />
            </div>
            <div style={{ float: "left" }}>
                <Loading type="spokes" />
            </div>
        </div>
    ))
    .addWithInfo("Alignment", () => (
        <div>
            <Loading />
            <Loading align="center" />
            <Loading align="right" />
        </div>
    ));
