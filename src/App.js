import "bootstrap/dist/css/bootstrap.min.css";
import { LoginForm } from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

const App = () => {
  return (
    <>
      {
        //<LoginForm />
        <RegisterForm />
      }
    </>
  );
};

export default App;
