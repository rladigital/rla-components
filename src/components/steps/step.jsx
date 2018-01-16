import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme, css } from "styled-components";

const Circle = styled.div`
    ${props => css`
        width: ${props.theme.steps.circleDiameter}px;
        height: ${props.theme.steps.circleDiameter}px;
        background: ${props.theme.steps.backgroundColor};
        border-radius: 50px;
        float: left;
        box-shadow: 0px 0px 0 ${props.theme.steps.border}px
            ${props.theme.steps.borderColor};
        padding: ${props.theme.steps.padding}px;
        margin-bottom: 20px;
        cursor: pointer;
        position: relative;
    `};
`;

const Bar = styled.div`
    ${props => css`
        width: ${props.barWidth}vw;
        height: ${props.theme.steps.barHeight}px;
        background: ${props.theme.steps.backgroundColor};
        margin: ${(props.theme.steps.circleDiameter -
                props.theme.steps.barHeight) /
                2}px
            0;
        margin-left: ${props.theme.steps.spacing * 2}px;
        position: relative;
        right: ${props.theme.steps.spacing}px;
        float: left;
        box-shadow: 0 ${props.theme.steps.border}px 0
                ${props.theme.steps.borderColor},
            0 -${props.theme.steps.border}px 0 0 ${props.theme.steps.borderColor};
        padding: ${props.theme.steps.padding}px ${props.theme.steps.padding}px
            ${props.theme.steps.padding}px 0;
        z-index: 1;
    `};
`;

const CircleInner = styled.div`
    ${props => css`
        width: 100%;
        height: 100%;
        border-radius: 100%;
        transition: 50ms linear;
        transition-delay: 50ms;
        color: ${props.theme.steps.progressColor};
        position: relative;
        ${props =>
            props.active &&
            css`
                background: ${props.theme.steps.progressColor};
                color: ${props.theme.steps.backgroundColor};
            `};
    `};
`;

const BarInner = styled.div`
    ${props => css`
        width: 0;
        height: 100%;
        border-top-radius: 20px;
        margin-left: -${props.theme.steps.padding}px;
        padding-right: ${props.theme.steps.padding * 3}px;
        box-sizing: content-box;
        transition: 100ms linear;
    `};
    ${props =>
        props.active &&
        css`
            background: ${props.theme.steps.progressColor};
            width: 100%;
        `};
`;

const Icon = styled.div`
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
`;

const Label = styled.div`
    ${props => css`
        left: 50%;
        position: absolute;
        white-space: nowrap;
        transform: translateX(-50%);
        color: ${props.theme.steps.labelColor};
        font-size: 13px;
        bottom: -18px;
    `};
`;

class Steps extends React.Component {
    render() {
        const { i, onClick, current, hasBar, barWidth, label } = this.props;

        return [
            <Circle onClick={onClick} key={"step_cicle_" + i}>
                <CircleInner active={i <= current}>
                    <Icon>{this.props.children}</Icon>
                </CircleInner>
                {label && <Label>{label}</Label>}
            </Circle>,
            hasBar && (
                <Bar barWidth={barWidth} key={"step_bar_" + i}>
                    <BarInner active={i < current} />
                </Bar>
            )
        ];
    }
}

Steps = withTheme(Steps);

Steps.propTypes = {
    /** The current step */
    current: PropTypes.number,
    /** Array of stages - shows the label and callback in an object. */
    stages: PropTypes.array,
    /** The width of the lines between the dots */
    barWidth: PropTypes.number
};

Steps.defaultProps = {
    barWidth: 10
};

Steps.displayName = "Steps";

export default Steps;
