import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Responsive, WidthProvider } from "react-grid-layout";

require("react-grid-layout/css/styles.css");
require("react-resizable/css/styles.css");

const ResponsiveReactGridLayout = WidthProvider(Responsive);

class Dashboard extends Component {
    render() {
        return (
            <ResponsiveReactGridLayout {...this.props}>
                {this.props.children}
            </ResponsiveReactGridLayout>
        );
    }
}

Dashboard.displayName = "Dashboard";
Dashboard.propTypes = {
    /** Optional, but if you are managing width yourself you may want to set the breakpoint yourself as well.*/
    breakpoint: PropTypes.string,

    /** {name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}*/
    breakpoints: PropTypes.object,

    /** # of cols per breakpoint. This is a breakpoint -> cols map*/
    cols: PropTypes.object,

    /** layouts is an object mapping breakpoints to layouts.
    e.g. {lg: Layout, md: Layout, ...}, there's more to it than this, but we'll let the wrapped react-grid-layout handle the extra checks */
    layouts: PropTypes.object,

    /** The width of this component.*/
    width: PropTypes.number,

    /** The height of each of the rows in the dashboard.*/
    rowHeight: PropTypes.number,

    /** Calls back with breakpoint and new number of cols */
    onBreakpointChange: PropTypes.func,

    /** Callback so you can save the layout.
    Calls back with (currentLayout, allLayouts). allLayouts are keyed by breakpoint.*/
    onLayoutChange: PropTypes.func,

    /** Calls back with (containerWidth, margin, cols, containerPadding)*/
    onWidthChange: PropTypes.func
};

Dashboard.defaultProps = {
    cols: { lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 },
    width: 1200,
    rowHeight: 30
};

export default Dashboard;
