import React from "react";
import { useState } from "react";
import { getProductById } from "./product_service";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Form,
  Input,
} from "reactstrap";

const SearchProduct = () => {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await getProductById(productId);
      setProduct(response.data);
      setNotFound(false);
    } catch (error) {
      setProduct(null);
      setNotFound(true);
    }
  };

  return (
    <Card color="dark" className="p-5 mt-3 d-flex">
      <Form className="d-flex">
        <Input
          type="text"
          name="productId"
          id="productId"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          placeholder="Ingrese la ID del producto"
        />

        <Button color="dark" className="ml-2" onClick={handleSearch}>
          Buscar
        </Button>
      </Form>

      {notFound && (
        <Alert color="warning">
          El producto con el ID {productId} no fue encontrado.
        </Alert>
      )}

      <Card className="mt-2">
        <CardBody>
          {product && (
            <>
              <CardTitle>{product.title}</CardTitle>
              <CardText>Precio: {product.price}</CardText>
              <CardText>Categoría: {product.category}</CardText>
              <CardText>Descripción: {product.description}</CardText>
            </>
          )}
        </CardBody>
      </Card>
    </Card>
  );
};

export default SearchProduct;
