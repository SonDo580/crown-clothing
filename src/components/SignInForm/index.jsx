import { useState } from "react";
import { toast } from "react-toastify";

import {
  createUserDocument,
  signInWithGoogle,
  signInWithEmailPassword,
} from "../../utils/firebase.utils";
import { BUTTON_TYPES } from "../../constants/button";

import FormInput from "../../common/FormInput";
import Button from "../../common/Button";
import { ButtonsContainer, SignUpContainer } from "./signinForm.style.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields((fields) => ({
      ...fields,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInWithEmailPassword(email, password);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const googleSignIn = async () => {
    try {
      const { user } = await signInWithGoogle();
      await createUserDocument(user);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <SignUpContainer>
      <h2>{"Already an account?"}</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
          <Button type="submit">Sign In</Button>

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
