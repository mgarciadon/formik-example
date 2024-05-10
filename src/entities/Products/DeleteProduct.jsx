import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { getProductById, deleteProduct } from "./product-Service";

const DeleteProduct = () => {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    setProductId(e.target.value);
  };

  const handleForSumbit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    getProductById(productId)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        console.error("Error al obtener el producto", err);
        setErrorMessage("Error al obtener el producto");
      })
      .finally(() => {
        setLoading(false);
      });

    const handleDeleteProduct = () => {
      setLoading(true);
      setErrorMessage("");
      setSuccessMessage("");

      deleteProduct(productId)
        .then(() => {
          setSuccessMessage("Producto eliminado con exito");
          setProduct(null);
        })
        .catch((err) => {
          console.error("Error al eliminar el producto", err);
          setErrorMessage("Error al eliminar el producto");
        })
        .finally(() => {
          setLoading(false);
        });
    };
  };
  return (
    <div>
      <Form onSubmit={handleForSumbit}>
        <FormGroup>
          <Label for="productId">Id del producto:</Label>
          <Input
            type="text"
            name="productId"
            id="productId"
            value={productId}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type="sumbit" color="primary">
          Buscar producto
        </Button>
      </Form>

      {loading && <p>Cargando producto...</p>}
      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}

      {product && (
        <div>
          <h3>Detalles del Producto:</h3>
          <p>ID: {product.id}</p>
          <p>Título: {product.title}</p>
          <p>Precio: {product.price}</p>
          <p>Categoría: {product.category}</p>
          <Button
            color="danger"
            onClick={handleDeleteProduct}
            disabled={loading}
          >
            Eliminar Producto
          </Button>
        </div>
      )}
    </div>
  );
};

export default DeleteProduct;
