import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Authentication from "./pages/Authentication";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<Authentication />} />
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
}
