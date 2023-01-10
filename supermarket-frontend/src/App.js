import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Checkout from "./components/checkout/Checkout";
import Cart from "./components/cart/Cart";
import Categories from "./components/categories/Categories";

function App() {
  return (
    <div>
        <ResponsiveAppBar id="appBar"/>
        <Cart />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories/:category" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
