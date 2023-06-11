import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { currentUserSelector } from "../../redux/user/userSelectors";

import { AuthenticationContainer } from "./authentication.style.jsx";
import SignInForm from "../../components/SignInForm";
import SignUpForm from "../../components/SignUpForm";

export default function Authentication() {
  const navigate = useNavigate();

  const { state: locationState } = useLocation();
  const prevPath = (locationState && locationState.prevPath) || "/";

  const currentUser = useSelector(currentUserSelector);

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
