import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomeLayout from "./component/Layout/HomeLayout";
import Home from "./component/Pages/Home";
import WishList from "./component/Pages/WishList";
import Cart from "./component/Pages/Cart";
import Register from "./component/Pages/Register";
import SignIn from "./component/Pages/SignIn";
import Account from "./component/Pages/Account";
import MyReviews from "./component/Pages/MyReviews";
import MyOrders from "./component/Pages/MyOrders";
import ProductId from "./component/Product/ProductId";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Loading from "./component/Common/Loading";
import { userProfile } from "./redux/Client/auth.store";
const App = () => {
  const { user, loading, error } = useSelector((state) => state.auth);
  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch(userProfile());
    }
  }, [dispatch, user]);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <div className="z-30">
      {loading&&(
        <div className="z-40">
          <Loading/>
        </div>
      )}
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/signin"
            element={user ? <Navigate to={"/"} /> : <SignIn />}
            // element={user ? <Navigate to={"/"} /> : <SignIn />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <Register />}

            // element={user ? <Navigate to={"/"} /> : <Register />}
          />
          <Route
            path="/account"
            element={user ? <Account /> : <Navigate to={"/signin"} />}
          />
          <Route path="/myreviews" element={<MyReviews />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/product/:id" element={<ProductId />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
