import React, { useState } from "react";
import { Button } from "reactstrap";
import { getProductById, deleteProductById } from "./product-service";
import StyledInput from "../../shared/Input";

const ProductDelete = () => {
  const [product, setProduct] = useState(null);
  const [productId, setProductId] = useState("");

  const searchProduct = async () => {
    try {
      const response = await getProductById(productId);
      setProduct(response.data);
      console.log("Producto encontrado:", response.data);
      alert("Producto encontrado.");
    } catch (error) {
      console.error("Error al buscar el producto por ID:", error);
    }
  };

  const handleDeleteProduct = async () => {
    if (!product) {
      console.error("No hay ningún producto para eliminar.");
      return;
    }

    try {
      const response = await deleteProductById(product.id);
      console.log(response);
      console.log("Producto eliminado exitosamente.");
      alert("Producto eliminado exitosamente.");
      setProduct(null);
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  return (
    <div>
      <StyledInput
        placeholder="ID del Producto"
        type="text"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <Button color="primary" onClick={searchProduct}>
        Buscar
      </Button>
      <Button color="danger" onClick={handleDeleteProduct}>
        Eliminar Producto
      </Button>
    </div>
  );
};

export default ProductDelete;
