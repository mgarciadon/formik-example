import React from "react";
import { deleteProduct } from "./product-service";

const DeleteProduct = ({
  setProducts,
  setSelectedProduct,
  products,
  productId,
}) => {
  const handleDeleteProductById = (id) => {
    deleteProduct(id)
      .then(() => {
        setProducts(products.filter((product) => product.id !== id));
        setSelectedProduct("");
        console.log("Producto eliminado con exito " + id);
      })
      .catch((error) => {
        console.log("Error al eliminar producto por ID", error);
      });
  };
  return (
    <div>
      <button onClick={() => handleDeleteProductById(productId)}>Borrar</button>
    </div>
  );
};

export default DeleteProduct;
