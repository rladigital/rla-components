import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { shade } from "../functions";
import { colors, spacing, panel } from "../theme";
import { foregroundColor } from "../functions";

let background = props =>
    colors[props.type] || colors[props.theme.panel.default];

const Panel = styled.div`
    color: ${props =>
        foregroundColor(
            background(props),
            0.5,
            props.theme.lightColor,
            props.theme.darkColor
        )};
    background-color: ${props => background(props)};
    margin-bottom: ${props =>
        props.margin != undefined ? props.margin : spacing.margin}em;
    padding-top: ${props =>
        props.padding != undefined ? props.padding : spacing.padding}em;
`;

Panel.displayName = "Panel";

Panel.propTypes = {
    type: PropTypes.string,
    marginBottom: PropTypes.number,
    padding: PropTypes.number,
    margin: PropTypes.number,
    padding: PropTypes.number
};

Panel.defaultProps = {};

export default Panel;
