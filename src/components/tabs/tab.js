import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Tab = styled.div`
    display: table-cell;
    padding: ${props => props.theme.tabordion.padding / 2}em
        ${props => props.theme.tabordion.padding}em;
    text-align: ${props => props.theme.tabordion.tabs.textAlign};
    font-weight: ${props => props.theme.tabordion.fontWeight};
    border-right: ${props => props.theme.tabordion.borderThickness}
        ${props => props.theme.tabordion.borderColor} solid;
    cursor: pointer;
    position: relative;
    &:last-child {
        border-right: none;
    }
    ${props =>
        props.current == props.i
            ? css`
                  color: ${props => props.theme.tabordion.active.color};
                  background: ${props =>
                      props.theme.tabordion.active.background};
                  border-bottom-color: ${props =>
                      props.theme.tabordion.active.background};
              `
            : css`
                  color: ${props => props.theme.tabordion.default.color};
                  background: ${props =>
                      props.theme.tabordion.default.background};
              `};
    ${props =>
        props.divider &&
        css`
            &:not(:last-child):after{
                content '${props => props.divider}';
                height: ${props => props.theme.tabordion.dividers.height}em;
                padding: 0 ${props => props.theme.tabordion.dividers.padding}em;
                border: ${props => props.theme.tabordion.dividers.border};
                color: ${props => props.theme.tabordion.dividers.color};
                background: ${props =>
                    props.theme.tabordion.dividers.background};
                font-size: ${props =>
                    props.theme.tabordion.dividers.fontSize}em;
                line-height: ${props =>
                    props.theme.tabordion.dividers.height}em;
                border-radius: ${props =>
                    props.theme.tabordion.dividers.radius}em;
                position: absolute;
                right: 0;
                top: 50%;
                z-index: 2;
                transform: translate(50%, -50%);
            }
    `};
`;

Tab.displayName = "Tab";

Tab.propTypes = {
    /** A unique key for this tab */
    index: PropTypes.number,
    /** The key of the tab that is currently active */
    current: PropTypes.number,
    /** Text to display in the divider. Hides divider if not active */
    divider: PropTypes.string
};

export default Tab;
