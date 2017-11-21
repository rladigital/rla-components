import React from "react";
import styled, { withTheme } from "styled-components";

const Container = styled.div`
    color: ${props => props.theme.navigation.color};
    background: ${props => props.theme.navigation.background};
    margin: 0 0 ${props => props.theme.navigation.margin}em 0;
`;

class MainNavMenu extends React.Component {
    render() {
        return <Container {...this.props}>{this.props.children}</Container>;
    }
}

MainNavMenu = withTheme(MainNavMenu);

MainNavMenu.displayName = "MainNavMenu";

export default MainNavMenu;
