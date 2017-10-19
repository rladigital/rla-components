import styled from "styled-components";

const Panel = styled.div`
    height: 100%;
    padding: ${props => props.theme.panel.padding}em ${props =>
    props.theme.panel.padding}em 0 ${props => props.theme.panel.padding}em;
    background-color ${props => props.theme.panel.background};
    overflow: hidden;
    margin-bottom: ${props => props.theme.panel.margin}em;
    color: ${props => props.theme.panel.color};
`;

Panel.displayName = "Panel";

export default Panel;
