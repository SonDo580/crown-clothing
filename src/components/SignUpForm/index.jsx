import { useState } from "react";
import { toast } from "react-toastify";

import {
  createEmailPasswordUser,
  createUserDocument,
} from "../../utils/firebase.utils";

import FormInput from "../../common/FormInput";
import Button from "../../common/Button";
import { SignUpContainer } from "./signupForm.style.jsx";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields((fields) => ({
      ...fields,
      [name]: value,
    }));
  };

  const resetForm = () => setFormFields(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let invalid = false;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      invalid = true;
    }

    if (displayName.trim() === "") {
      toast.error("Display Name contains all whitespaces!");
      invalid = true;
    }

    if (invalid) {
      return;
    }

    try {
      const { user } = await createEmailPasswordUser(email, password);
      await createUserDocument(user, { displayName });
      toast.success("Sign up successful");

      resetForm();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <SignUpContainer>
      <h2>{"Don't have an account?"}</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
}
