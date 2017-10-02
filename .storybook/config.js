import { configure, addDecorator, setAddon } from "@storybook/react";
import infoAddon from "@storybook/addon-info";
import { ThemeProvider } from "styled-components";
import React from "react";
import { Theme } from "../src/index";
import "./index.css";

// Apply the theme settings

// Addons + Decorators
addDecorator(story => <ThemeProvider theme={Theme}>{story()}</ThemeProvider>);
setAddon(infoAddon);

// Load Stories
function loadStories() {
    const req = require.context("./components", true, /\.js$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
