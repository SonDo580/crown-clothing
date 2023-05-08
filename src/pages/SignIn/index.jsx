import { signInWithGooglePopup } from "../../utils/firebase.utils";

export default function SignIn() {
  const googleSignInPopup = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={googleSignInPopup}>Sign in with Google Popup</button>
    </div>
  );
}
