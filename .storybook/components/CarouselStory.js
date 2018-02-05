import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, number, text, object } from "@storybook/addon-knobs";
import {
    Carousel,
    CarouselItem,
    GreedyCarousel,
    Row,
    Column
} from "../../src/index";

const stories = storiesOf("Carousel", module);

stories.addDecorator(withKnobs);

stories.addWithInfo("Default", () => {
    let height = text("height", "500px");
    return (
        <Row>
            <Column small={8} centered>
                <Carousel height={height}>
                    <CarouselItem>
                        <Row>
                            <Column>
                                <h1>page 0</h1>
                            </Column>
                        </Row>
                    </CarouselItem>
                    <CarouselItem>
                        <Row>
                            <Column>
                                <h1>page 1</h1>
                            </Column>
                        </Row>
                    </CarouselItem>
                    <CarouselItem>
                        <Row>
                            <Column>
                                <h1>page 2</h1>
                            </Column>
                        </Row>
                    </CarouselItem>
                    <CarouselItem>
                        <Row>
                            <Column>
                                <h1>page 3</h1>
                            </Column>
                        </Row>
                    </CarouselItem>
                    <CarouselItem>
                        <Row>
                            <Column>
                                <h1>page 4</h1>
                            </Column>
                        </Row>
                    </CarouselItem>
                    <CarouselItem>
                        <Row>
                            <Column>
                                <h1>page 5</h1>
                            </Column>
                        </Row>
                    </CarouselItem>
                </Carousel>
            </Column>
        </Row>
    );
});

stories.addWithInfo(
    "Greedy",
    "The GreedyCarousel uses dashboard layouts to automatically decide how many items the carousel should show in one go, and whether  they should be stacked horizontally or vertically.",
    () => {
        let height = text("height", "500px");
        let layout = object("layout", { w: 1, h: 1 });
        return (
            <Row>
                <Column small={8} centered>
                    <GreedyCarousel height={height} layout={layout}>
                        <Row>
                            <Column>
                                <h1>page 0</h1>
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                                <h1>page 1</h1>
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                                <h1>page 2</h1>
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                                <h1>page 3</h1>
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                                <h1>page 4</h1>
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                                <h1>page 5</h1>
                            </Column>
                        </Row>
                    </GreedyCarousel>
                </Column>
            </Row>
        );
    }
);
