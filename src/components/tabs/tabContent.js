import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const TabContent = styled.div`
    color: ${props => props.theme.tabordion.content.color};
    background: ${props => props.theme.tabordion.active.background};
    padding: ${props => props.theme.tabordion.padding}em
        ${props => props.theme.tabordion.padding / 2}em 0;
    margin-bottom: ${props => props.theme.tabordion.margin}em;
    overflow: hidden;
`;

TabContent.displayName = "TabContent";

export default TabContent;
