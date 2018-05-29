import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors, spacing } from "../../theme";

const Container = styled.div`
    color: ${props => props.color};
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    background: ${props => props.background};
    margin: ${props => props.margin};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);
    position: relative;
`;

class MainNavMenu extends React.Component {
    render() {
        return <Container {...this.props}>{this.props.children}</Container>;
    }
}

MainNavMenu.displayName = "MainNavMenu";

MainNavMenu.propTypes = {
    /** Font color - A valid css color value */
    color: PropTypes.string,
    /** Font size - A valid css size value */
    size: PropTypes.string,
    /** Font wieght - A valid css weight value */
    wieght: PropTypes.string,
    /** The css background property for the navigation container */
    background: PropTypes.string,
    /** The css margin property for the navigation container */
    margin: PropTypes.string
};

MainNavMenu.defaultProps = {
    color: colors.black,
    size: "1em",
    weight: "bold",
    background: colors.white,
    margin: `0 0 ${spacing.margin}em 0`
};

export default MainNavMenu;
