import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../index";
import { sizes } from "../theme";

const ButtonLink = Button.withComponent(Link).extend`
    display: inline-block;
    text-decoration: inherit;
    line-height: ${props => sizes[props.size]}em;
`;

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
