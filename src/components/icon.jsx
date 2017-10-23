import React from "react";
import styled, { withTheme } from "styled-components";
import icons from "./icons";

class Icon extends React.Component {
    render() {
        const { name, size, color, theme } = this.props;

        const icon = icons[name];

        //console.log(icon);

        const SVG = styled.svg.attrs({
            x: "0px",
            y: "0px",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: icon.viewbox
        })`
            width: ${size ? size : 1}em;
            height: ${size ? size : 1}em;
            display: inline;
            vertical-align: middle;
        `;

        const Path = styled.path`
            fill: ${color ? theme.icon.colors[color] : "currentColor"};
        `;

        return (
            <SVG>
                {icon.paths.map(function(path, index) {
                    return <Path key={index} d={path} />;
                })}
            </SVG>
        );
    }
}

Icon = withTheme(Icon);

Icon.displayName = "Icon";

export default Icon;
