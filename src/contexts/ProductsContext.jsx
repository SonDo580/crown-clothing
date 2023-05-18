import { createContext, useState } from "react";
import PropTypes from "prop-types";

import shopData from "../../mock/shopData.json";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(shopData);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node,
};
