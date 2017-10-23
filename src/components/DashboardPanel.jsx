import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Icon } from "../index";
import styled from "styled-components";

const PanelWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`;
const PanelHeaderBar = styled.div`
    position: absolute;
    width: 100%;
    height: 30px;
    background: rgba(12, 12, 12, 0.5);
    cursor: move;
`;
const PanelContent = styled.div`
    background: rgba(12, 123, 12, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: scroll;
`;

class DashboardPanel extends Component {
    render() {
        const {
            panelKey,
            panelProps,
            component,
            panels,
            configurable,
            showHeader
        } = this.props;

        //Generate a panel obejct to simplify passing values
        const panel = {
            key: panelKey,
            props: panelProps,
            component,
            configurable
        };
        return (
            <PanelWrapper key={panel.key}>
                <PanelContent>
                    &nbsp;
                    {React.createElement(panels[panel.component], panel.props)}
                </PanelContent>
                {showHeader && (
                    <PanelHeaderBar className="dragHandle">
                        {panel.configurable && (
                            <Button
                                size="small"
                                onClick={this.props.configurePanel.bind(
                                    this,
                                    panel
                                )}
                            >
                                <Icon name="gear" />
                            </Button>
                        )}
                        <Button
                            size="small"
                            onClick={this.props.deletePanelConfirmation.bind(
                                this,
                                panel
                            )}
                        >
                            <Icon name="close" />
                        </Button>
                    </PanelHeaderBar>
                )}
            </PanelWrapper>
        );
    }
}

DashboardPanel.propTypes = {
    /** A unique key for this panel, probably a UUID */
    panelkey: PropTypes.string.isRequired,
    /** The props to be passed on to the component being rendered into the panel (e.g. configuration options) */
    panelProps: PropTypes.object,
    // /** A string matching one of the keys in the panels object, this is used to render the correct component in the panel */
    // component: PropTypes.string,

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

export default DashboardPanel;
