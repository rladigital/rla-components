import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { get } from "lodash";

import Table from "./Table";
import DefinitionList from "./DefinitionList";

class TableList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: undefined
        };
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        this.updateDimensions();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
    updateDimensions = () => {
        this.setState({ width: window.innerWidth });
    };
    renderAsList() {
        const tableElements = React.Children.toArray(this.props.children);

        const headers = get(
            tableElements[0],
            "props.children.props.children",
            []
        ).reduce((headerArray, header) => {
            return headerArray.concat(header.props.children);
        }, []);

        const items = get(tableElements[1], "props.children", []).reduce(
            (newItems, item) => {
                return newItems.concat([
                    [
                        ...item.props.children.reduce((newItem, property) => {
                            return newItem.concat(property.props.children);
                        }, [])
                    ]
                ]);
            },
            []
        );

        return <DefinitionList headers={headers} items={items} />;
    }
    render() {
        var { type, respondsAt } = this.props;
        if (
            type === "list" ||
            (type === "responsive" && this.state.width < respondsAt)
        ) {
            return this.renderAsList();
        }
        return <table>{this.props.children}</table>;
    }
}

TableList.displayName = "TableList";

TableList.propTypes = {
    /** Controls the type of element rendered, one of "responsive", "list", "table" */
    type: PropTypes.oneOf(["responsive", "list", "table"]),

    /** The pixel value to swap to a list from a table */
    respondsAt: PropTypes.number,

    /** The TableList requires a single thead and tbody as direct chilren */
    children: function(props, propName, componentName) {
        const tableElements = React.Children.toArray(props["children"]);
        if (!Array.isArray(tableElements) || tableElements.length !== 2) {
            return new Error(
                "The TableList must contain a single thead and single tbody as direct children."
            );
        }
        if (tableElements[0].type !== "thead") {
            return new Error(
                "The TableList must contain a thead as the first element"
            );
        }
        if (tableElements[1].type !== "tbody") {
            return new Error(
                "The TableList must contain a tbody as the first element"
            );
        }
    }
};

TableList.defaultProps = {
    respondsAt: 600,
    type: "responsive"
};

export default TableList;
