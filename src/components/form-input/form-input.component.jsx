import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ onChange, label, ...otheProps }) => (
    <div className="form-components">
        <input className="form-input" onChange={onChange} {...otheProps} />
        {
            label ?
                <label className={`${otheProps.value.length ? 'shrink' : ''} form-label`}>
                    {label}
                </label>
                : null
        }
    </div>
);

export default FormInput;