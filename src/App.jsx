import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { fetchCategoryListInit } from "@/redux/category/categorySlice";
import { checkUserSession } from "@/redux/user/userSlice";
import {
  authenticationErrorSelector,
  initialCheckingSelector,
  authenticatingSelector,
} from "@/redux/user/userSelectors";

import Spinner from "@/common/Spinner";
import NavBar from "@/components/NavBar";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ShopSpecific from "@/pages/ShopSpecific";
import Authentication from "@/pages/Authentication";
import Checkout from "@/pages/Checkout";

export default function App() {
  const dispatch = useDispatch();
  const authenticationError = useSelector(authenticationErrorSelector);
  const initialChecking = useSelector(initialCheckingSelector);
  const authenticating = useSelector(authenticatingSelector);

  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(fetchCategoryListInit());
  }, [dispatch]);

  useEffect(() => {
    if (authenticationError) {
      toast.error(authenticationError.message);
    }
  }, [authenticationError]);

  if (initialChecking) {
    return null;
  }

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
      {authenticating && <Spinner fullScreen={true} />}
    </>
  );
}
