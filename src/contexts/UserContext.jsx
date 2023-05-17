import { createContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

import { onAuthStateChangedListener } from "../utils/firebase.utils";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) =>
      setCurrentUser(user)
    );

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
};
