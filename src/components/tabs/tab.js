import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Tab = styled.div`
    display: table-cell;
    padding: ${props => props.theme.tabs.padding / 2}em
        ${props => props.theme.tabs.padding}em;
    text-align: ${props => props.theme.tabs.textAlign};
    font-weight: ${props => props.theme.tabs.fontWeight};
    border: ${props => props.theme.tabs.borderThickness}
        ${props => props.theme.tabs.borderColor} solid;
    cursor: pointer;
    position: relative;
    ${props =>
        props.current == props.index
            ? css`
                  color: ${props => props.theme.tabs.active.color};
                  background: ${props => props.theme.tabs.active.background};
                  border-bottom-color: ${props =>
                      props.theme.tabs.active.background};
              `
            : css`
                  color: ${props => props.theme.tabs.default.color};
                  background: ${props => props.theme.tabs.default.background};
              `};
    ${props =>
        props.divider &&
        css`
    &:Not(:last-child):after{
        content '${props => props.divider}';
        height: ${props => props.theme.tabs.dividers.height}em;
        padding: 0 ${props => props.theme.tabs.dividers.padding}em;
        border: ${props => props.theme.tabs.dividers.border};
        color: ${props => props.theme.tabs.dividers.color};
        background: ${props => props.theme.tabs.dividers.background};
        font-size: ${props => props.theme.tabs.dividers.fontSize}em;
        line-height: ${props => props.theme.tabs.dividers.height}em;
        border-radius: ${props => props.theme.tabs.dividers.radius}em;
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
