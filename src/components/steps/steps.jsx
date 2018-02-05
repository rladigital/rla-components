import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme, css } from "styled-components";

const Progress = styled.div`
    ${props => css`
        text-align: center;
        display: inline-block;
        padding: ${props.theme.steps.border}px;
        margin-bottom: ${props.margin || props.theme.steps.margin}em;
    `};
`;

class Steps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: this.props.current
        };
    }

    componentDidUpdate() {
        if (this.state.current != this.props.current) {
            var i = this.state.current;
            var target = this.props.current;
            var timer = setInterval(() => {
                if (target > i) {
                    i++;
                } else if (target < i) {
                    i--;
                } else {
                    clearInterval(timer);
                }
                this.setState({ current: i });
            }, 80);
        }
    }
    render() {
        const { stages, children, barWidth, ...rest } = this.props;
        let childrenWithProps = React.Children.map(
            this.props.children,
            (child, i) =>
                React.cloneElement(child, {
                    i: i,
                    current: this.state.current,
                    hasBar: !Boolean(
                        i == React.Children.count(this.props.children) - 1
                    ),
                    barWidth: barWidth
                })
        );
        return <Progress {...rest}>{childrenWithProps}</Progress>;
    }
}

Steps = withTheme(Steps);

Steps.propTypes = {
    /** The current step */
    current: PropTypes.number,
    /** Array of stages - shows the label and callback in an object. */
    stages: PropTypes.array,
    /** The width of the lines between the dots */
    barWidth: PropTypes.number,
    margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Steps.defaultProps = {
    barWidth: 10
};

Steps.displayName = "Steps";

export default Steps;
