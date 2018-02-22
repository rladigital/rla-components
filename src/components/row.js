import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Equalizer from "react-equalizer";

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
        const {
            children,
            equaliseChildHeight,
            equaliseByRow,
            ...rest
        } = this.props;
        //NOTE - The ternary operator is being used below as the 'enabled' prop on the Equalizer didn't seem
        //to revert after being set back to false from true...
        return (
            <StyledRow {...rest}>
                {this.props.equaliseChildHeight ? (
                    <Equalizer byRow={equaliseByRow}>
                        {children}
                        <Clear />
                    </Equalizer>
                ) : (
                    <div>
                        {children}
                        <Clear />
                    </div>
                )}
            </StyledRow>
        );
    }
}

Row.displayName = "Row";

Row.propTypes = {
    /** The width of the row */
    width: PropTypes.number,
    /** Boolean indicating whether the row should be 100% width */
    expanded: PropTypes.bool,
    /** Boolean indicating whether the row should have padding */
    collapse: PropTypes.bool,
    /** Boolean indicating whether the row should equalise the heights of child elements */
    equaliseChildHeight: PropTypes.bool,
    /** Boolean indicating whether child elements stacking should be considered when equalising (https://github.com/patrickgalbraith/react-equalizer#options) */
    equaliseByRow: PropTypes.bool
};

Row.defaultProps = {
    width: 1400,
    expanded: false,
    collapse: false,
    equaliseChildHeight: false,
    equaliseByRow: true
};

export default Row;
