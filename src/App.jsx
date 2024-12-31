import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Login from "./components/Login/Login";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Signup from "./components/Signup/Signup";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cartitem" element={<Cart />} />
      <Route path="/order" element={<PlaceOrder />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
