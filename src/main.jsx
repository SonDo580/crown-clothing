import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import "./main.scss";
import App from "./App.jsx";
import { UserProvider } from "./contexts/UserContext";
import { CategoriesProvider } from "./contexts/CategoriesProvider";
import { CartProvider } from "./contexts/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
