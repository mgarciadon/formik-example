import "bootstrap/dist/css/bootstrap.min.css";
import { LoginForm } from "./entities/Login/LoginForm";
import ProductList from "./entities/Products/ProductsList";
import { FormProduct } from "./entities/Products/FormProduct";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Router>
        <Routes>
        <Route path="/" element={<LoginForm />}/>
        <Route path="/product/create-product" element={<FormProduct />} />
        <Route path= "/product" element={<ProductList/>}/>
        <Route path = "/product/edit-product/:id" element={<FormProduct/>} />
        </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
