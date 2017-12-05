import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

class DefinitionList extends React.Component {
    render() {
        const { items, headers } = this.props;

        return (
            <div>
                {items.map((item, itemIndex) => {
                    return (
                        <dl key={itemIndex}>
                            {item.map((property, propertyIndex) => {
                                return [
                                    <dt key={`term_${propertyIndex}`}>
                                        {headers[propertyIndex]}
                                    </dt>,
                                    <dd key={`definition_${propertyIndex}`}>
                                        {property}
                                    </dd>
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
