import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    color: ${props =>
        props.color ? props.theme.link.colors[props.color] : "inherit"};
    text-decoration: ${props => props.theme.link.textDecoration};
    font-weight: ${props => props.theme.link.fontWeight};
`;

StyledLink.displayName = "StyledLink";

StyledLink.propTypes = {
    color: PropTypes.string
};

export default StyledLink;
