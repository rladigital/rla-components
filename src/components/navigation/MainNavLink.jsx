import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MainNavLink = styled(NavLink).attrs({
    exact: true,
    activeClassName: "active"
})`
            display: inline-block;
            margin: 0 0.6em;
            padding 0.6em 0;
            text-decoration: none;
            color: ${props => props.color};
            font-weight: bold;
            text-transform: ${props => props.textTransform};
            &:first-child {
                margin-left: 0;
            }
            &.active{
                box-shadow: inset 0px -5px ${props => props.activeColor};
            }
        `;

MainNavLink.displayName = "MainNavLink";

export default MainNavLink;
