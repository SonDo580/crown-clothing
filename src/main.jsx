import React from "react";
import ReactDOM from "react-dom/client";

import "./main.scss";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import { UserProvider } from "./contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
