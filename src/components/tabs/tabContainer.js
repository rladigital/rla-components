import PropTypes from "prop-types";
import styled from "styled-components";

const TabContainer = styled.div`
    ${props =>
        props.fullWidth &&
        `width: 100%;
        display: table;
        table-layout: fixed;
        border-collapse: collapse;
    `};
`;

TabContainer.displayName = "TabContainer";

export default TabContainer;
