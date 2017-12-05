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
    children: PropTypes.array, //TODO - Work on ensuring table > [thead > tr > th, tbody > *tr > td] layout
    type: PropTypes.oneOf(["responsive", "list", "table"]),
    respondsAt: PropTypes.number
};

TableList.defaultProps = {
    respondsAt: 600,
    type: "responsive"
};

export default TableList;
