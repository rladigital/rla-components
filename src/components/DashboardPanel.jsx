import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Icon } from "../index";
import styled, { withTheme, css } from "styled-components";

const PanelWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: ${props => props.theme.dashboard.panel.wrapper.radius}em;
`;
const PanelHeader = styled.div`
    width: 100%;
    cursor: move;
    padding: 0 ${props => props.theme.dashboard.panel.bar.padding}em;
    background: ${props => props.theme.dashboard.panel.bar.background};
    overflow: hidden;
`;
const PanelHeaderRight = styled.div`float: right;`;
const PanelHeaderButton = styled.button`
    margin: 0;
    padding: 0 ${props => props.theme.dashboard.panel.bar.padding / 2}em;
    border: none;
    background: transparent;
    display: inline-block;
    font-size: ${props => props.theme.dashboard.panel.bar.iconSize}em;
    height: ${props => props.theme.dashboard.panel.bar.height}em;
    color: ${props => props.theme.dashboard.panel.bar.color};
`;
const PanelContent = styled.div`
    width: 100%;
    height: ${props =>
        props.configurable
            ? "calc(100% - ${props => props.theme.dashboard.panel.bar.height}em)"
            : "100%"};

    background: ${props => props.theme.dashboard.panel.content.background};
    overflow-y: scroll;
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
            <PanelWrapper key={panel.key}>
                {showHeader && (
                    <PanelHeader className="dragHandle">
                        <PanelHeaderRight>
                            {panel.configurable && (
                                <PanelHeaderButton
                                    size="small"
                                    onClick={this.props.configurePanel.bind(
                                        this,
                                        panel
                                    )}
                                >
                                    <Icon name="gear" />
                                </PanelHeaderButton>
                            )}
                            <PanelHeaderButton
                                size="small"
                                onClick={this.props.deletePanelConfirmation.bind(
                                    this,
                                    panel
                                )}
                            >
                                <Icon name="close" />
                            </PanelHeaderButton>
                        </PanelHeaderRight>
                    </PanelHeader>
                )}
                <PanelContent>
                    &nbsp;
                    {React.createElement(panels[panel.component], panel.props)}
                </PanelContent>
            </PanelWrapper>
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
                `The component prop must have a matching key in the panels object.  The compont: ${componentProp} isn't available`
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
