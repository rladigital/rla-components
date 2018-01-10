import React from "react";
import PropTypes from "prop-types";
import LoadingIcon from "react-loading";
import styled, { css } from "styled-components";

const Loading = props => {
    const LoadingOuter = styled.div`
        position: relative;
        width: ${props.width};
        height: ${props.height};
        ${props.align == "center" &&
            css`
                margin: auto;
            `} ${props.align == "right" &&
                css`
                    float: right;
                `};
    `;

    const LoadingInner = styled.div`
        margin: auto;
        width: 50%;
        height: 50%;
    `;
    return (
        <LoadingOuter>
            <LoadingInner>
                <LoadingIcon
                    type={props.type}
                    color={props.color}
                    width="100%"
                    height="100%"
                />
            </LoadingInner>
        </LoadingOuter>
    );
};
Loading.displayName = "Loading";

Loading.propTypes = {
    /** A css color (using rgba will allow transparency) */
    color: PropTypes.string,
    /** One of the types provided by react-loading, e.g. currently ["blank",
        "balls",
        "bars",
        "bubbles",
        "cubes",
        "cylon",
        "spin",
        "spinningBubbles",
        "spokes"] */
    type: PropTypes.oneOf([
        "blank",
        "balls",
        "bars",
        "bubbles",
        "cubes",
        "cylon",
        "spin",
        "spinningBubbles",
        "spokes"
    ]),
    /** A css width */
    width: PropTypes.string,
    /** A css height */
    height: PropTypes.string,
    /** left, right or center */
    align: PropTypes.string
};

Loading.defaultProps = {
    color: "rgba(0,0,0,0.3)",
    type: "spin",
    width: "200px",
    height: "200px",
    align: "left"
};
export default Loading;
