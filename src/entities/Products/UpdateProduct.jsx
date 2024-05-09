import React, { useState } from "react";
import { updateProductAPI } from "../../services/productServices";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const UpdateProduct = ({ updateProduct }) => {
  const [productId, setProductId] = useState(0);
  const [updateProductId, setUpdateProductId] = useState(0);
  const [updateProductTitle, setUpdateProductTitle] = useState("");
  const [updateProductPrice, setUpdateProductPrice] = useState(0);
  const [updateProductDescription, setUpdateProductDescription] = useState("");
  const [updateProductImage, setUpdateProductImage] = useState("");
  const [updateProductCategory, setUpdateProductCategory] = useState("");

  const productIdHandler = (e) => {
    setProductId(e.target.value);
  };

  const productTitleHandler = (e) => {
    setUpdateProductTitle(e.target.value);
  };
  const productPriceHandler = (e) => {
    setUpdateProductPrice(e.target.value);
  };
  const productDescriptionHandler = (e) => {
    setUpdateProductDescription(e.target.value);
  };
  const productImageHandler = (e) => {
    setUpdateProductImage(e.target.value);
  };
  const productCategoryHandler = (e) => {
    setUpdateProductCategory(e.target.value);
  };

  const updateProductHandler = async () => {
    const request = {
      title: updateProductTitle,
      price: updateProductPrice,
      description: updateProductDescription,
      image: updateProductImage,
      category: updateProductCategory,
    };
    const updatedProduct = await updateProductAPI(productId, request);
    setUpdateProductId(updatedProduct.id);
    const productUpdate = { ...request, id: uuidv4() };
    updateProduct(productUpdate);
  };

  return (
    <div>
      <p>Ingrese datos del nuevo producto:</p>
      <label htmlFor="productId">ID:</label>
      <input
        type="number"
        id="productId"
        value={productId}
        onChange={productIdHandler}
      />
      <label htmlFor="createProductTitle">Título:</label>
      <input
        type="text"
        id="createProductTitle"
        placeholder="Ingrese título..."
        value={updateProductTitle}
        onChange={productTitleHandler}
      />
      <label htmlFor="createProductPrice">Precio:</label>
      <input
        type="number"
        id="createProductPrice"
        placeholder="Ingrese precio..."
        value={updateProductPrice}
        onChange={productPriceHandler}
      />
      <label htmlFor="createProductDescription">Descripción:</label>
      <input
        type="text"
        id="createProductDescription"
        placeholder="Ingrese descripción..."
        value={updateProductDescription}
        onChange={productDescriptionHandler}
      />
      <label htmlFor="createProductImage">Link de imagen:</label>
      <input
        type="text"
        id="createProductImage"
        placeholder="Ingrese link de imagen..."
        value={updateProductImage}
        onChange={productImageHandler}
      />
      <label htmlFor="createProductCategory">Categoría:</label>
      <input
        type="text"
        id="createProductCategory"
        placeholder="Ingrese categoría..."
        value={updateProductCategory}
        onChange={productCategoryHandler}
      />
      <button onClick={updateProductHandler}>Actualizar producto</button>
      {updateProductId !== 0 ? (
        <p>Producto actualizado (ID {updateProductId}).</p>
      ) : (
        <p>Ningún producto actualizado.</p>
      )}
    </div>
  );
};

export default UpdateProduct;
