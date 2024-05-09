import { useState } from "react";
import { getProductById, updateProduct } from "./product-service";
import { Input, Button, FormGroup, Label } from "reactstrap";

const ProductUpdate = () => {
  const [product, setProduct] = useState(null);
  const [productId, setProductId] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });

  const searchProduct = async () => {
    try {
      const response = await getProductById(productId);
      setProduct({ ...response.data });
      setShowForm(true);
      console.log("Producto encontrado", product);
      alert("Producto encontrado");
    } catch (error) {
      console.error("Error al encontrar el producto por ID.", error);
    }
  };

  const handleUpdateProduct = async () => {
    if (!product) {
      console.error("No hay ningún producto para modificar.");
      return;
    }
    try {
      const response = await updateProduct(
        product.id,
        updatedProduct.title,
        updatedProduct.price,
        updatedProduct.description,
        updatedProduct.category
      );
      console.log("Producto modificado exitosamente", response.data);
      alert("Producto modificado exitosamente");
      setProduct(null);
      setShowForm(false);
      setUpdatedProduct({
        title: "",
        price: "",
        description: "",
        category: "",
      });
    } catch (error) {
      console.error("Error al modificar el producto.", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  return (
    <div>
      <Input
        placeholder="Ingrese el ID"
        onChange={(e) => setProductId(e.target.value)}
      />
      <Button color="primary" onClick={searchProduct}>
        Buscar
      </Button>
      {showForm && (
        <div>
          <FormGroup>
            <Label for="title">Título</Label>
            <Input
              type="text"
              name="title"
              id="title"
              value={updatedProduct.title}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">Precio</Label>
            <Input
              type="text"
              name="price"
              id="price"
              value={updatedProduct.price}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Descripción</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              value={updatedProduct.description}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="category">Categoría</Label>
            <Input
              type="text"
              name="category"
              id="category"
              value={updatedProduct.category}
              onChange={handleInputChange}
            />
          </FormGroup>
          <Button color="secondary" onClick={handleUpdateProduct}>
            Modificar Producto
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductUpdate;
