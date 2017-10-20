import React from "react";
import PropTypes from "prop-types";
import { Route, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Button } from "../index";

const ButtonLink = props => (
    <Link {...props.linkProps}>
        <Button {...props}>{props.children}</Button>
    </Link>
);

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
