import "bootstrap/dist/css/bootstrap.min.css";
import { LoginForm } from "./entities/Login/LoginForm";
import { ProductOptions } from "./entities/Products/ProductOptions";

const App = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div style={{ width: '300px' }}>
          <LoginForm />
        </div> 
      </div>
      <ProductOptions />
    </>
  );
}

export default App;
