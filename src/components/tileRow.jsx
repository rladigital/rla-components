import React from "react";
import styled, { withTheme } from "styled-components";
import { Row } from "../index";

class TileRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        window.addEventListener("resize", this._onResize.bind(this));

        this._onResize();
        this.setState({
            breakpoints: this.sortBreakpoints(this.props.theme.breakpoints)
        });
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this._onResize.bind(this));
    }

    _onResize() {
        this.setState({
            rowWidth: Math.round(this.rowElement.clientWidth),
            rowHeight: Math.round(this.rowElement.clientHeight)
        });
    }

    sortBreakpoints(breakpoints) {
        var sortable = [];
        for (var key in breakpoints) {
            sortable.push([key, breakpoints[key]]);
        }

        sortable.sort(function(b, a) {
            return a[1] - b[1];
        });

        return sortable;
    }

    getBreakpoint(breakpoints, baseSizes) {
        var array = [];
        for (var i = 0; i < breakpoints.length; i++) {
            if (
                breakpoints[i][1] < window.innerWidth &&
                breakpoints[i][0] in baseSizes
            ) {
                array.push(breakpoints[i]);
            }
        }

        return array[0][0];
    }

    renderChildren(props) {
        const { rowWidth, rowHeight, breakpoints } = this.state;

        const { theme } = props;

        const baseSize =
            theme.tile.baseSizes[
                this.getBreakpoint(breakpoints, theme.tile.baseSizes)
            ];

        return React.Children.map(props.children, child => {
            return React.cloneElement(child, {
                baseSize: rowWidth / theme.columns * baseSize,
                maxSize: theme.columns / baseSize
            });
        });
    }

    render() {
        return (
            <Row innerRef={rowElement => (this.rowElement = rowElement)}>
                {this.state.breakpoints && this.renderChildren(this.props)}
            </Row>
        );
    }
}

TileRow.displayName = "TileRow";

export default withTheme(TileRow);
