import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MainNavLink = styled(NavLink).attrs({
    exact: true,
    activeClassName: "active"
})`
            display: inline-block;
            margin: 0 ${props => props.theme.spacing.margin}em;
            padding ${props => props.theme.spacing.padding}em 0;
            text-decoration: none;
            color: ${props => props.theme.navigation.navLink.color};
            text-transform: ${props =>
                props.theme.navigation.navLink.textTransform};
            position: relative;
            &:first-child {
                margin-left: 0;
            }
            &.active{
                box-shadow: inset 0px -5px ${props =>
                    props.theme.navigation.navLink.activeColor};
            }
            &:not(:last-child):after{
                content: ' ';
                right: -${props => props.theme.spacing.margin}em;
                top: 50%;
                height: 25%;
                position: absolute;
                border-right: 1px solid;
                transform: translateY(-50%);
                opacity: 0.2;
            }
        `;

MainNavLink.displayName = "MainNavLink";

MainNavLink.propTypes = {};

MainNavLink.defaultProps = {};
export default MainNavLink;
