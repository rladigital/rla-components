import styled from "styled-components";

const Panel = styled.div`
    height: 100%;
    padding: ${props => props.theme.padding}em ${props =>
    props.theme.padding}em 0 ${props => props.theme.padding}em;
    background-color ${props => props.theme.colors.lightGray};
    overflow: hidden;
    margin-bottom: ${props => props.theme.margin}em;
`;

Panel.displayName = "Panel";

export default Panel;
