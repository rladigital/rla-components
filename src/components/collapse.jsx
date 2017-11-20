import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class Collapse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0
        };
    }
    componentDidMount() {
        this.updateHeight();
    }
    shouldComponentUpdate() {
        if (this.measure.clientHeight != this.state.height) return true;
        return false;
    }
    componentDidUpdate() {
        this.updateHeight();
    }
    updateHeight() {
        this.setState({ height: this.measure.clientHeight });
    }
    render() {
        const Collapse = styled.div`
            overflow: hidden;
            transition: height ${props => props.speed} ease;
        `;
        return (
            <Collapse
                style={{ height: this.props.open ? this.state.height : 0 }}
                speed="1s"
            >
                <div ref={measure => (this.measure = measure)}>
                    {this.props.children}
                </div>
            </Collapse>
        );
    }
}

Collapse.propTypes = {
    speed: PropTypes.string
};

Collapse.defaultProps = {
    speed: "1s"
};

export default Collapse;
