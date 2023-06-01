import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import { UserContext } from "../../contexts/UserContext";

import SignInForm from "../../components/SignInForm";
import SignUpForm from "../../components/SignUpForm";
import { AuthenticationContainer } from "./authentication.style.jsx";

export default function Authentication() {
  const navigate = useNavigate();

  const { state: locationState } = useLocation();
  const prevPath = (locationState && locationState.prevPath) || "/";

  const currentUser = useContext(UserContext);

  useEffect(() => {
    if (currentUser) {
      navigate(prevPath);
    }
  }, [currentUser, prevPath, navigate]);

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
}
