import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { addCollectionAndDocuments } from "../utils/firebase.utils";
import { SHOP_DATA } from "../data/shopData";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node,
};
