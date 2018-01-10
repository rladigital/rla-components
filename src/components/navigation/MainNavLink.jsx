import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors, spacing } from "../../theme";

const MainNavLink = styled(NavLink).attrs({
    exact: true,
    activeClassName: "active"
})`
            display: inline-block;
            margin: ${props => props.theme.navigation.navLink.margin}em;
            padding ${props => props.theme.navigation.navLink.padding}em;
            text-decoration: none;
            color: ${props => props.theme.navigation.navLink.color};
            text-transform: ${props =>
                props.theme.navigation.navLink.textTransform};
            &:first-child {
                margin-left: 0;
            }
            &.active{
                box-shadow: inset 0px -5px ${props =>
                    props.theme.navigation.navLink.activeColor};
            }
        `;

MainNavLink.displayName = "MainNavLink";

MainNavLink.propTypes = {};

MainNavLink.defaultProps = {};
export default MainNavLink;
