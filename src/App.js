
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {LoginForm} from "./entities/Login/LoginForm";
import NewProduct from "./entities/Products/NewProduct";
import ProductsList from "./entities/Products/ProductsList";

const App = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div style={{ width: '300px', margin: '0 10px' }}>
        <LoginForm />
      </div>
      <div style={{ width: '300px', margin: '0 10px' }}>
        <NewProduct />
      </div>
      <div style={{ width: '300px', margin: '0 10px' }}>
        <ProductsList />
      </div>
    </div>
  );
}

export default App;
