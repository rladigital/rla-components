import React from "react";
import styled from "styled-components";
import { Collapse } from "react-collapse";

const Content = styled.div`
    color: ${props => props.theme.tabordion.content.color};
    background: ${props => props.theme.tabordion.active.background};
    padding: ${props => props.theme.tabordion.padding}em
        ${props => props.theme.tabordion.padding / 2}em 0;
    overflow: hidden;
`;

class AccordionContent extends React.Component {
    render() {
        const { children, ...rest } = this.props;
        return (
            <Collapse {...rest}>
                <Content>{children}</Content>
            </Collapse>
        );
    }
}

export default AccordionContent;
