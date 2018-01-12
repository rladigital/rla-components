import React from "react";
import PropTypes from "prop-types";
import FAIcon from "@fortawesome/react-fontawesome";
import faCircleNotch from "@fortawesome/fontawesome-free-solid/faCircleNotch";
import faSave from "@fortawesome/fontawesome-free-solid/faSave";

import LoadingButton from "./buttonLoading";

const SaveButton = props => {
    return (
        <LoadingButton
            loading={props.saving}
            icon={<FAIcon icon={faSave} />}
            loadingIcon={<FAIcon icon={faCircleNotch} spin />}
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
