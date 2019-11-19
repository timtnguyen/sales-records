import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-buttons/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils.js";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      alert(error.message);
    }
    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="page">
        <div className="sign-in">
          <h2>I already have an account</h2>
          <span>Sign in with email & password</span>

          <form onSubmit={this.handleSubmit}>
            <FormInput
              name="email"
              type="email"
              placeholder="Email"
              handleChange={this.handleChange}
              value={this.state.email}
              label="Email"
              required
            />

            <FormInput
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              handleChange={this.handleChange}
              label="Password"
              required
            />

            <div className="buttons">
              <CustomButton type="submit">Sign In</CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                {""} Sign in with Google{""}
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
