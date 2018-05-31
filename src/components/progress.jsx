import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: ${props => props.height}px;
    border: 1px solid ${props => props.theme.progress.borderColor};
    background: ${props => props.theme.progress.background};
    border-radius: ${props => props.theme.progress.radius}px;
    margin-bottom: ${props => props.theme.spacing.margin}em;
    overflow: hidden;
    position: relative;
    white-space: nowrap;
`;

const Bar = styled.div`
    height: 100%;
    transition: width ${props => props.speed} ease;
    background: ${props => props.theme.progress.barColor};
    overflow: hidden;
    position: absolute;
`;

const BaseText = styled.div`
    left: 0;
    top: 50%;
    font-weight: bold;
    position: absolute;
    transform: translateY(-50%);
    margin: 0 ${props => props.theme.spacing.margin}em;
`;

const TextForeground = BaseText.extend`
    color: ${props => props.theme.progress.textColorAlt};
`;

const TextBackground = BaseText.extend`
    color: ${props => props.theme.progress.textColor};
`;

class Progress extends Component {
    render() {
        const { current, total, speed, text, ...rest } = this.props;
        const percentage = Math.min(current / total * 100, 100);
        return (
            <Container {...rest}>
                <TextBackground>{text}</TextBackground>
                <Bar
                    style={{
                        width: `${percentage}%`
                    }}
                    speed={speed}>
                    <TextForeground>{text}</TextForeground>
                </Bar>
            </Container>
        );
    }
}

Progress.propTypes = {
    current: PropTypes.number,
    total: PropTypes.number,
    height: PropTypes.number,
    speed: PropTypes.text
};

Progress.defaultProps = {
    current: 0,
    total: 100,
    height: 30,
    speed: "1s"
};

export default Progress;
