import React from "react";
import PropTypes from "prop-types";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {
    Panel,
    Row,
    Column,
    Modal,
    Dashboard,
    DashboardPanel
} from "../../src/index";

const SamplePanel = props => {
    return (
        <div>
            <h1>Sample Panel Content</h1>
            <p>The props</p>
            {JSON.stringify(props)}
        </div>
    );
};

const items = [
    {
        key: "d5e4dcb6-84b7-4151-a7b5-2edd77ed87bd",
        props: {
            customTitle: "First new panel!!!!!!!",
            timeframe: "-3"
        },
        component: "SamplePanel",
        configurable: true
    },
    {
        key: "5cd7ec53-664c-4739-8c3f-3079d2e1bcd4",
        props: {
            customTitle: "Fifth new panel",
            timeframe: "-3"
        },
        component: "SamplePanel",
        configurable: true
    },
    {
        key: "46098539-6c5f-4240-a1a7-8ea4f57c22c6",
        props: null,
        component: "SamplePanel",
        configurable: false
    },
    {
        key: "d9fb91be-8109-4a78-9be6-7c4a6b6f37f0",
        props: null,
        component: "SamplePanel",
        configurable: false
    }
];

const layouts = {
    lg: [
        {
            w: 6,
            h: 8,
            x: 6,
            y: 0,
            i: "d5e4dcb6-84b7-4151-a7b5-2edd77ed87bd",
            minW: 3,
            minH: 3,
            moved: false,
            static: false
        },
        {
            w: 3,
            h: 4,
            x: 0,
            y: 4,
            i: "5cd7ec53-664c-4739-8c3f-3079d2e1bcd4",
            minW: 3,
            minH: 3,
            moved: false,
            static: false
        },
        {
            w: 3,
            h: 4,
            x: 0,
            y: 0,
            i: "46098539-6c5f-4240-a1a7-8ea4f57c22c6",
            minW: 1,
            minH: 1,
            moved: false,
            static: false
        },
        {
            w: 3,
            h: 8,
            x: 3,
            y: 0,
            i: "d9fb91be-8109-4a78-9be6-7c4a6b6f37f0",
            minW: 1,
            minH: 1,
            moved: false,
            static: false
        }
    ],
    xs: [
        {
            w: 4,
            h: 3,
            x: 0,
            y: 0,
            i: "d5e4dcb6-84b7-4151-a7b5-2edd77ed87bd",
            minW: 3,
            minH: 3,
            moved: false,
            static: false
        },
        {
            w: 4,
            h: 6,
            x: 0,
            y: 3,
            i: "5cd7ec53-664c-4739-8c3f-3079d2e1bcd4",
            minW: 3,
            minH: 3,
            moved: false,
            static: false
        },
        {
            w: 2,
            h: 3,
            x: 0,
            y: 9,
            i: "46098539-6c5f-4240-a1a7-8ea4f57c22c6",
            minW: 1,
            minH: 1,
            moved: false,
            static: false
        },
        {
            w: 2,
            h: 2,
            x: 2,
            y: 9,
            i: "d9fb91be-8109-4a78-9be6-7c4a6b6f37f0",
            minW: 1,
            minH: 1,
            moved: false,
            static: false
        }
    ]
};

const panels = {
    SamplePanel
};

const updateLayout = (layout, layouts) => {
    console.log(layouts);
    action("updating-layout");
};
storiesOf("Dashboard", module)
    .addWithInfo("Default", () => (
        <Row>
            <Column medium={12}>
                <Dashboard
                    layouts={layouts}
                    onLayoutChange={updateLayout}
                    draggableHandle=".dragHandle"
                >
                    {items.map(panel => (
                        <div key={panel.key}>
                            <DashboardPanel
                                panelkey={panel.key}
                                panelProps={panel.props}
                                component={panel.component}
                                configurable={panel.configurable}
                                panels={panels}
                                configurePanel={() => {
                                    alert(
                                        "Configuring Panel Dialog would show here"
                                    );
                                }}
                                deletePanelConfirmation={() => {
                                    alert(
                                        "Deleting Panel Dialog would show here"
                                    );
                                }}
                            />
                        </div>
                    ))}
                </Dashboard>
            </Column>
        </Row>
    ))
    .addWithInfo("Full panel drag, with no header bar", () => (
        <Row>
            <Column medium={12}>
                <Dashboard layouts={layouts} onLayoutChange={updateLayout}>
                    {items.map(panel => (
                        <div key={panel.key}>
                            <DashboardPanel
                                panelkey={panel.key}
                                panelProps={panel.props}
                                component={panel.component}
                                configurable={panel.configurable}
                                panels={panels}
                                configurePanel={() => {
                                    alert(
                                        "Configuring Panel Dialog would show here"
                                    );
                                }}
                                deletePanelConfirmation={() => {
                                    alert(
                                        "Deleting Panel Dialog would show here"
                                    );
                                }}
                                showHeader={false}
                            />
                        </div>
                    ))}
                </Dashboard>
            </Column>
        </Row>
    ));
