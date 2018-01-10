import PropTypes from "prop-types";
import styled from "styled-components";

const panel = props => props.theme.panel.types[props.type];

const Panel = styled.div`
    height: 100%;
    overflow: hidden;
    padding-bottom: 0;
    padding-top: ${props => panel(props).padding}em;
    padding-left: ${props => panel(props).padding / 2}em;
    padding-right: ${props => panel(props).padding / 2}em;
    background-color ${props => panel(props).background};
    margin-bottom: ${props => panel(props).margin}em;
    color: ${props => panel(props).color};
    text-align: ${props => props.textAlign}
`;

Panel.displayName = "Panel";

Panel.propTypes = {
    type: PropTypes.string,
    textAlign: PropTypes.string
};

Panel.defaultProps = {
    type: "default",
    textAlign: "left"
};

export default Panel;
