import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, number, text } from "@storybook/addon-knobs";
import { Carousel, CarouselItem, Row, Column } from "../../src/index";

const stories = storiesOf("Carousel", module);

stories.addDecorator(withKnobs);

stories.addWithInfo("Default", () => {
    let current = number("current", 0);
    return (
        <Carousel current={current}>
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
            <CarouselItem>
                <Row>
                    <Column>
                        <h1>page 6</h1>
                    </Column>
                </Row>
            </CarouselItem>
        </Carousel>
    );
});
