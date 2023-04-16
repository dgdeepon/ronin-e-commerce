import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Products from "../components/Products";
import SingleProduct from "../components/SingleProduct";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<SingleProduct/>}/>
    </Routes>
  );
}
