import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./entities/Login/LoginForm";
import ProductList from "./entities/Products/ProductsList";
import FormProduct from "./entities/Products/FormProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div style={{ width: '300px' }}>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/product/create-product" element={<FormProduct />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/product/edit-product/:id" element={<FormProduct />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
