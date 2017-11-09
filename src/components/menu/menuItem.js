import PropTypes from "prop-types";
import styled from "styled-components";

const MenuItem = styled.li`
    margin: 0;
    width: 100%;
    cursor: pointer;
    padding: ${props =>
        props.theme.menu.padding / 2 + "em " + props.theme.menu.padding + "em"};
    background: ${props => props.theme.menu.background};
    color: ${props => props.theme.menu.color};
    &:not(:last-child) {
        border-bottom: ${props => props.theme.menu.borderBottom};
    }
    &:hover {
        background: ${props => props.theme.menu.hoverBackground};
    }
`;

export default MenuItem;
