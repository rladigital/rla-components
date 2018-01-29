import React from "react";
import PropTypes from "prop-types";
import Carousel from "./carousel";
import CarouselItem from "./carouselItem";

class GreedyCarousel extends React.Component {
    chunk(myArray, chunk_size) {
        var i = 0;
        var chunk;
        var tempArray = [];

        for (i = 0; i < myArray.length; i += chunk_size) {
            chunk = myArray.slice(i, i + chunk_size);
            tempArray.push(chunk);
        }

        return tempArray;
    }
    render() {
        const { children, layout, ...rest } = this.props;

        const { w, h } = layout;

        let perCarouselItem = Math.max(1, Math.floor(w / h), Math.floor(h / w));

        let chunks = this.chunk(children, perCarouselItem);

        return (
            <Carousel hideControls={Boolean(chunks.length == 1)} {...rest}>
                {chunks.map((chunk, i) => {
                    return (
                        <CarouselItem key={i}>
                            {chunk.map((child, i) => {
                                var size = 100 / chunk.length + "%";
                                return (
                                    <div
                                        key={i}
                                        style={
                                            w > h
                                                ? {
                                                      float: "left",
                                                      position: "relative",
                                                      height: "100%",
                                                      width: size
                                                  }
                                                : {
                                                      position: "relative",
                                                      width: "100%",
                                                      height: size
                                                  }
                                        }
                                    >
                                        {child}
                                    </div>
                                );
                            })}
                        </CarouselItem>
                    );
                })}
            </Carousel>
        );
    }
}

Carousel.PropTypes = {
    layout: PropTypes.object
};

GreedyCarousel.defaultProps = {
    layout: { w: 1, h: 1 }
};

export default GreedyCarousel;
