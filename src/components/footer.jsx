import React, { Component } from "react";
import styled, { css } from "styled-components";

const StickyFooter = styled.div`
    width: 100%;
    background-color: ${props => props.theme.footer.background};
    padding: ${props => props.theme.footer.padding}em 0 0;

    ${props =>
        props.fixed &&
        css`
            bottom: 0;
            position: fixed;
        `};
`;

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fixed: false
        };
    }
    onElementHeightChange(elm, callback) {
        var lastHeight = elm.clientHeight,
            newHeight;
        (function run() {
            newHeight = elm.clientHeight;
            if (lastHeight != newHeight) callback();
            lastHeight = newHeight;

            if (elm.onElementHeightChangeTimer)
                clearTimeout(elm.onElementHeightChangeTimer);

            elm.onElementHeightChangeTimer = setTimeout(run, 200);
        })();
    }
    componentDidMount() {
        this.isFixed();
        // detect window change
        this.onElementHeightChange(document.body, () => {
            this.isFixed();
        });
    }
    isFixed() {
        this.setState({
            fixed: Boolean(document.body.offsetHeight < window.innerHeight)
        });
    }
    render() {
        return (
            <StickyFooter fixed={this.state.fixed}>
                {this.props.children}
            </StickyFooter>
        );
    }
}

export default Footer;
