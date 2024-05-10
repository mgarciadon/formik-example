import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { createProduct } from "./product-Service";

const CreateProduct = () => {
  const [loading, setLoading] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: 0,
    category: "",
  });

  const handleInputChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleForSumbit = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      createProduct(newProduct);
      setNewProduct({
        title: "",
        price: 0,
        category: "",
      });
      setLoading(false);
      console.log(newProduct);
      alert("Producto creado con exito");
    } catch (err) {
      alert("error al crear el producto", err);
      setLoading(false);
    }
  };

  return (
    <div>
      <Form onSubmit={handleForSumbit}>
        <FormGroup>
          <Label for="title">Titulo del producto:</Label>
          <Input
            type="text"
            name="title"
            id="title"
            value={newProduct.title}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Precio del producto:</Label>
          <Input
            type="number"
            name="price"
            id="price"
            value={newProduct.price}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="category">Categoria:</Label>
          <Input
            type="text"
            name="category"
            id="category"
            value={newProduct.category}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type="sumbit" color="primary">
          Crear producto
        </Button>
      </Form>

      {loading && <p>Creando producto...</p>}
    </div>
  );
};
export default CreateProduct;
