import React from "react";
import styled, { withTheme } from "styled-components";

const Container = styled.div`
    color: ${props => props.theme.navigation.color};
    background: ${props => props.theme.navigation.background};
    margin: 0 0 ${props => props.theme.navigation.margin}em 0;
`;
const Menu = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

class MainNavMenu extends React.Component {
    render() {
        return (
            <Container {...this.props}>
                <Menu>{this.props.children}</Menu>
            </Container>
        );
    }
}

MainNavMenu = withTheme(MainNavMenu);

MainNavMenu.displayName = "MainNavMenu";

export default MainNavMenu;
