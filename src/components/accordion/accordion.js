import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Accordion = styled.div`
    width: 100%;
    overflow: hidden;
    margin-bottom: ${props => props.theme.tabordion.margin}em;
`;

export default Accordion;
