import "bootstrap/dist/css/bootstrap.min.css";
import { LoginForm } from "./entities/Login/LoginForm";
import ProductsList from "./entities/Products/ProductsList";

const App = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" >
        <div>
         {/*<LoginForm />*/}
        </div>
        {<ProductsList />}
      </div>
    </>
  );
}

export default App;
