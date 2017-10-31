import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import { StyledDropzone } from "../../src/index";

storiesOf("Dropzone", module).add(
    "Default",
    withInfo("Styling the react-dropzone component")(() => (
        <div>
            <StyledDropzone>
                This is a default StyledDropzone (light)
            </StyledDropzone>
            <StyledDropzone type="dark">
                This is a dark StyledDropzone
            </StyledDropzone>
            <StyledDropzone type="accent">
                This is an accent StyledDropzone
            </StyledDropzone>
        </div>
    ))
);
