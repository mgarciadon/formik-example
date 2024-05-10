import React, { useState } from "react";
import { getProductById } from "./product-service";

const GetProductById = ({ selectedProduct, setSelectedProduct }) => {
  const [searchId, setSearchId] = useState("");
  const handleProductById = async (id) => {
    getProductById(id)
      .then((response) => {
        setSelectedProduct(response.data);
      })
      .catch((error) => {
        console.log("Error al obtener producto por ID", error);
      });
  };
  return (
    <div>
      <h2>Buscar Producto por ID</h2>
      <input
        type="text"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        placeholder="ID del producto"
      />
      <button onClick={() => handleProductById(searchId)}>Buscar</button>
      {selectedProduct && (
        <div>
          <h2>PRODUCTO DETALLADO</h2>
          <p>ID: {selectedProduct.id}</p>
          <p>Titulo: {selectedProduct.title}</p>
          <p>Precio: {selectedProduct.price}</p>
          <p>Categoria: {selectedProduct.category}</p>
          <button
            onClick={() => {
              setSelectedProduct("");
              setSearchId("");
            }}
          >
            Volver a lista
          </button>{" "}
        </div>
      )}
    </div>
  );
};

export default GetProductById;