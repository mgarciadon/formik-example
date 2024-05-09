import React, { useState } from "react";
import { deleteProductAPI } from "../../services/productServices";

const DeleteProduct = ({ deleteProduct }) => {
  const [productId, setProductId] = useState("");
  const [deletedProductId, setDeletedProductId] = useState(null);

  const productIdHandler = (e) => {
    setProductId(e.target.value);
  };

  const deleteProductHandler = async () => {
    try {
      const productResult = await deleteProductAPI(productId);
      setDeletedProductId(productResult.id);
      deleteProduct(productResult.id);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <label htmlFor="productId">ID del producto a eliminar:</label>
      <input
        id="productId"
        onChange={productIdHandler}
        type="text"
        placeholder="Ingrese ID..."
        value={productId}
      />
      <button onClick={deleteProductHandler}>Eliminar producto</button>
      {deletedProductId ? (
        <p>Se ha borrado exitosamente el producto con ID {deletedProductId}</p>
      ) : (
        <p>No se borró ningún producto</p>
      )}
    </div>
  );
};

export default DeleteProduct;
