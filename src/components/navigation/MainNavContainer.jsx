import React from "react";
import styled, { withTheme } from "styled-components";

const MainNavContainer = withTheme(styled.div`
    color: ${props => props.theme.navigation.color};
    background: ${props => props.theme.navigation.background};
    margin: 0 0 ${props => props.theme.navigation.margin}em 0;
`);

MainNavContainer.displayName = "MainNavContainer";

export default MainNavContainer;
