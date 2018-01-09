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
            margin: ${props => props.margin};
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

MainNavLink.propTypes = {
    /** Font color - A valid css color value to use when a navigation option is not selected */
    color: PropTypes.string,
    /** Text Tranform - A valid css text-transform value */
    textTransform: PropTypes.string,
    /** The css margin property for the navigation container */
    margin: PropTypes.string,
    /** Active Font color - A valid css color value to use when a navigation option is selected */
    activeColor: PropTypes.string
};

MainNavLink.defaultProps = {
    color: colors.black,
    textTransform: "none",
    margin: `0 0.6em`,
    activeColor: colors.accent
};
export default MainNavLink;
