import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { getCategoryDocuments } from "../utils/firebase.utils";

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({});

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoryDocuments();
      setCategoryMap(categoryMap);
    };

    getCategoryMap();
  }, []);

  return (
    <CategoriesContext.Provider value={categoryMap}>
      {children}
    </CategoriesContext.Provider>
  );
};

CategoriesProvider.propTypes = {
  children: PropTypes.node,
};
