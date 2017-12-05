import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

class DefinitionList extends React.Component {
    render() {
        const { items, headers } = this.props;

        return (
            <div>
                {items.map((item, index) => {
                    return (
                        <dl>
                            {item.map((property, propertyIndex) => {
                                return [
                                    <dt>{headers[propertyIndex]}</dt>,
                                    <dd>{property}</dd>
                                ];
                            })}
                        </dl>
                    );
                })}
            </div>
        );
    }
}

DefinitionList.displayName = "DefinitionList";

DefinitionList.propTypes = {
    item: PropTypes.array,
    headers: PropTypes.array
};

export default DefinitionList;
