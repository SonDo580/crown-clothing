import { useState } from "react";
import { toast } from "react-toastify";

import { createAuthUser } from "../../utils/firebase.utils";

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

    const { user } = await createAuthUser(email, password);

    console.log(user);
    // TODO: create a new user document
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
