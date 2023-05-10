import { useState } from "react";
import { toast } from "react-toastify";

import {
  createEmailPasswordUser,
  createUserDocument,
} from "../../utils/firebase.utils";

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

      resetForm();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
          minLength={6}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
