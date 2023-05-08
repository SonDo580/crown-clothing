import {
  createUserDocument,
  signInWithGooglePopup,
} from "../../utils/firebase.utils";

export default function SignIn() {
  const googleSignInPopup = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocument(user);
  };

  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={googleSignInPopup}>Sign in with Google Popup</button>
    </div>
  );
}
