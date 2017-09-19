import styled, { css } from "styled-components";
import { clamp } from "./_functions";

const sizes = {
    small: 0,
    medium: 350,
    large: 700,
    xlarge: 1050
};

// Width to percentage
const widthPercentage = function(width) {
    return clamp(Math.floor(width), 12) / 12 * 100;
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${sizes[label] / 12}em) {
            ${css(...args)};
        }
    `;

    return acc;
}, {});

// The Column - loop through all breakpoints and insert into media query
const Column = styled.div`
    width: 100%;
    padding: 0 ${props => (props.collapse ? 0 : props.theme.padding / 2)}em;

    /*responsive*/
    ${props =>
        Object.keys(sizes).map(function(key) {
            return (
                props[key] &&
                media[key]`width: ${widthPercentage(props[key])}%;`
            );
        })};

    /* Centered */
    ${props => (props.centered ? css`margin: auto;` : css`float: left;`)};
`;

export default Column;
