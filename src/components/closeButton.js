import React from "react";
import styled from "styled-components";

import Icon from "./icon";

const Button = styled.div.attrs({
    role: "button"
})`
    top: 0;
    right: 0;
    padding: 0;
    opacity: 0.5;
    cursor: pointer;
    position: absolute;
    margin: ${props => props.theme.modal.margin}rem;
    color: ${props => props.theme.modal.closeButtonColor};
`;

class CloseButton extends React.Component {
    render() {
        const { ...rest } = this.props;
        return (
            <Button {...rest}>
                <Icon name="close" size="1" />
            </Button>
        );
    }
}

export default CloseButton;
