import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Icon } from "../index";
import styled, { withTheme, css } from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: ${props => props.theme.dashboard.panel.wrapper.radius}em;
    background: ${props => props.theme.dashboard.panel.content.background};
    padding-top: ${props => (props.showHeader ? "40px" : "0")};
`;
const Header = styled.div`
    width: 100%;
    cursor: move;
    padding: 0 ${props => props.theme.dashboard.panel.bar.padding}em;
    background: ${props => props.theme.dashboard.panel.bar.background};
    position: absolute;
    top: 0;
    overflow: hidden;
    display: table;
    table-layout: fixed;
`;
const HeaderLeft = styled.div`
    max-width: 100%;
    display: table-cell;
`;
const HeaderRight = HeaderLeft.extend`
    width: ${props => (props.configurable ? 60 : 30)}px;
    white-space: nowrap;
    text-align: right;
`;

const HeaderButton = styled.button`
    margin: 0;
    padding: 0 ${props => props.theme.dashboard.panel.bar.padding / 2}em;
    border: none;
    background: transparent;
    display: inline-block;
    font-size: ${props => props.theme.dashboard.panel.bar.iconSize}em;
    height: 40px;
    color: ${props => props.theme.dashboard.panel.bar.iconColor};
`;
const Title = styled.div`
    color: ${props => props.theme.dashboard.panel.bar.titleColor};
    padding: 0 ${props => props.theme.dashboard.panel.bar.padding / 2}em;
    font-weight: ${props => props.theme.dashboard.panel.bar.fontWeight};
    font-size: ${props => props.theme.dashboard.panel.bar.fontSize}em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 40px;
`;
const Content = styled(Scrollbars)`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    position: relative;
`;

class DashboardPanel extends Component {
    render() {
        const {
            panelKey,
            panelProps,
            panelTitle,
            component,
            panels,
            configurable,
            showHeader
        } = this.props;

        //Generate a panel obejct to simplify passing values
        const panel = {
            key: panelKey,
            props: panelProps,
            title: panelTitle,
            component,
            configurable
        };
        return (
            <Wrapper key={panel.key} showHeader={showHeader}>
                {showHeader && (
                    <Header className="dragHandle">
                        <HeaderLeft>
                            {panelTitle && (
                                <Title title={panelTitle}>{panelTitle}</Title>
                            )}
                        </HeaderLeft>
                        <HeaderRight configurable={panel.configurable}>
                            {panel.configurable && (
                                <HeaderButton
                                    size="small"
                                    onClick={this.props.configurePanel.bind(
                                        this,
                                        panel
                                    )}
                                >
                                    <Icon name="gear" />
                                </HeaderButton>
                            )}
                            <HeaderButton
                                size="small"
                                onClick={this.props.deletePanelConfirmation.bind(
                                    this,
                                    panel
                                )}
                            >
                                <Icon name="close" />
                            </HeaderButton>
                        </HeaderRight>
                    </Header>
                )}
                <Content autohide="true">
                    {React.createElement(panels[panel.component], panel.props)}
                </Content>
            </Wrapper>
        );
    }
}

DashboardPanel.propTypes = {
    /** A unique key for this panel, probably a UUID */
    panelkey: PropTypes.string.isRequired,
    /** The props to be passed on to the component being rendered into the panel (e.g. configuration options) */
    panelProps: PropTypes.object,
    /** A string to be used in the title of the panel */
    panelTitle: PropTypes.string,

    /** A string matching one of the keys in the panels object, this is used to render the correct component in the panel */
    component(props, propName, componentName, location, propFullName) {
        const componentProp = props[propName];
        if (!componentProp || typeof componentProp !== "string") {
            throw new Error(
                "component prop must be an string. Received: " +
                    typeof componentProp
            );
        }
        if (!(componentProp in props.panels)) {
            throw new Error(
                `The component prop must have a matching key in the panels object.  The component: ${componentProp} isn't available`
            );
        }
    },

    /** Used to know if the panel has configuration options or not */
    configurable: PropTypes.bool,
    /** An object containing a linking between component names, and the components */
    panels: PropTypes.object.isRequired,
    /** A callback that's called when the delete panel button is pressed */
    deletePanelConfirmation: PropTypes.func,
    /** A callback that's called when the configure panel button is pressed */
    configurePanel: PropTypes.func,
    /** Used to turn on or off the header bar */
    showHeader: PropTypes.bool
};
DashboardPanel.defaultProps = {
    showHeader: true
};

export default withTheme(DashboardPanel);
