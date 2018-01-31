import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import Icon from "./icon";
import {
    ZoomIn,
    ZoomOut,
    FadeIn,
    FadeOut
} from "animate-css-styled-components";

// Set to animate in / out based on visibility
let animation = {
    fade: FadeIn,
    zoom: ZoomIn
};

const ModalWrapper = animation.fade.extend`
        display: auto;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        position: fixed;
        padding: 0 ${props => props.theme.modal.padding}rem;
        background: rgba(0, 0, 0, 0.6);
        z-index: 999;
    `;
const ModalInner = animation.zoom.extend`
    max-width: ${props => props.maxWidth};
    margin: 6em auto;
    position: relative;
    border-radius: ${props => props.theme.modal.radius}em;
    background: ${props => props.theme.modal.background};
    padding: ${props => props.theme.modal.padding}em
        0 0;
    color: ${props => props.theme.modal.color};
`;
const ModalCloseButton = styled.div.attrs({
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

const bodyElement = document.getElementsByTagName("BODY")[0];

/** Modal  */
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement("div");
    }

    componentWillMount() {
        // init portal element
        bodyElement.appendChild(this.el);
    }

    componentWillUnmount() {
        // destroy portal element
        bodyElement.removeChild(this.el);
    }

    componentDidUpdate() {
        bodyElement.style.overflow = this.props.visible ? "hidden" : "visible";
    }

    onClose = () => {
        this.setState({ visible: false });
        this.props.onClose();
    };

    renderModal = () => {
        const { maxWidth, children } = this.props;
        return (
            <ModalWrapper duration="0.25s" onClick={this.onClose}>
                <ModalInner
                    duration="0.25s"
                    onClick={e => e.stopPropagation()}
                    maxWidth={maxWidth}
                >
                    <ModalCloseButton onClick={this.onClose}>
                        <Icon name="close" size="1.8" />
                    </ModalCloseButton>
                    {this.props.children}
                </ModalInner>
            </ModalWrapper>
        );
    };

    render() {
        var { theme, visible } = this.props;

        if (visible) {
            return ReactDOM.createPortal(this.renderModal(), this.el);
        } else {
            return null;
        }
    }
}
Modal = withTheme(Modal);

Modal.displayName = "Modal";

Modal.propTypes = {
    /** Boolean indicating whether the modal should show */
    visible: PropTypes.bool.isRequired,
    /** The function to call when the modal is closed */
    onClose: PropTypes.func.isRequired,
    maxWidth: PropTypes.string
};

Modal.defaultProps = {
    visible: false,
    maxWidth: "640px"
};

export default Modal;
