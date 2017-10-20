import React from "react";
import PropTypes from "prop-types";
import { Route, Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledLink = styled(Link)`
    color: ${props =>
        props.color ? props.theme.link.colors[props.color] : "inherit"};
    text-decoration: ${props => props.theme.link.textDecoration};
    font-weight: ${props => props.theme.link.fontWeight};
`;

const ComponentParams = props => (
    <StyledLink {...props}>{props.children}</StyledLink>
);

StyledLink.displayName = "StyledLink";

StyledLink.propTypes = {
    color: PropTypes.string
};

export default ComponentParams;
