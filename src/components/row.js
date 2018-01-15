import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Row = styled.div`
    margin: auto;
    overflow: hidden;
    max-width: ${props => (props.expanded ? "100%" : props.width + "px")};
    ${props =>
        !props.collapse &&
        css`
            padding: 0 ${props => props.theme.row.padding / 2}em;
        `};
`;

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
