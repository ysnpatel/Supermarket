import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Home from "./components/home/Home";
import Product from "./components/product/Product";
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
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories/:category" element={<Categories />} />
      </Routes>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
