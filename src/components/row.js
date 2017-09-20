import styled from "styled-components";

const width = 1400;

const Row = styled.div`
    max-width: ${props => (props.expanded ? "100%" : width + "px")};
    margin: auto;
    overflow: hidden;
`;

export default Row;
