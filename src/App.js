import "bootstrap/dist/css/bootstrap.min.css";
import { LoginForm } from "./entities/Login/LoginForm";
import ProductById from "./entities/Products/getProductById";
import CreateProduct from "./entities/Products/createProduct";
import ProductList from "./entities/Products/ProductsList";
import DeleteProduct from "./entities/Products/DeleteProduct";

const App = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div style={{ width: "300px" }}>
          <LoginForm />
        </div>
        <div style={{ marginLeft: "20px" }}>
          <div style={{ marginBottom: "20px" }}>
            <ProductById />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <ProductList />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <CreateProduct />
          </div>
          <div>
            <DeleteProduct />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
