import "bootstrap/dist/css/bootstrap.min.css";
import { LoginForm } from "./entities/Login/LoginForm";
import ProductList from "./entities/products/ProductsList";

const App = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div style={{ width: '300px' }}>
          <LoginForm />
        </div>
        {/* <ProductList /> */}
      </div>
    </>
  );
}

export default App;
