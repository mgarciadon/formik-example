import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import { getProductById } from "./product-service";

function ProductById() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const formHandler = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    getProductById(20)
      .then((response) => {
        setProducts(response.data);
      })
      .finally(console.log("termino"));
  }, []);

  return (
    <div>
      <button color="primary" onClick={formHandler}>
        {showForm ? "Ocultar formulario" : "Traer producto por id"}
      </button>
      {showForm && (
        <Table responsive>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Categoría</th>
            </tr>
          </thead>
          <tbody>
            <tr key={products.id}>
              <td>{products.title}</td>
              <td>{products.price}</td>
              <td>{products.category}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default ProductById;
