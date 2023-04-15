import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Products from "../components/Products";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products/>}/>
    </Routes>
  );
}
