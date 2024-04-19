import "bootstrap/dist/css/bootstrap.min.css";
//import { LoginForm } from "./entities/Login/LoginForm";
import { RegisterForm } from "./entities/Login/RegisterForm";

const App = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div style={{ width: '300px' }}>
          
          <RegisterForm />
        </div>
      </div>
    </>
  );
}

export default App;
