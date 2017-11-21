import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import Icon from "./icon";
import {
    ZoomIn,
    ZoomOut,
    FadeIn,
    FadeOut
} from "animate-css-styled-components";

/** Modal  */
class Modal extends React.Component {
    // Modal must start closed
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         visible: false
    //     };
    // }

    componentWillUnmount() {
        // Lock body scroll if is visible
        try {
            document.getElementsByTagName("BODY")[0].style.overflow = "auto";
        } catch (err) {}
    }

    // _closeModal(cb) {
    //     this._toggleModal();
    //     setTimeout(() => {
    //         this._toggleModal(); // Reset visibility
    //         cb && cb(); // Run callback
    //     }, 250);
    // }

    // _toggleModal() {
    //     this.setState({ visible: !this.state.visible });
    // }

    render() {
        var { theme, visible, onClose } = this.props;
        // Set to animate in / out based on visibility
        let animation = {
            fade: visible ? FadeIn : FadeOut,
            zoom: visible ? ZoomIn : ZoomOut
        };

        // Lock body scroll if is visible
        try {
            document.getElementsByTagName("BODY")[0].style.overflow = visible
                ? "hidden"
                : "auto";
        } catch (err) {}

        const ModalWrapper = animation.fade.extend`
            display: ${visible ? "auto" : "none"}
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            position: fixed;
            padding: 0 ${theme.modal.padding}rem;
            background: rgba(0, 0, 0, 0.6);
            z-index: 999;
        `;
        const ModalInner = animation.zoom.extend`
            max-width: 40em;
            margin: 6em auto;
            overflow: hidden;
            position: relative;
            border-radius: ${theme.modal.radius}em;
            background: ${theme.modal.background};
            padding: ${theme.modal.padding}em ${theme.modal.padding / 2}rem 0;
            color: ${theme.modal.color};
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
            margin: ${theme.modal.margin}rem;
            color: ${theme.modal.closeButtonColor};
        `;

        return (
            <ModalWrapper duration="0.25s" onClick={() => onClose}>
                <ModalInner duration="0.25s" onClick={e => e.stopPropagation()}>
                    <ModalCloseButton onClick={() => onClose}>
                        <Icon name="close" size="1.8" />
                    </ModalCloseButton>
                    {this.props.children}
                </ModalInner>
            </ModalWrapper>
        );
    }
}
Modal = withTheme(Modal);

Modal.displayName = "Modal";

Modal.propTypes = {
    /** Boolean indicating whether the modal should show */
    visible: PropTypes.bool.isRequired,
    /** The function to call when the modal is closed */
    onClose: PropTypes.func.isRequired
};

Modal.defaultProps = {
    visible: false
};

export default Modal;
