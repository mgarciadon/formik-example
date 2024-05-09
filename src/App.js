import "bootstrap/dist/css/bootstrap.min.css";
import { LoginForm } from "./entities/Login/LoginForm";
import ProductList from "./entities/Products/ProductsLis";
import CreateProduct from "./entities/Products/CreateProduct";

const App = () => {
  return (
    <>
      <div>
        <div style={{ width: '300px' }}>
          <LoginForm />
          
        </div>
        <ProductList />
        <CreateProduct></CreateProduct>
      </div>
    </>
  );
}

export default App;
