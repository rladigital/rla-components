import React from "react";
import styled, { withTheme, css } from "styled-components";
import { Column } from "../index";

class Tile extends React.Component {
    render() {
        const { square, theme, size, baseSize, maxSize } = this.props;

        const TileColumn = styled.div`
            padding: 0 ${theme.padding / 2}em ${theme.padding}em;
            float: left;
        `;

        const Tile = styled.div`
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: ${theme.colors.lightGray};
        `;

        return (
            <TileColumn
                style={{
                    height: baseSize,
                    width:
                        baseSize * Math.min(theme.tile.tileSizes[size], maxSize)
                }}
            >
                <Tile>{this.props.children}</Tile>
            </TileColumn>
        );
    }
}

Tile.displayName = "Tile";

export default withTheme(Tile);
