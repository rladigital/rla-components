import React from "react";
import PropTypes from "prop-types";
import FAIcon from "@fortawesome/react-fontawesome";
import faCircleNotch from "@fortawesome/fontawesome-free-solid/faCircleNotch";
import faSave from "@fortawesome/fontawesome-free-solid/faSave";

import Button from "./button";

const SaveButton = props => {
    return (
        <Button disabled={props.saving} {...props}>
            {props.saving ? (
                <FAIcon icon={faCircleNotch} spin />
            ) : (
                <FAIcon icon={faSave} />
            )}{" "}
            {props.label}
        </Button>
    );
};

SaveButton.PropTypes = {
    saving: PropTypes.bool,
    label: PropTypes.string
};

SaveButton.defaultProps = {
    saving: false,
    label: "Save"
};

export default SaveButton;
