import React from "react";
import PropTypes from "prop-types";
import styled, { css, withTheme } from "styled-components";
import { Collapse } from "react-collapse";
import { Icon } from "../index";

const AccordionWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    border-radius: ${props => props.theme.accordion.radius}em;
    margin-bottom: ${props => props.theme.accordion.margin}em;
`;
const Bar = styled.div`
    width: 100%;
    height: ${props => props.theme.accordion.bar.size}em;
    color: ${props => props.theme.accordion.bar.color};
    background: ${props => props.theme.accordion.bar.background};
    display: table;
    border-bottom: 1px solid
        ${props => props.theme.accordion.content.background};
    ${props => props.barClickable && css`cursor: pointer;`};
`;
const BarSection = styled.div`
    display: table-cell;
    vertical-align: middle;
    padding: ${props => props.theme.accordion.padding / 2}em;
`;
const Twisty = BarSection.extend`
    text-align: center;
    width: ${props => props.theme.accordion.bar.size}em;
    color: ${props => props.theme.accordion.twisty.color};
    background: ${props => props.theme.accordion.twisty.background};
    cursor: pointer;
`;
const Section = styled.div`
    width: 100%;
    background: ${props => props.theme.accordion.content.background};
    padding-top: ${props => props.theme.accordion.padding}em;
`;

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: this.props.active
        };
    }

    toggleActive(i) {
        var x = null;

        if (this.state.active == i) {
            x = null;
        } else {
            x = i;
        }

        this.setState({ active: x });
    }

    isActive(i) {
        if (this.state.active == i) {
            return true;
        }
        return false;
    }

    render() {
        const { sections, barClickable } = this.props;

        return (
            <AccordionWrapper>
                {sections.map((section, i) => (
                    <div key={i}>
                        <Bar
                            barClickable={barClickable}
                            onClick={() => barClickable && this.toggleActive(i)}
                        >
                            {typeof section.label == "string" ? (
                                <BarSection>{section.label}</BarSection>
                            ) : (
                                section.label.map(label => (
                                    <BarSection
                                        style={{
                                            width:
                                                100 / section.label.length + "%"
                                        }}
                                        key={i + label}
                                    >
                                        {label}
                                    </BarSection>
                                ))
                            )}

                            <Twisty
                                onClick={() =>
                                    !barClickable && this.toggleActive(i)}
                            >
                                <Icon
                                    name={
                                        this.isActive(i)
                                            ? this.props.theme.accordion.twisty
                                                  .upIcon
                                            : this.props.theme.accordion.twisty
                                                  .downIcon
                                    }
                                />
                            </Twisty>
                        </Bar>
                        <Collapse isOpened={this.isActive(i)}>
                            <Section>{section.content}</Section>
                        </Collapse>
                    </div>
                ))}
            </AccordionWrapper>
        );
    }
}

Accordion.displayName = "Accordion";

Accordion.propTypes = {
    barClickable: PropTypes.bool
};

Accordion.defaultProps = {
    barClickable: true
};

export default withTheme(Accordion);
