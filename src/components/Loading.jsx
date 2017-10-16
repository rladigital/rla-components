import React from "react";
import PropTypes from "prop-types";
import Loading from "react-loading";
import styled from "styled-components";

const LoadingOuter = styled.div`
    position: relative;
    width: 100%;
    margin-top: 15%;
`;

const LoadingInner = styled.div`
    margin: auto;
    width: 50%;
    height: 50%;
`;

const LoadingIcon = props => {
    return (
        <LoadingOuter>
            <LoadingInner>
                <Loading
                    type={props.type}
                    color={props.color}
                    width="100%"
                    height="100%"
                />
            </LoadingInner>
        </LoadingOuter>
    );
};
LoadingIcon.displayName = "LoadingIcon";

LoadingIcon.propTypes = {
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
    ])
};

LoadingIcon.defaultProps = {
    color: "rgba(235,235,235,0.2)",
    type: "spinningBubbles"
};
export default LoadingIcon;
