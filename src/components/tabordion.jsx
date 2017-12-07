import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Tab from "./tabs/tab";
import TabContainer from "./tabs/tabContainer";
import TabContent from "./tabs/tabContent";
import Accordion from "./accordion/accordion";
import AccordionHeader from "./accordion/accordionHeader";
import AccordionContent from "./accordion/accordionContent";

class Tabordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: this.props.current,
            width: undefined
        };
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this));
        this.updateDimensions();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }
    updateDimensions() {
        this.setState({ width: window.innerWidth });
    }
    setCurrentItem(x) {
        this.setState({ current: x });
    }
    render() {
        var { type, respondsAt } = this.props;
        var children = React.Children.toArray(this.props.children);
        if (
            type == "accordion" ||
            (type == "responsive" && this.state.width < respondsAt)
        )
            return (
                <Accordion>
                    {children.map((child, i) => {
                        return [
                            <AccordionHeader
                                onClick={() => this.setCurrentItem(i)}
                                divider={this.props.divider}
                                current={this.state.current}
                                key={"header" + i}
                                i={i}
                            >
                                {child.props.title}
                            </AccordionHeader>,
                            <AccordionContent
                                key={"content" + i}
                                isOpened={this.state.current == i}
                            >
                                {children[i]}
                            </AccordionContent>
                        ];
                    })}
                </Accordion>
            );
        else
            return [
                <TabContainer>
                    {children.map((child, i) => {
                        return (
                            <Tab
                                onClick={() => this.setCurrentItem(i)}
                                divider={this.props.divider}
                                current={this.state.current}
                                key={i}
                                i={i}
                            >
                                {child.props.title}
                            </Tab>
                        );
                    })}
                </TabContainer>,
                <TabContent>{children[this.state.current]}</TabContent>
            ];
    }
}

Tabordion.displayName = "Tabordion";

Tabordion.propTypes = {
    active: PropTypes.number,
    barClickable: PropTypes.bool,
    allowMultiple: PropTypes.bool,
    type: PropTypes.oneOf(["tabs", "accordion", "responsive"]),
    respondsAt: PropTypes.number
};

Tabordion.defaultProps = {
    active: null,
    barClickable: true,
    allowMultiple: false,
    respondsAt: 600,
    type: "responsive"
};

export default Tabordion;
