import React from "react";
import styled, { withTheme, css } from "styled-components";

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tilesize: Number.isInteger(this.props.responsiveScale)
                ? this.props.responsiveScale
                : 300
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
        // Make square
        const height = Math.round(this.tileElement.clientWidth);
        const tilesize = this.state.tilesize;
        this.setState({ height: height });

        //console.log(tilesize);

        // Scaling
        if (this.props.responsiveScale) {
            const scale = height / this.state.tilesize;
            this.setState({ scale: scale });
        }
    }

    render() {
        const { square, theme, responsiveScale } = this.props;

        const Tile = styled.div`
            width: 100%;
            background: ${theme.colors.lightGray};
            overflow: hidden;
            float: left;
            margin: 0 0 ${theme.margin}em;
            position: relative;
            ${!responsiveScale &&
                css`
                    padding: ${theme.padding}em ${theme.padding / 2}em 0;
                `};
        `;

        const ResponsiveScale = styled.div`
            width: ${this.state.tilesize}px;
            height: ${this.state.tilesize}px;
            padding: ${theme.padding}em ${theme.padding / 2}em 0;
            overflow: hidden;
            position: absolute;
            top: 50%;
            left: 50%;
        `;

        const children = responsiveScale ? (
            <ResponsiveScale
                style={{
                    transform:
                        "translate(-50%, -50%) scale(" + this.state.scale + ")"
                }}
            >
                {this.props.children}
            </ResponsiveScale>
        ) : (
            this.props.children
        );

        return (
            <Tile
                innerRef={tileElement => (this.tileElement = tileElement)}
                style={{ height: this.state.height }}
            >
                {children}
            </Tile>
        );
    }
}

export default withTheme(Tile);
