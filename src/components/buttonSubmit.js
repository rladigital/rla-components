import React from "react";
import PropTypes from "prop-types";
import FAIcon from "@fortawesome/react-fontawesome";
import faCircleNotch from "@fortawesome/fontawesome-free-solid/faCircleNotch";
import faSave from "@fortawesome/fontawesome-free-solid/faSave";

import Button from "./button";

const SubmitButton = ({ icon, submitting, submittingIcon, ...props }) => {
    return (
        <Button disabled={submitting} {...props}>
            {submitting ? submittingIcon : (icon ? icon : "")} {props.label}
        </Button>
    );
};

SubmitButton.displayName = "SubmitButton";

SubmitButton.propTypes = {
    submitting: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    /** The Icon to use whilst NOT submitting - probably a Font Awesome icon like   <FAIcon icon={faCircleNotch} spin />
     * If none is supplied no icon will display
     */
    icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    /** The Icon to use whilst submitting - probably a Font Awesome icon like  <FAIcon icon={faCircleNotch} spin /> */
    submittingIcon: PropTypes.object
};

SubmitButton.defaultProps = {
    submitting: false,
    icon: false,
    submittingIcon: <FAIcon icon={faCircleNotch} spin />
};

export default SubmitButton;
