import React from "react";
import PropTypes from "prop-types";
import FAIcon from "@fortawesome/react-fontawesome";
import faCircleNotch from "@fortawesome/fontawesome-free-solid/faCircleNotch";
import faSave from "@fortawesome/fontawesome-free-solid/faSave";

import SubmitButton from "./buttonSubmit";

const SaveButton = props => {
    return (
        <SubmitButton
            submitting={props.saving}
            icon={<FAIcon icon={faSave} />}
            submittingIcon={<FAIcon icon={faCircleNotch} spin />}
            {...props}
        />
    );
};

SaveButton.displayName = "SaveButton";

SaveButton.propTypes = {
    saving: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

SaveButton.defaultProps = {
    saving: false,
    label: "Save"
};

export default SaveButton;
