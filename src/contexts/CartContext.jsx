import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCartVisible = () => setCartVisible((visible) => !visible);

  const [cartItems, setCartItems] = useState([]);

  const addProductToCart = (product) =>
    setCartItems((items) => [...items, { ...product, quantity: 1 }]);

  const removeProductFromCart = (id) =>
    setCartItems((items) => items.filter((item) => item.id !== id));

  const incrementItemQuantity = (id) =>
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

  const decrementItemQuantity = (id) =>
    setCartItems((items) =>
      items.map((item) =>
        item.id !== id || item.quantity === 1
          ? item
          : { ...item, quantity: item.quantity - 1 }
      )
    );

  const setItemQuantity = ({ id, quantity }) =>
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );

  const contextValue = {
    cartVisible,
    toggleCartVisible,
    cartItems,
    addProductToCart,
    removeProductFromCart,
    incrementItemQuantity,
    decrementItemQuantity,
    setItemQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};
