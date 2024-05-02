import React, { useState } from "react";
import { deleteProducts } from "./product-service";

const DeleteProduct = () => {
  const [message, setMessage] = useState("");

  const handleDelete = () => {
    deleteProducts(1)
      .then(() => {
        setMessage("Producto eliminado");
      })
      .catch((error) => {
        console.error("Error al eliminar el producto:", error);
        setMessage("Error al eliminar el producto");
      });
  };

  return (
    <div>
      <button onClick={handleDelete}>Eliminar Producto</button>
      <div>{message}</div>
    </div>
  );
};

export default DeleteProduct;
