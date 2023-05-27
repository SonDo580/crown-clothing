import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShopSpecific from "./pages/ShopSpecific";
import Authentication from "./pages/Authentication";
import Checkout from "./pages/Checkout";

export default function App() {
  return (
    <>
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop">
            <Route index element={<Shop />} />
            <Route path=":category" element={<ShopSpecific />} />
          </Route>
          <Route path="/auth" element={<Authentication />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>

      <ToastContainer />
    </>
  );
}
