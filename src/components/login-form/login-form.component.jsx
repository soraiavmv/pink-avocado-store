import React from "react";
import FormInput from "../form-input/form-input.component";
import SubmitButton from "../submit-button/submit-button.component"

import { signInWithGoogle } from "../../firebase/firebase.utils";

class LoginForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: "", password: "" });
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="login">
                <h2>Already have a pink account?</h2>
                <span>Please sign in with your credentials.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" onChange={this.handleChange} label="Email" type="email" value={this.state.email} />
                    <FormInput name="password" onChange={this.handleChange} label="Password" type="password" value={this.state.password} />
                    <div className="buttons">
                        <SubmitButton type="submit">LET'S GO</SubmitButton>
                        <SubmitButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</SubmitButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm;