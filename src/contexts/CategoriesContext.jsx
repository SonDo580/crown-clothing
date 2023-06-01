import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { getCategoryDocuments } from "../utils/firebase.utils";

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategoryMap = async () => {
      const { categoryMap, categories } = await getCategoryDocuments();

      setCategoryMap(categoryMap);
      setCategories(categories);
    };

    getCategoryMap();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categoryMap, categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

CategoriesProvider.propTypes = {
  children: PropTypes.node,
};
