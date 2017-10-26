import PropTypes from "prop-types";
import styled from "styled-components";

const type = props => (props.type ? props.type : props.theme.panel.default);
const panel = props => props.theme.panel.types[type(props)];

const Panel = styled.div`
    height: 100%;
    padding: ${props => panel(props).padding}em;
    padding-bottom: 0;
    background-color ${props => panel(props).background};
    overflow: hidden;
    margin-bottom: ${props => panel(props).margin}em;
    color: ${props => panel(props).color};
`;

Panel.displayName = "Panel";

Panel.propTypes = {
    type: PropTypes.string
};

export default Panel;
