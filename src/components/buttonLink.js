import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../index";
import { sizes } from "../theme";

console.warn(
    "ButtonLinks are depreciated. Please use a Button with element prop instead."
);

const ButtonLink = Button.withComponent(Link).extend`
    display: inline-block;
    text-decoration: inherit;
    line-height: ${props => sizes[props.size]}em;
`;

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
