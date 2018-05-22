import React from "react";
import PropTypes from "prop-types";
import Carousel from "./carousel";
import CarouselItem from "./carouselItem";
import { Scrollbars } from "react-custom-scrollbars";

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
        const {
            children,
            layout,
            perTile,
            squareStackVertical,
            ...rest
        } = this.props;

        const { w, h } = layout;

        let perCarouselItem =
            Math.max(1, Math.floor(w / h), Math.floor(h / w)) * perTile;

        let chunks = this.chunk(children, perCarouselItem);

        return (
            <Carousel hideControls={Boolean(chunks.length == 1)} {...rest}>
                {chunks.map((chunk, i) => {
                    return (
                        <CarouselItem key={i}>
                            {chunk.map((child, j) => {
                                var size = 100 / chunk.length + "%";
                                return (
                                    <Scrollbars
                                        autoHide
                                        key={j}
                                        style={
                                            (squareStackVertical && w > h) ||
                                            (!squareStackVertical && w >= h)
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
                                    </Scrollbars>
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
    /** Optional: show more items per tile. */
    perTile: PropTypes.number,
    /** The parent layout */
    layout: PropTypes.object,
    /** If Tile is square but has more than one item showing, use squareStackVertical if you want items to stack vertically. */
    squareStackVertical: PropTypes.bool
};

GreedyCarousel.defaultProps = {
    rows: 1,
    columns: 1,
    perTile: 1,
    layout: { w: 1, h: 1 },
    squareStackVertical: false
};

export default GreedyCarousel;
