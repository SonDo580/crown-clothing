import SignUpForm from "../../components/SignUpForm";
import {
  createUserDocument,
  signInWithGoogle,
} from "../../utils/firebase.utils";

export default function SignIn() {
  const googleSignIn = async () => {
    const { user } = await signInWithGoogle();

    const userDocRef = await createUserDocument(user);

    console.log(userDocRef);
  };

  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={googleSignIn}>Sign in with Google</button>

      <SignUpForm />
    </div>
  );
}
