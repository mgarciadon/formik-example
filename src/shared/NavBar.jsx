import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/product" className="navbar-brand">
          Productos
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Button
                className="btn btn-link nav-link"
                onClick={() => handleNavigate("/product")}
              >
                Llamada API
              </Button>
            </li>
            <li className="nav-item">
              <Button
                className="btn btn-link nav-link"
                onClick={() => handleNavigate("/product/create")}
              >
                Crear Producto
              </Button>
            </li>
            <li className="nav-item">
              <Button
                className="btn btn-link nav-link"
                onClick={() => handleNavigate("/product/delete")}
              >
                Eliminar Producto
              </Button>
            </li>
            <li className="nav-item">
              <Button
                className="btn btn-link nav-link"
                onClick={() => handleNavigate("/product/update")}
              >
                Editar Producto
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
