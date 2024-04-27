import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./entities/Login/LoginForm";
import ProductList from "./entities/Products/ProductsList";
import ProductListByLimit from "./entities/Products/ProductListByLimit";
import ProductListById from "./entities/Products/ProductListById";
import CreateProduct from "./entities/Products/CreateProduct";
import UpdateProduct from "./entities/Products/UpdateProduct";
import DeleteProduct from "./entities/Products/DeleteProduct";

const App = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div style={{ width: "300px" }}>{/* <LoginForm /> */}</div>
      <div>{/* <ProductList /> */}</div>
      <div>{/*<ProductListByLimit />*/}</div>
      <div>{/*<ProductListById />*/}</div>
      <div>{/*<CreateProduct />*/}</div>
      <div>{/*<UpdateProduct />*/}</div>
      <div>{<DeleteProduct />}</div>
    </div>
  );
};

export default App;
