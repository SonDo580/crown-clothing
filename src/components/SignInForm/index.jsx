import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  emailSignInInit,
  googleSignInInit,
} from "../../redux/user/userActions";
import { BUTTON_TYPES } from "../../constants/button";

import { ButtonsContainer, SignUpContainer } from "./signinForm.style.jsx";
import FormInput from "../../common/FormInput";
import Button from "../../common/Button";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields((fields) => ({
      ...fields,
      [name]: value,
    }));
  };

  const emailSignIn = () => dispatch(emailSignInInit(email, password));
  const googleSignIn = () => dispatch(googleSignInInit());

  return (
    <SignUpContainer>
      <h2>{"Already an account?"}</h2>
      <span>Sign in with your email and password</span>
      <form>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
          minLength={6}
        />

        <ButtonsContainer>
          <Button type="button" onClick={emailSignIn}>
            Sign In
          </Button>

          <Button
            type="button"
            buttonType={BUTTON_TYPES.google}
            onClick={googleSignIn}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
}
