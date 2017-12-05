import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

class Table extends React.Component {
    render() {
        return (
            <table>
                <tr>
                    <th>Blah Heading</th>
                </tr>
                <tbody>
                    <tr>
                        <td>Blah Content</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

Table.displayName = "Table";

Table.propTypes = {};

Table.defaultProps = {};

export default Table;
