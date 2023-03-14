import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
