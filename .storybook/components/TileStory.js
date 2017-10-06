import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { Column, Tile, TileRow } from "../../src/index";

storiesOf("Tile", module).add(
    "Layouts using tiles",
    withInfo("Tiles must be placed inside a Tile Row.")(() => (
        <div>
            <TileRow>
                <Tile size="small">small</Tile>
                <Tile size="small">small</Tile>
                <Tile size="medium">medium</Tile>
            </TileRow>
            <TileRow>
                <Tile size="large">large</Tile>
            </TileRow>
        </div>
    ))
);
