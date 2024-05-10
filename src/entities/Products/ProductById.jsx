import React, { useState } from "react";
import { Table, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { getProductById } from "./product-Service";

const ProductById = () => {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setProductId(e.target.value);
  };

  const handleForSumbit = (e) => {
    e.preventDefault();
    if (productId.trim() !== "") {
      setLoading(true);
      getProductById(productId)
        .then((response) => {
          setProduct(response.data);
          setLoading(false);
        })
        .catch((err) => {
          alert("error al obtener el producto", err);
          setLoading(false);
        });
    }
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

      {product && (
        <Table responsive>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody>
            <tr key={product.id}>
              <th>{product.title}</th>
              <th>{product.price}</th>
              <th>{product.category}</th>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ProductById;
