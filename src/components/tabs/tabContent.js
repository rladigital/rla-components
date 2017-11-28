import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const TabContent = styled.div`
    color: ${props => props.theme.tabs.content.color};
    background: ${props => props.theme.tabs.active.background};
    padding: ${props => props.theme.tabs.padding}em
        ${props => props.theme.tabs.padding / 2}em 0;
    margin-bottom: ${props => props.theme.tabs.margin}em;
    border: ${props => props.theme.tabs.borderThickness}
        ${props => props.theme.tabs.borderColor} solid;
    border-top: 0;
`;

TabContent.displayName = "TabContent";

export default TabContent;
