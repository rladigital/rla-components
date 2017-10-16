import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Loading } from "../../src/index";

storiesOf("Loading", module)
    .addWithInfo("Default", () => <Loading />)
    .addWithInfo("Color Variants", () => (
        <div>
            <div style={{ width: "200px", height: "200px", float: "left" }}>
                <Loading color="#000" />
            </div>
            <div style={{ width: "200px", height: "200px", float: "left" }}>
                <Loading color="rgba(255,0,0,0.2)" />
            </div>
            <div style={{ width: "200px", height: "200px", float: "left" }}>
                <Loading color="rgba(0,0,0,0.1)" />
            </div>
        </div>
    ))
    .addWithInfo("Types", () => (
        <div>
            <div style={{ width: "200px", height: "200px", float: "left" }}>
                <Loading color="rgba(0,0,0,0.3)" type="blank" />
            </div>
            <div style={{ width: "200px", height: "200px", float: "left" }}>
                <Loading color="rgba(0,0,0,0.3)" type="balls" />
            </div>
            <div style={{ width: "200px", height: "200px", float: "left" }}>
                <Loading color="rgba(0,0,0,0.3)" type="bars" />
            </div>
            <div style={{ width: "200px", height: "200px", float: "left" }}>
                <Loading color="rgba(0,0,0,0.3)" type="bubbles" />
            </div>
            <div style={{ width: "200px", height: "200px", float: "left" }}>
                <Loading color="rgba(0,0,0,0.3)" type="cubes" />
            </div>
            <div style={{ width: "200px", height: "200px", float: "left" }}>
                <Loading color="rgba(0,0,0,0.3)" type="cylon" />
            </div>
            <div style={{ width: "200px", height: "200px", float: "left" }}>
                <Loading color="rgba(0,0,0,0.3)" type="spin" />
            </div>
            <div style={{ width: "200px", height: "200px", float: "left" }}>
                <Loading color="rgba(0,0,0,0.3)" type="spinningBubbles" />
            </div>
            <div style={{ width: "200px", height: "200px", float: "left" }}>
                <Loading color="rgba(0,0,0,0.3)" type="spokes" />
            </div>
        </div>
    ));
