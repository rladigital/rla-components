import React from "react";
import styled, { withTheme, css } from "styled-components";
import { ZoomIn, ZoomOut } from "animate-css-styled-components";
import { shade } from "./_functions";

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    _onMouseEnter() {
        this.setState({ visible: true });
    }

    _onMouseLeave() {
        this.setState({ visible: false });
    }

    _renderItems(DropdownItem, items) {
        let result = [];
        for (var i = 0; i < items.length; i++) {
            const props = items[i].props;
            result.push(
                <DropdownItem key={i} {...props}>
                    {items[i].children}
                </DropdownItem>
            );
        }

        return result;
    }

    render() {
        const { theme } = this.props;

        const DropdownContainer = styled.span`
            position: relative;
            display: inline-block;
        `;

        const DropdownMenu = styled.div`
            position: absolute;
            background: ${theme.colors.white};
            ${this.props.right ? css`right: 0;` : css`left: 0;`};
        `;

        const DropdownItem = styled.div`
            min-width: 200px;
            background: ${theme.colors.lightGray};
            border-bottom: 1px solid ${theme.colors.white};
            padding: ${theme.padding / 2}em ${theme.padding}em;
            cursor: pointer;
            &:hover {
                background: ${shade(theme.colors.lightGray, -20)};
            }
        `;

        return (
            <DropdownContainer
                onMouseEnter={() => this._onMouseEnter()}
                onMouseLeave={() => this._onMouseLeave()}
            >
                {this.props.children}
                {this.state.visible && (
                    <DropdownMenu ref={dropdown => (this.dropdown = dropdown)}>
                        {this.props.items &&
                            this._renderItems(DropdownItem, this.props.items)}
                    </DropdownMenu>
                )}
            </DropdownContainer>
        );
    }
}

export default withTheme(Dropdown);
