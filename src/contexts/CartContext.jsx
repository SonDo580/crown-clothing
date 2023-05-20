import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCartVisible = () => setCartVisible((visible) => !visible);

  const [cartItems, setCartItems] = useState([]);

  const addProductToCart = (product) =>
    setCartItems((items) => [...items, { ...product, quantity: 1 }]);

  const removeProductFromCart = (productId) =>
    setCartItems((items) => items.filter((item) => item.id !== productId));

  const contextValue = {
    cartVisible,
    toggleCartVisible,
    cartItems,
    addProductToCart,
    removeProductFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};
