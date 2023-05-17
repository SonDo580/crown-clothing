import { createContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

import { onAuthStateChangedListener } from "../utils/firebase.utils";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const value = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
    }),
    [currentUser]
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) =>
      setCurrentUser(user)
    );

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node,
};
