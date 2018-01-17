import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../index";

const ButtonLink = Button.withComponent(Link).extend`
    text-align: center;
    display: inline-block;
    text-decoration: inherit;
    line-height: ${props => props.theme.button.sizes[props.size]}em;
    border: none;
`;

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
