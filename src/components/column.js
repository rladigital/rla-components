import React from "react";
import PropTypes from "prop-types";
import styled, { css, withTheme } from "styled-components";

const breakpoints = {};

// Width to percentage
const widthPercentage = function(width) {
    return (Math.min(Math.floor(width), 12) / 12) * 100;
};

// Iterate through the breakpoints and create a media template
// If width prop is defied, then use pseudo js breakpoint instead

const media = breakpoints => {
    return Object.keys(breakpoints).reduce((acc, label) => {
        acc[label] = (...args) => props =>
            props.parentWidth
                ? parseInt(props.parentWidth) > breakpoints[label] &&
                  css`
                      ${css(...args)};
                  `
                : css`
                      @media (min-width: ${breakpoints[label]}px) {
                          ${css(...args)};
                      }
                  `;

        return acc;
    }, {});
};

// The Column - loop through all breakpoints and insert into media query
const StyledColumn = styled.div`
    width: 100%;
    padding: 0
        ${props => (props.collapse ? 0 : props.theme.spacing.padding / 2)}em;

    /*responsive*/
    ${props =>
        Object.keys(props.theme.breakpoints).map(function(key) {
            return (
                props[key] &&
                media(props.theme.breakpoints)[key]`width: ${widthPercentage(
                    props[key]
                )}%;`
            );
        })};

    /* Centered */
    ${props =>
        props.centered
            ? css`
                  margin: auto;
              `
            : css`
                  float: left;
              `};
`;

const Column = ({ children, ...rest }) => {
    return <StyledColumn {...rest}>{children}</StyledColumn>;
};

Column.displayName = "Column";

Column.propTypes = {
    small: PropTypes.number,
    medium: PropTypes.number,
    large: PropTypes.number,
    xlarge: PropTypes.number,
    centered: PropTypes.bool
};

Column.defaultProps = {
    centered: false
};

export default withTheme(Column);
