import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import { getAllProducts } from "./product-service";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .finally(() => console.log("Final"));
  }, []);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Cargando productos...</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductsList;
