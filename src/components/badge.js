import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { colors } from "../theme";

const Badge = styled.span`
    color: ${props => props.theme.badge.color};
    background: ${props => props.background};
    padding: 0 5px;
    border-radius: ${props => props.theme.badge.radius}px;
    font-weight: bold;
    text-transform: uppercase;
`;

Badge.displayName = "Badge";

Badge.propTypes = {
    background: PropTypes.string
};

Badge.defaultProps = {
    background: Object.keys(colors)[0]
};

export default Badge;
