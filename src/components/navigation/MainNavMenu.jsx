import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors, spacing } from "../../theme";

const Container = styled.div`
    color: ${props => props.color};
    background: ${props => props.background};
    margin: 0 0 ${props => props.margin}em 0;
`;

class MainNavMenu extends React.Component {
    render() {
        return <Container {...this.props}>{this.props.children}</Container>;
    }
}

MainNavMenu.displayName = "MainNavMenu";

MainNavMenu.propTypes = {
    /** Font color - A valid css color value to use when a navigation option is not selected */
    color: PropTypes.string,
    /** Text Tranform - A valid css text-transform value */
    textTransform: PropTypes.string,
    /** The css background property for the navigation container */
    background: PropTypes.string,
    /** The css margin property for the navigation container */
    margin: PropTypes.string,
    /** Active Font color - A valid css color value to use when a navigation option is selected */
    activeColor: PropTypes.string
};

MainNavMenu.defaultProps = {
    color: colors.black,
    textTransform: "none",
    background: colors.white,
    margin: `0 0 ${spacing.margin}em 0`,
    activeColor: colors.accent
};

export default MainNavMenu;
