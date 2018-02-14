import React, { Component } from "react";
import ReactDOM from "react-dom";

import { isBrowser } from "../../../functions";

class CalendarContainer extends Component {
    constructor(props) {
        super(props);
        if (isBrowser()) {
            this.el = document.createElement("div");
        }
    }

    componentWillMount() {
        // Lock body scroll if is visible
        if (isBrowser()) {
            try {
                const bodyElement = document.getElementsByTagName("BODY")[0];
                bodyElement.appendChild(this.el);
            } catch (err) {}
        }
    }

    componentWillUnmount() {
        // Lock body scroll if is visible
        if (isBrowser()) {
            try {
                const bodyElement = document.getElementsByTagName("BODY")[0];

                bodyElement.removeChild(this.el);
            } catch (err) {}
        }
    }

    renderCalendar = () => {
        return (
            <div style={{ zIndex: 10000 }}>
                <style>{`.showInFront{z-index:1000};`}</style>
                {this.props.children}
            </div>
        );
    };

    render = () => {
        if (isBrowser()) {
            return ReactDOM.createPortal(this.renderCalendar(), this.el);
        } else {
            return null;
        }
    };
}

export default CalendarContainer;
