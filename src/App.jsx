import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { fetchCategoryListInit } from "@/redux/category/categorySlice";
import { checkUserSession } from "@/redux/user/userSlice";
import {
  authenticationErrorSelector,
  initialCheckingSelector,
} from "@/redux/user/userSelectors";

import Spinner from "@/common/Spinner";
import NavBar from "@/components/NavBar";

const Home = lazy(() => import("@/pages/Home"));
const Shop = lazy(() => import("@/pages/Shop"));
const ShopSpecific = lazy(() => import("@/pages/ShopSpecific"));
const Authentication = lazy(() => import("@/pages/Authentication"));
const Checkout = lazy(() => import("@/pages/Checkout"));

export default function App() {
  const dispatch = useDispatch();
  const authenticationError = useSelector(authenticationErrorSelector);
  const initialChecking = useSelector(initialCheckingSelector);

  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(fetchCategoryListInit());
  }, []);

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
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop">
              <Route index element={<Shop />} />
              <Route path=":category" element={<ShopSpecific />} />
            </Route>
            <Route path="/auth" element={<Authentication />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Suspense>
      </main>

      <ToastContainer />
    </>
  );
}
