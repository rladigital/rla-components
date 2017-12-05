import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { get } from "lodash";

import Table from "./Table";
import DefinitionList from "./DefinitionList";

class TableList extends React.Component {
    static Headers = props => {
        console.log(props);
    };
    constructor(props) {
        super(props);
        this.state = {
            width: undefined
        };
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this));
        this.updateDimensions();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }
    updateDimensions() {
        this.setState({ width: window.innerWidth });
    }
    renderAsList() {
        //Get headers
        //Get get items
        //Pass to dl
        const tableElement = React.Children.toArray(this.props.children)[0];

        const headerElements = get(
            tableElement,
            "props.children[0].props.children.props.children",
            []
        );

        const itemRowElements = get(
            tableElement,
            "props.children[1].props.children",
            []
        );
        //console.log(itemRowElements);
        const headers = headerElements.reduce((headerArray, header) => {
            return headerArray.concat(header.props.children);
        }, []);

        const items = itemRowElements.reduce((newItems, item) => {
            //console.log(item);
            return newItems.concat([
                [
                    ...item.props.children.reduce((newItem, property) => {
                        console.log("newItem", newItem);
                        return newItem.concat(property.props.children);
                    }, [])
                ]
            ]);
        }, []);

        //console.log(headers, items);
        return <DefinitionList headers={headers} items={items} />;
    }
    render() {
        var { type, respondsAt } = this.props;
        if (type == "list" || (!type && this.state.width < respondsAt)) {
            return this.renderAsList();
        }
        return this.props.children;
    }
}

TableList.displayName = "TableList";

TableList.propTypes = {
    children: PropTypes.element, //TODO - Work on ensuring table > [thead > tr > th, tbody > *tr > td] layout
    body: PropTypes.array,
    type: PropTypes.oneOf(["list", "table", ""]),
    respondsAt: PropTypes.number
};

TableList.defaultProps = {
    respondsAt: 600
};

export default TableList;
