import React from "react";
import PropTypes, { oneOfType } from "prop-types";
import styled, { css, withTheme } from "styled-components";
import { Collapse } from "react-collapse";
import { Icon } from "../../index";

const Bar = styled.div`
    width: 100%;
    height: ${props => props.theme.accordion.bar.size}em;
    color: ${props => props.theme.accordion.bar.color};
    background: ${props =>
        props.isHeader
            ? props.theme.accordion.header.background
            : props.theme.accordion.bar.background};
    font-weight: ${props => (props.isHeader ? "bold" : "normal")};
    display: table;
    border-bottom: 1px solid
        ${props => props.theme.accordion.content.background};
    ${props =>
        props.barClickable && props.isClickable && css`cursor: pointer;`};
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
    ${props => !props.isClickable && css`visibility: hidden;`};
`;
const Section = styled.div`
    width: 100%;
    background: ${props => props.theme.accordion.content.background};
    padding-top: ${props => props.theme.accordion.padding}em;
    color: ${props => props.theme.accordion.content.color};
`;

class AccordionItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }
    toggleActive() {
        this.setState({ active: !this.state.active });
        this.props.onClick(this.props.i);
    }
    isActive() {
        if (this.props.allowMultiple) {
            if (this.state.active) return true;
        } else {
            if (this.props.current == this.props.i) return true;
        }
        return false;
    }

    render() {
        const { label, barClickable, isClickable, isHeader } = this.props;

        return (
            <div>
                <Bar
                    isHeader={isHeader}
                    isClickable={isClickable}
                    barClickable={barClickable}
                    onClick={() =>
                        barClickable && isClickable && this.toggleActive()}
                >
                    {typeof label == "string" ? (
                        <BarSection>{label}</BarSection>
                    ) : (
                        label.map((x, key) => (
                            <BarSection
                                style={{
                                    width: 100 / label.length + "%"
                                }}
                                key={key}
                            >
                                {x}
                            </BarSection>
                        ))
                    )}

                    <Twisty
                        isClickable={isClickable}
                        onClick={() => !barClickable && this.toggleActive()}
                    >
                        <Icon
                            name={
                                this.isActive()
                                    ? this.props.theme.accordion.twisty.upIcon
                                    : this.props.theme.accordion.twisty.downIcon
                            }
                        />
                    </Twisty>
                </Bar>
                {isClickable && (
                    <Collapse isOpened={this.isActive()}>
                        <Section>{this.props.children}</Section>
                    </Collapse>
                )}
            </div>
        );
    }
}

AccordionItem.displayName = "AccordionItem";

AccordionItem.propTypes = {
    i: PropTypes.number,
    current: PropTypes.number,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    barClickable: PropTypes.bool,
    allowMultiple: PropTypes.bool,
    isHeader: PropTypes.bool,
    isClickable: PropTypes.bool,
    onClick: PropTypes.function
};

AccordionItem.defaultProps = {
    isHeader: false,
    isClickable: true,
    barClickable: true,
    allowMultiple: false
};

export default withTheme(AccordionItem);
