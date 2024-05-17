import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProductsList from "./entities/Products/ProductsList";
import ProductDetail from "./entities/Products/ProductDetail";
import ProductForm from "./entities/Products/ProductForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/products" element={<ProductsList />} />
        <Route exact path="/products/new" element={<ProductForm />} />
        <Route exact path="/products/edit/:id" element={<ProductForm />} />
        <Route exact path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
