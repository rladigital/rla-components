import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const panel = props => props.theme.panel.types[props.type];

const Panel = styled.div`
    height: 100%;
    overflow: hidden;
    padding-bottom: 0;
    background-color ${props => panel(props).background};
    margin-bottom: ${props => props.margin || panel(props).margin}em;
    color: ${props => panel(props).color};
    text-align: ${props => props.textAlign};
    
    ${props =>
        !props.collapse &&
        css`
            padding-top: ${props => panel(props).padding}em;
        `};
`;

Panel.displayName = "Panel";

Panel.propTypes = {
    type: PropTypes.string,
    textAlign: PropTypes.string,
    /** Boolean indicating whether the panel should have padding */
    collapse: PropTypes.bool,
    margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Panel.defaultProps = {
    type: "default",
    textAlign: "left",
    collapse: false
};

export default Panel;
