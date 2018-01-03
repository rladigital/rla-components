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
            width: undefined,
            random: this.randomString()
        };
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this));
        this.updateDimensions();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.current !== nextProps.current) {
            this.setCurrentItem(nextProps.current);
        }
    }

    updateDimensions() {
        this.setState({ width: window.innerWidth });
    }
    setCurrentItem(x) {
        this.setState({ current: x });
    }
    randomString() {
        return Math.random()
            .toString(36)
            .substring(7);
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
            return (
                <div>
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
                    </TabContainer>
                    <TabContent>
                        {this.props.unmounts
                            ? children[this.state.current]
                            : children.map((child, i) => {
                                  return (
                                      <div
                                          style={{
                                              display:
                                                  this.state.current == i
                                                      ? "block"
                                                      : "none"
                                          }}
                                      >
                                          {child}
                                      </div>
                                  );
                              })}
                    </TabContent>
                </div>
            );
    }
}

Tabordion.displayName = "Tabordion";

Tabordion.propTypes = {
    active: PropTypes.number,
    barClickable: PropTypes.bool,
    allowMultiple: PropTypes.bool,
    type: PropTypes.oneOf(["tabs", "accordion", "responsive"]),
    respondsAt: PropTypes.number,
    unmounts: PropTypes.bool
};

Tabordion.defaultProps = {
    active: null,
    barClickable: true,
    allowMultiple: false,
    respondsAt: 600,
    type: "responsive",
    unmounts: true
};

export default Tabordion;
