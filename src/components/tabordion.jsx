import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Tab from "./tabs/tab";
import TabContainer from "./tabs/tabContainer";
import TabContent from "./tabs/tabContent";
import Accordion from "./accordion/accordion";
import AccordionHeader from "./accordion/accordionHeader";
import AccordionContent from "./accordion/accordionContent";
import Steps from "./steps/steps";
import Step from "./steps/step";

const StepsContainer = styled.div`
    text-align: center;
`;

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
        var { type, respondsAt, responsive } = this.props;
        var children = React.Children.toArray(this.props.children);
        var breakpoint = Boolean(responsive && this.state.width < respondsAt);

        if (type == "tabs" && !breakpoint)
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
                                    {child.props.heading}
                                </Tab>
                            );
                        })}
                    </TabContainer>
                    <TabContent>
                        <Content
                            unmounts={this.props.unmounts}
                            children={children}
                            current={this.state.current}
                        />
                    </TabContent>
                </div>
            );
        else if (type == "steps" && !breakpoint)
            return (
                <div>
                    <StepsContainer>
                        <Steps current={this.state.current}>
                            {children.map((child, i) => {
                                return (
                                    <Step
                                        label={child.props.heading}
                                        onClick={() => this.setCurrentItem(i)}
                                        divider={this.props.divider}
                                        key={i}
                                        i={i}
                                    >
                                        {child.props.icon}
                                    </Step>
                                );
                            })}
                        </Steps>
                    </StepsContainer>
                    <Content
                        unmounts={this.props.unmounts}
                        children={children}
                        current={this.state.current}
                    />
                </div>
            );
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
                            {child.props.heading}
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
    }
}

class Content extends React.Component {
    render() {
        let { children, unmounts, current } = this.props;
        return unmounts
            ? children[current]
            : children.map((child, i) => {
                  return (
                      <div
                          key={i}
                          style={{
                              display: current == i ? "block" : "none"
                          }}
                      >
                          {child}
                      </div>
                  );
              });
    }
}

Tabordion.displayName = "Tabordion";

Tabordion.propTypes = {
    active: PropTypes.number,
    barClickable: PropTypes.bool,
    allowMultiple: PropTypes.bool,
    type: PropTypes.oneOf(["tabs", "accordion", "steps"]),
    respondsAt: PropTypes.number,
    unmounts: PropTypes.bool,
    responsive: PropTypes.bool
};

Tabordion.defaultProps = {
    active: null,
    barClickable: true,
    allowMultiple: false,
    respondsAt: 600,
    type: "tabs",
    unmounts: true,
    responsive: true
};

export default Tabordion;
