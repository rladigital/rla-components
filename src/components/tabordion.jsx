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
import Row from "./row";
import Column from "./column";
import Button from "./button";

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

    componentDidUpdate() {
        if (this.props.cb) this.props.cb();
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
    position() {
        return this.state.current;
    }
    length() {
        return React.Children.count(this.props.children);
    }
    prev() {
        this.setCurrentItem(this.state.current - 1);
    }
    next() {
        this.setCurrentItem(this.state.current + 1);
    }
    handleTabClick(x) {
        this.props.onTabClick();
        if (x) {
            x();
        }
    }
    content(children, unmounts, current) {
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
    render() {
        var {
            type,
            respondsAt,
            responsive,
            unmounts,
            isWizard,
            nextButtonText,
            prevButtonText,
            nextButtonDisabled,
            prevButtonDisabled,
            wizardColumnProps,
            wizardRowProps,
            wizardButtonProps
        } = this.props;
        var children = React.Children.toArray(this.props.children);
        var breakpoint = Boolean(responsive && this.state.width < respondsAt);
        var content = this.content(children, unmounts, this.state.current);

        return (
            <div>
                {type == "tabs" &&
                    !breakpoint && (
                        <TabContainer>
                            {children.map((child, i) => {
                                return (
                                    <Tab
                                        onClick={() =>
                                            this.handleTabClick(
                                                this.setCurrentItem(i)
                                            )
                                        }
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
                    )}
                {type == "steps" &&
                    !breakpoint && (
                        <StepsContainer>
                            <Steps current={this.state.current}>
                                {children.map((child, i) => {
                                    return (
                                        <Step
                                            label={child.props.heading}
                                            onClick={() =>
                                                this.handleTabClick(
                                                    this.setCurrentItem(i)
                                                )
                                            }
                                            divider={this.props.divider}
                                            key={"step_" + i}
                                            i={i}
                                        >
                                            {child.props.icon}
                                        </Step>
                                    );
                                })}
                            </Steps>
                        </StepsContainer>
                    )}
                {(type == "accordion" || breakpoint) && (
                    <AccordionGroup
                        slice={[0, this.state.current + 1]}
                        divider={this.props.divider}
                        current={this.state.current}
                        children={children}
                        handleTabClick={this.handleTabClick.bind(this)}
                        cb={this.setCurrentItem.bind(this)}
                    />
                )}
                {content}
                {(type == "accordion" || breakpoint) && (
                    <AccordionGroup
                        slice={[this.state.current + 1, children.length]}
                        divider={this.props.divider}
                        current={this.state.current}
                        children={children}
                        handleTabClick={this.handleTabClick.bind(this)}
                        cb={this.setCurrentItem.bind(this)}
                    />
                )}
            </div>
        );
    }
}

class AccordionGroup extends React.Component {
    render() {
        const { slice, children, cb, handleTabClick, ...rest } = this.props;
        return children.slice(slice[0], slice[1]).map((child, i) => {
            i = i + slice[0];
            return (
                <AccordionHeader
                    onClick={() => handleTabClick(cb(i))}
                    key={"header" + i}
                    i={i}
                    {...rest}
                >
                    {child.props.heading}
                </AccordionHeader>
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
    responsive: PropTypes.bool,
    /** Callback function for when tab is clicked */
    onTabClick: PropTypes.func
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
