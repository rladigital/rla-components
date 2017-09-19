import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Column, Row, Tile } from "../../src/index";

storiesOf("Tile", module)
    .addWithInfo(
        "Layouts using tiles",
        "The tile element is always square",
        () => (
            <Row>
                <Column small="6" collapse>
                    <Row>
                        <Column small="4">
                            <Tile>
                                <Row>
                                    <Column>
                                        Tile inside a &lt;Column small="4"&gt;{" "}
                                        <strong>INSIDE</strong> a &lt;Column
                                        small="6"&gt;
                                    </Column>
                                </Row>
                            </Tile>
                        </Column>
                        <Column small="4">
                            <Tile>
                                <Row>
                                    <Column>
                                        Tile inside a &lt;Column small="4"&gt;{" "}
                                        <strong>INSIDE</strong> a &lt;Column
                                        small="6"&gt;
                                    </Column>
                                </Row>
                            </Tile>
                        </Column>
                        <Column small="4">
                            <Tile>
                                <Row>
                                    <Column>
                                        Tile inside a &lt;Column small="4"&gt;{" "}
                                        <strong>INSIDE</strong> a &lt;Column
                                        small="6"&gt;
                                    </Column>
                                </Row>
                            </Tile>
                        </Column>
                    </Row>
                    <Row>
                        <Column small="4">
                            <Tile>
                                <Row>
                                    <Column>
                                        Tile inside a &lt;Column small="4"&gt;{" "}
                                        <strong>INSIDE</strong> a &lt;Column
                                        small="6"&gt;
                                    </Column>
                                </Row>
                            </Tile>
                        </Column>
                        <Column small="4">
                            <Tile>
                                <Row>
                                    <Column>
                                        Tile inside a &lt;Column small="4"&gt;{" "}
                                        <strong>INSIDE</strong> a &lt;Column
                                        small="6"&gt;
                                    </Column>
                                </Row>
                            </Tile>
                        </Column>
                        <Column small="4">
                            <Tile>
                                <Row>
                                    <Column>
                                        Tile inside a &lt;Column small="4"&gt;{" "}
                                        <strong>INSIDE</strong> a &lt;Column
                                        small="6"&gt;
                                    </Column>
                                </Row>
                            </Tile>
                        </Column>
                    </Row>
                    <Row>
                        <Column small="4">
                            <Tile>
                                <Row>
                                    <Column>
                                        Tile inside a &lt;Column small="4"&gt;{" "}
                                        <strong>INSIDE</strong> a &lt;Column
                                        small="6"&gt;
                                    </Column>
                                </Row>
                            </Tile>
                        </Column>
                        <Column small="4">
                            <Tile>
                                <Row>
                                    <Column>
                                        Tile inside a &lt;Column small="4"&gt;{" "}
                                        <strong>INSIDE</strong> a &lt;Column
                                        small="6"&gt;
                                    </Column>
                                </Row>
                            </Tile>
                        </Column>
                        <Column small="4">
                            <Tile>
                                <Row>
                                    <Column>
                                        Tile inside a &lt;Column small="4"&gt;{" "}
                                        <strong>INSIDE</strong> a &lt;Column
                                        small="6"&gt;
                                    </Column>
                                </Row>
                            </Tile>
                        </Column>
                    </Row>
                </Column>
                <Column small="6">
                    <Tile>
                        <Row>
                            <Column>
                                Tile inside a &lt;Column small="6"&gt;
                            </Column>
                        </Row>
                    </Tile>
                </Column>
            </Row>
        )
    )
    .addWithInfo(
        "Responsive Scale",
        "Scales the content inside the tile to fit",
        () => (
            <Row>
                {" "}
                <Column small="4">
                    <Tile responsiveScale={300}>
                        <Row>
                            <Column>
                                <h2>
                                    Content designed for a 300px X 300px tile.<br />
                                    It will scale up or down depending on the
                                    size of its container
                                </h2>
                            </Column>
                        </Row>
                    </Tile>
                </Column>
            </Row>
        )
    );
