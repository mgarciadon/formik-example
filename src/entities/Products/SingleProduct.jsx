import React, { useState } from "react";
import { getProductAPI } from "../../services/productServices";

const SingleProduct = () => {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(undefined);

  const productIdHandler = (e) => {
    setProductId(e.target.value);
  };

  const getProductHandler = async () => {
    try {
      const productResult = await getProductAPI(productId);
      setProduct(productResult);
    } catch (error) {
      console.error("Error getting product:", error);
    }
  };

  return (
    <div>
      <label htmlFor="productId">ID del producto a buscar:</label>
      <input
        id="productId"
        onChange={productIdHandler}
        type="text"
        placeholder="Ingrese ID..."
        value={productId}
      />
      <button onClick={getProductHandler}>Buscar producto</button>
      {product ? (
        <div>
          <p>Título: {product.title}</p>
          <p>Precio: {product.price}</p>
          <p>Descripción: {product.description}</p>
        </div>
      ) : (
        <p>No existe el producto</p>
      )}
    </div>
  );
};

export default SingleProduct;
