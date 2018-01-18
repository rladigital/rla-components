import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledRow = styled.div`
    margin: auto;
    max-width: ${props => (props.expanded ? "100%" : props.width + "px")};
    ${props =>
        !props.collapse &&
        css`
            padding: 0 ${props => props.theme.row.padding / 2}em;
        `};
`;

const Clear = styled.div`
    clear: both;
`;

class Row extends React.Component {
    render() {
        const { children, ...rest } = this.props;
        return (
            <StyledRow {...rest}>
                {children}
                <Clear />
            </StyledRow>
        );
    }
}

Row.displayName = "Row";

Row.propTypes = {
    /** Boolean indicating whether the row should be 100% width */
    expanded: PropTypes.bool,
    /** The width of the row */
    width: PropTypes.number,
    /** Boolean indicating whether the row should have padding */
    collapse: PropTypes.bool
};

Row.defaultProps = {
    width: 1400,
    collapse: false
};

export default Row;
