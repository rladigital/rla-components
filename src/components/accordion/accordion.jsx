import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const AccordionWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    border-radius: ${props => props.theme.accordion.radius}em;
    margin-bottom: ${props => props.theme.accordion.margin}em;
`;

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        };
    }
    render() {
        var i = 0;
        var childrenWithProps = React.Children.map(
            this.props.children,
            (child, i) =>
                React.cloneElement(child, {
                    i: i,
                    current: this.state.current,
                    barClickable: this.props.barClickable,
                    allowMultiple: this.props.allowMultiple,
                    onClick: x => this.setState({ current: x })
                })
        );
        return <AccordionWrapper>{childrenWithProps}</AccordionWrapper>;
    }
}

Accordion.displayName = "Accordion";

Accordion.propTypes = {
    barClickable: PropTypes.bool,
    allowMultiple: PropTypes.bool
};

Accordion.defaultProps = {
    barClickable: true,
    allowMultiple: false
};

export default Accordion;
