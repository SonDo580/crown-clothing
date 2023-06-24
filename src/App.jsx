import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { fetchCategoryListInit } from "./redux/category/categoryActions";
import { checkUserSession } from "./redux/user/userActions";
import { authenticationErrorSelector } from "./redux/user/userSelectors";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShopSpecific from "./pages/ShopSpecific";
import Authentication from "./pages/Authentication";
import Checkout from "./pages/Checkout";

export default function App() {
  const dispatch = useDispatch();
  const authenticationError = useSelector(authenticationErrorSelector);

  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(fetchCategoryListInit());
  }, []);

  useEffect(() => {
    if (authenticationError) {
      toast.error(authenticationError.message);
    }
  }, [authenticationError]);

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
