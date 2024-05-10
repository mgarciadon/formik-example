import "bootstrap/dist/css/bootstrap.min.css";
import { LoginForm } from "./entities/Login/LoginForm";
import ProductList from "./entities/Products/ProductsLis";
import AddProduct from "./entities/Products/AddProduct";
import SearchProduct from "./entities/Products/SearchProduct";


const App = () => {
  return (
    <>
      <div className="justify-content-center align-items-center" >
      <LoginForm />
        <ProductList/>
        <AddProduct/>
        <SearchProduct/>
     
      </div>
   
    </>
  );
}

export default App;
