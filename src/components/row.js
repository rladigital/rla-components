import PropTypes from "prop-types";
import styled from "styled-components";

const Row = styled.div`
    max-width: ${props => (props.expanded ? "100%" : props.width + "px")};
    margin: auto;
    overflow: hidden;
`;

Row.displayName = "Row";

Row.propTypes = {
    /** Boolean indicating whether the row should be 100% width */
    expanded: PropTypes.bool,
    /** The width of the row */
    width: PropTypes.number
};

Row.defaultProps = {
    width: 1400
};

export default Row;
