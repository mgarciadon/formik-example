import "bootstrap/dist/css/bootstrap.min.css";
// import { LoginForm } from "./entities/Login/LoginForm";
import ProductList from "./entities/Products/ProductsLis";

const App = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div style={{ width: "300px" }}>{/* <LoginForm /> */}</div>
        <div style={{ height: "80%", width: "60%" }}>
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default App;
