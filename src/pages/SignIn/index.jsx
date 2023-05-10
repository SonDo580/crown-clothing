import { toast } from "react-toastify";

import {
  createUserDocument,
  signInWithGoogle,
} from "../../utils/firebase.utils";

import SignUpForm from "../../components/SignUpForm";

export default function SignIn() {
  const googleSignIn = async () => {
    try {
      const { user } = await signInWithGoogle();

      const userDocRef = await createUserDocument(user);

      console.log(userDocRef);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={googleSignIn}>Sign in with Google</button>

      <SignUpForm />
    </div>
  );
}
