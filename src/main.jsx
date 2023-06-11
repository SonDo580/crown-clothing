import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { store } from "./redux/store";
import "./main.scss";
import App from "./App.jsx";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import { CartProvider } from "./contexts/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
