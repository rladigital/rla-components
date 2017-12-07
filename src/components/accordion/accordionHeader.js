import React from "react";
import styled, { css, withTheme } from "styled-components";
import { Collapse } from "react-collapse";
import Icon from "../icon";

const AccordionItem = styled.div`
    padding: ${props => props.theme.tabordion.padding / 2}em
        ${props => props.theme.tabordion.padding}em;
    text-align: ${props => props.theme.tabordion.accordion.textAlign};
    font-weight: ${props => props.theme.tabordion.fontWeight};
    cursor: pointer;
    position: relative;
    ${props =>
        props.current == props.i
            ? css`
                  color: ${props => props.theme.tabordion.active.color};
                  background: ${props =>
                      props.theme.tabordion.active.background};
              `
            : css`
                  color: ${props => props.theme.tabordion.default.color};
                  background: ${props =>
                      props.theme.tabordion.default.background};
                  border-color: ${props => props.theme.tabordion.borderColor};
                  border-width: ${props.theme.tabordion.borderThickness};
                  border-bottom-style: solid;
              `};
`;

const Twisty = styled.div`
    right: 0;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
`;

class AccordionContent extends React.Component {
    render() {
        const { children, ...rest } = this.props;
        return (
            <AccordionItem {...rest}>
                <Twisty>
                    <Icon
                        name={
                            this.props.current == this.props.i
                                ? this.props.theme.tabordion.twisty.activeIcon
                                : this.props.theme.tabordion.twisty
                                      .nonActiveIcon
                        }
                    />
                </Twisty>
                {children}
            </AccordionItem>
        );
    }
}

export default withTheme(AccordionContent);
