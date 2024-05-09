import React, { useState } from "react";
import { addNewProduct } from "./product-service";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Container,
  Row,
  Col,
  Input,
} from "reactstrap";

function ProductCreate() {
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    category: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addNewProduct(product);
      setProduct({
        title: "",
        price: "",
        category: "",
        description: "",
        image: "",
      });
      console.log(product);
      alert("Producto creado exitosamente.");
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="title">Titulo</Label>
                <Input
                  placeholder="Titulo"
                  type="text"
                  name="title"
                  value={product.title}
                  onChange={handleChange}
                  className="form-control"
                  required="Rellenar"
                />
              </FormGroup>

              <FormGroup>
                <Label for="price">Precio</Label>
                <Input
                  placeholder="Precio"
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  className="form-control"
                  required="Rellenar"
                />
              </FormGroup>

              <FormGroup>
                <Label for="category">Categoría</Label>
                <Input
                  placeholder="Categoría"
                  type="text"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  className="form-control"
                  required="Rellenar"
                />
              </FormGroup>

              <FormGroup>
                <Label for="description">Descripción</Label>
                <Input
                  placeholder="Descripción"
                  type="text"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  className="form-control"
                  required="Rellenar"
                />
              </FormGroup>

              <FormGroup>
                <Label for="image">Imagen</Label>
                <Input
                  placeholder="URL de la imagen"
                  type="text"
                  name="image"
                  value={product.image}
                  onChange={handleChange}
                  className="form-control"
                  required="Rellenar"
                />
              </FormGroup>

              <Button type="submit" color="primary">
                Crear producto
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductCreate;
