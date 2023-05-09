export default function SignUpForm() {
  const onSubmit = () => {};

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={onSubmit}>
        <label>Display Name</label>
        <input type="text" required />

        <label>Email</label>
        <input type="email" required />

        <label>Password</label>
        <input type="password" required />

        <label>Confirm Password</label>
        <input type="password" required />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
