import PropTypes from "prop-types";
import styled from "styled-components";
import { StyledPanel } from "./panel";
import { colors, spacing, sizes } from "../theme";

const panel = props => props.theme.panel.types[props.type];

const Hero = StyledPanel.extend`
    height: ${props => props.height}px;
    background-image: url('${props => props.backgroundImage}');
    background-size: cover;
    background-position: center;
    background-size: ${props => props.backgroundSize};
    background-repeat: no-repeat;
`;

Hero.displayName = "Hero";

Hero.propTypes = {
    height: PropTypes.number,
    backgroundImage: PropTypes.string,
    backgroundSize: PropTypes.string
};

Hero.defaultProps = {
    height: 500,
    backgroundSize: "cover"
};

export default Hero;
