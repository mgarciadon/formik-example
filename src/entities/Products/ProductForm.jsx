import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import {
  createNewProduct,
  getProductById,
  updateProduct,
} from "./product-service";

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    if (id) {
      getProductById(id).then((response) => {
        setProduct(response.data);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateProduct(
        id,
        product.title,
        product.price,
        product.description,
        product.category
      ).then(() => {
        navigate("/products");
      });
    } else {
      createNewProduct(
        product.title,
        product.price,
        product.description,
        product.category
      ).then(() => {
        navigate("/products");
      });
    }
  };

  return (
    <div>
      <h2>{id ? "Edit Product" : "Create Product"}</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            value={product.title}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            type="number"
            name="price"
            id="price"
            value={product.price}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            value={product.description}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="category">Category</Label>
          <Input
            type="text"
            name="category"
            id="category"
            value={product.category}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit" color="primary">
          {id ? "Update" : "Create"}
        </Button>
      </Form>
    </div>
  );
};

export default ProductForm;
