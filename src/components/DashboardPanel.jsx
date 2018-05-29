import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Icon } from "../index";
import styled, { withTheme, css } from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";
import Row from "./row";

const Panel = styled.div`
    width: 100%;
    height: 100%;
    border-radius: ${props => props.theme.dashboard.panel.wrapper.radius}px;
    background: ${props => props.theme.dashboard.panel.content.background};
    padding-top: 46px;
    box-shadow: ${props => props.theme.dashboard.panel.wrapper.boxShadow};
`;

const Header = styled.div`
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 40px;
    position: absolute;
    background: #f5f5f5b0;
    display: table;
    table-layout: fixed;
    background: ${props => props.theme.dashboard.panel.bar.background};
    cursor: move;
    padding: 1em ${props => props.theme.spacing.padding}em;
    border-radius: ${props => props.theme.dashboard.panel.wrapper.radius}px;
`;

const Content = styled(Scrollbars)`
    width: 100%;
    height: 100%;
`;

const Left = styled.div`
    display: table-cell;
    vertical-align: middle;
`;

const Right = Left.extend`
    text-align: right;
    white-space: nowrap;
    width: 60px;
    line-height: 0;
`;

const HeaderIcon = styled.a`
    font-size: 1em;
    color: ${props => props.theme.dashboard.panel.bar.iconColor};
    cursor: pointer;
    margin-left: 0.5em;
`;

const Title = styled.div`
    color: ${props => props.theme.dashboard.panel.bar.titleColor};
    font-weight: ${props => props.theme.dashboard.panel.bar.fontWeight};
    font-size: 1em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-transform: uppercase;
`;

class DashboardPanel extends Component {
    render() {
        const {
            style,
            panelKey,
            panelProps,
            panelTitle,
            component,
            configurable,
            closeable,
            panels,
            configurePanel,
            deletePanelConfirmation,
            showHeader,
            configureIcon,
            deleteIcon,
            ...rest
        } = this.props;

        //Generate a panel obejct to simplify passing values
        const panel = {
            key: panelKey,
            props: panelProps,
            title: panelTitle,
            component,
            configurable,
            closeable
        };

        const NewPanelProps = Object.assign(style, panelProps);

        return (
            <Panel style={style} {...rest}>
                <Content>
                    {React.createElement(panels[component], NewPanelProps)}
                </Content>
                {showHeader && (
                    <Header className="dragHandle">
                        <Left>{panelTitle && <Title>{panelTitle}</Title>}</Left>

                        <Right>
                            {configurable && [
                                <HeaderIcon
                                    onClick={configurePanel.bind(this, panel)}>
                                    {configureIcon}
                                </HeaderIcon>,
                                " "
                            ]}
                            {closeable && (
                                <HeaderIcon
                                    onClick={deletePanelConfirmation.bind(
                                        this,
                                        panel
                                    )}>
                                    {deleteIcon}
                                </HeaderIcon>
                            )}
                        </Right>
                    </Header>
                )}
                {this.props.children}
            </Panel>
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
    /** Used to know if the panel can be closed */
    configurable: PropTypes.bool,
    /** An object containing a linking between component names, and the components */
    panels: PropTypes.object.isRequired,
    /** A callback that's called when the delete panel button is pressed */
    deletePanelConfirmation: PropTypes.func,
    /** A callback that's called when the configure panel button is pressed */
    configurePanel: PropTypes.func,
    /** Used to turn on or off the header bar */
    showHeader: PropTypes.bool,
    configureIcon: PropTypes.element,
    deleteIcon: PropTypes.element
};
DashboardPanel.defaultProps = {
    style: {},
    panelProps: {},
    showHeader: true,
    configureIcon: <Icon name="gear" />,
    deleteIcon: <Icon name="close" />,
    closeable: true
};

export default withTheme(DashboardPanel);
