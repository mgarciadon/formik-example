import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./entities/Login/LoginForm";
import ProductList from "./entities/products/ProductsList";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";
import { Button } from "reactstrap";

const App = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  console.log('isLoggedIn:', isLoggedIn);

  return (
    <>
      {!isLoggedIn ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <div style={{ width: '300px' }}>
            <LoginForm />
          </div>
        </div>
      ) : (
        <>
        <ProductList />
        <Button onClick={logout} color="primary">Log Out</Button>
        </>
      )}
    </>
  );
};

export default App;
