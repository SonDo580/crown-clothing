import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { onAuthStateChangedListener } from "./utils/firebase.utils";
import { setCurrentUser } from "./redux/user/userActions";
import { fetchCategoryListThunk } from "./redux/category/categoryActions";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShopSpecific from "./pages/ShopSpecific";
import Authentication from "./pages/Authentication";
import Checkout from "./pages/Checkout";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) =>
      dispatch(setCurrentUser(user))
    );

    return unsubscribe;
  }, []);

  useEffect(() => {
    dispatch(fetchCategoryListThunk());
  }, []);

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
