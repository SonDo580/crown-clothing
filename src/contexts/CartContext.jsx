import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCartVisible = () => setCartVisible((visible) => !visible);

  const contextValue = { cartVisible, toggleCartVisible };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};
