import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginForm } from "./entities/Login/LoginForm";
import ProductsList from "./entities/Products/ProductsList";
import ProductById from "./entities/Products/ProductById";
import CreateProduct from "./entities/Products/CreateProduct";
import DeleteProduct from "./entities/Products/DeleteProduct";
import UpdateProduct from "./entities/Products/UpdateProduct";

const App = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div style={{ width: "300px" }}>
          <Router>
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/products" element={<ProductsList />} />
              <Route path="/productById" element={<ProductById />} />
              <Route path="/createProduct" element={<CreateProduct />} />
              <Route path="/deleteProduct" element={<DeleteProduct />} />
              <Route path="/updateProduct" element={<UpdateProduct />} />

            </Routes>
          </Router>

          {/* <ProductsList /> */}
        </div>
      </div>
    </>
  );
};

export default App;
