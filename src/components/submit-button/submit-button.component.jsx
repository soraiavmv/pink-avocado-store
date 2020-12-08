import React from "react";

import "./submit-button.styles.scss";

const SubmitButton = ({ children, ...otherProps }) => (
    <button className="submit-button" {...otherProps}>
        {children}
    </button>
);

export default SubmitButton;