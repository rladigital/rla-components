import React from "react";
import PropTypes from "prop-types";
import FAIcon from "@fortawesome/react-fontawesome";
import faCircleNotch from "@fortawesome/fontawesome-free-solid/faCircleNotch";
import faSave from "@fortawesome/fontawesome-free-solid/faSave";

import Button from "./button";

const LoadingButton = props => {
    const { loading, loadingIcon } = props;
    const icon = !props.icon ? "" : props.icon;
    return (
        <Button disabled={loading} {...props}>
            {loading ? loadingIcon : icon} {props.label}
        </Button>
    );
};

LoadingButton.displayName = "LoadingButton";

LoadingButton.propTypes = {
    loading: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    /** The Icon to use whilst NOT loading - probably a Font Awesome icon like   <FAIcon icon={faCircleNotch} spin />
     * If none is supplied no icon will display
     */
    icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    /** The Icon to use whilst loading - probably a Font Awesome icon like  <FAIcon icon={faCircleNotch} spin /> */
    loadingIcon: PropTypes.object
};

LoadingButton.defaultProps = {
    loading: false,
    icon: false,
    loadingIcon: <FAIcon icon={faCircleNotch} spin />
};

export default LoadingButton;
