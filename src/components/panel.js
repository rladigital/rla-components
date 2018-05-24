import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { shade } from "../functions";
import { colors, spacing, panel } from "../theme";
import { foregroundColor } from "../functions";

let background = props =>
    colors[props.type] || colors[props.theme.panel.default];

export const StyledPanel = styled.div`
    color: ${props =>
        foregroundColor(
            background(props),
            0.5,
            props.theme.lightColor,
            props.theme.darkColor
        )};
    background-color: ${props => background(props)};
    margin-bottom: ${props =>
        props.margin != undefined ? props.margin : spacing.margin}em;
    padding-top: ${props =>
        props.padding != undefined ? props.padding : spacing.padding}em;
    box-shadow: ${props => props.theme.panel.boxShadow};
    border-radius ${props => props.theme.panel.radius}px;

    ${props => props.heading && `padding-top: 0`};
`;

const Heading = styled.div`
    padding: 12px ${props => props.theme.spacing.padding}em;
    color: ${props => props.theme.panel.headingColor};
    background: ${props => props.theme.panel.headingBackground};
    border-radius: ${props => props.theme.panel.radius}px
        ${props => props.theme.panel.radius}px 0 0;
    margin-bottom: ${props =>
        props.padding != undefined ? props.padding : spacing.padding}em;
    font-weight: bold;
    text-transform: uppercase;
`;

const Panel = ({ children, heading, padding, ...rest }) => (
    <StyledPanel heading={heading} padding={padding} {...rest}>
        {heading && <Heading padding={padding}>{heading}</Heading>}
        {children}
    </StyledPanel>
);

Panel.displayName = "Panel";

Panel.propTypes = {
    type: PropTypes.string,
    marginBottom: PropTypes.number,
    padding: PropTypes.number,
    margin: PropTypes.number,
    padding: PropTypes.number
};

Panel.defaultProps = {};

export default Panel;
