import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import Dropzone from "react-dropzone";

const type = props => (props.type ? props.type : props.theme.dropzone.default);
const dropzone = props => props.theme.dropzone.types[type(props)];

const StyledDropzone = styled(Dropzone)`
    background: ${props => dropzone(props).background};
    margin-bottom: ${props => dropzone(props).margin}em;
    padding: ${props => dropzone(props).padding}em;
    border: ${props => dropzone(props).border};
    color: ${props => dropzone(props).color};
`;

StyledDropzone.displayName = "StyledDropzone";

StyledDropzone.propTypes = {
    type: PropTypes.string
};

export default withTheme(StyledDropzone);
