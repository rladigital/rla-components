import React from "react";
import { NavLink } from "react-router-dom";
import styled, { withTheme } from "styled-components";

const MainNavMenuLink = withTheme(styled(NavLink).attrs({
    exact: true,
    activeClassName: "active"
})`
            display: inline-block;
            margin: 0 0.6em;
            padding 0.6em 0;
            text-decoration: none;
            color: ${props => props.theme.navigation.color};
            font-weight: bold;
            &:first-child {
                margin-left: 0;
            }
            &.active{
                box-shadow: inset 0px -5px ${props =>
                    props.theme.navigation.activeColor};
            }
        `);

MainNavMenuLink.displayName = "MainNavMenuLink";

export default MainNavMenuLink;
