import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Tab = styled.div`
    display: ${props => (props.fullWidth ? "inline-block" : "table-cell")};
    padding: ${props =>
        props.fullWidth
            ? `0 ${props.theme.spacing.padding}em`
            : `${props.theme.tabordion.padding}em
    ${props.theme.spacing.padding}em`};
    text-align: ${props => props.theme.tabordion.tabs.textAlign};
    font-weight: normal;
    cursor: pointer;
    position: relative;

    ${props =>
        props.current == props.i
            ? css`
                  color: ${props => props.theme.tabordion.active.color};

                  border-bottom-color: ${props =>
                      props.theme.tabordion.active.background};
                  text-decoration: underline;
                  font-weight: bold;
              `
            : css`
                  color: ${props => props.theme.tabordion.default.color};
              `};
    ${props =>
        props.divider
            ? css`
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
    `
            : css`
                  &:not(:last-child):after {
                      content: " ";
                      right: -1px;
                      top: 50%;
                      height: 25%;
                      position: absolute;
                      border-right: 1px solid;
                      transform: translateY(-50%);
                      opacity: 0.2;
                      z-index: 1;
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
