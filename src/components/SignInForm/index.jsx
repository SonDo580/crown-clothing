import { useState } from "react";
import { toast } from "react-toastify";

import {
  createUserDocument,
  signInWithGoogle,
} from "../../utils/firebase.utils";

import "./signinForm.scss";
import FormInput from "../../common/FormInput";
import Button from "../../common/Button";

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
    <div className="sign-up-container">
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

        <Button type="submit">Sign In</Button>

        <Button type="button" buttonType="google" onClick={googleSignIn}>
          Sign in with Google
        </Button>
      </form>
    </div>
  );
}
