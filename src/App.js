import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./entities/Products/ProductsList";

const App = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div style={{ width: '300px' }}>
          {/*<LoginForm />*/}
        </div>
        <h1>Lista de productos</h1>
         <ProductList /> 
      </div>
    </>
  );
}

export default App;
