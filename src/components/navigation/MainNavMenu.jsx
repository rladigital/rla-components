import React from "react";
import styled, { withTheme } from "styled-components";

const MainNavMenu = withTheme(styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`);

MainNavMenu.displayName = "MainNavMenu";

export default MainNavMenu;
