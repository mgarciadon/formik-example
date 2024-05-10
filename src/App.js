
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginForm } from "./entities/Login/LoginForm";
import ProductList from "./entities/Products/ProductsLis";
import AddProduct from "./entities/Products/AddProduct";
import UpdateProduct from "./entities/Products/UpdateProduct";
import DeleteProduct from "./entities/Products/DeleteProduct";
import GetProductById from "./entities/Products/GetProductById";

const App = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/add" element={<AddProduct />} />
          <Route path="/product/edit" element={<UpdateProduct />} />
          <Route path="/product/delete" element={<DeleteProduct />} />
          <Route path="/product/search" element={<GetProductById/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

