import React, { useState } from "react";
import { postProductAPI } from "../../services/productServices";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const CreateProduct = ({ addProduct }) => {
  const [newProductId, setNewProductId] = useState(0);
  const [newProductTitle, setNewProductTitle] = useState("");
  const [newProductPrice, setNewProductPrice] = useState(0);
  const [newProductDescription, setNewProductDescription] = useState("");
  const [newProductImage, setNewProductImage] = useState("");
  const [newProductCategory, setNewProductCategory] = useState("");

  const productTitleHandler = (e) => {
    setNewProductTitle(e.target.value);
  };
  const productPriceHandler = (e) => {
    setNewProductPrice(e.target.value);
  };
  const productDescriptionHandler = (e) => {
    setNewProductDescription(e.target.value);
  };
  const productImageHandler = (e) => {
    setNewProductImage(e.target.value);
  };
  const productCategoryHandler = (e) => {
    setNewProductCategory(e.target.value);
  };

  const createProduct = async () => {
    const request = {
      title: newProductTitle,
      price: newProductPrice,
      description: newProductDescription,
      image: newProductImage,
      category: newProductCategory,
    };
    const createdProduct = await postProductAPI(request);
    setNewProductId(createdProduct.id);
    const newProduct = { ...request, id: uuidv4() };
    addProduct(newProduct);
  };

  return (
    <div>
      <p>Ingrese datos del nuevo producto:</p>
      <label htmlFor="createProductTitle">Título:</label>
      <input
        type="text"
        id="createProductTitle"
        placeholder="Ingrese título..."
        value={newProductTitle}
        onChange={productTitleHandler}
      />
      <label htmlFor="createProductPrice">Precio:</label>
      <input
        type="number"
        id="createProductPrice"
        placeholder="Ingrese precio..."
        value={newProductPrice}
        onChange={productPriceHandler}
      />
      <label htmlFor="createProductDescription">Descripción:</label>
      <input
        type="text"
        id="createProductDescription"
        placeholder="Ingrese descripción..."
        value={newProductDescription}
        onChange={productDescriptionHandler}
      />
      <label htmlFor="createProductImage">Link de imagen:</label>
      <input
        type="text"
        id="createProductImage"
        placeholder="Ingrese link de imagen..."
        value={newProductImage}
        onChange={productImageHandler}
      />
      <label htmlFor="createProductCategory">Categoría:</label>
      <input
        type="text"
        id="createProductCategory"
        placeholder="Ingrese categoría..."
        value={newProductCategory}
        onChange={productCategoryHandler}
      />
      <button onClick={createProduct}>Crear producto</button>
      {newProductId !== 0 ? (
        <p>Producto creado con el ID {newProductId}.</p>
      ) : (
        <p>Ningún producto creado.</p>
      )}
    </div>
  );
};

export default CreateProduct;
