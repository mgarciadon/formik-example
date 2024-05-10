import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./entities/Products/ProductList";
import LoginForm from "./entities/Login/LoginForm";

const App = () => {
  return (
    <>
    <div><LoginForm /></div>
    <h1 className="d-flex justify-content-center align-items-center">Lista de productos</h1>
    <div><ProductList /> </div>
      
    </>
  );
}

export default App;
