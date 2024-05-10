import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginForm } from "./entities/Login/LoginForm";
import ProductsList from "./entities/Products/ProductsList";
import ProductById from "./entities/Products/ProductById";
import CreateProduct from "./entities/Products/CreateProduct";

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
            </Routes>
          </Router>

          {/* <ProductsList /> */}
        </div>
      </div>
    </>
  );
};

export default App;
