import { useEffect, useState } from "react";
import { Button, Card, Col, FormGroup, Input, Label, Table } from "reactstrap";
import { getAllProducts, deleteProduct } from "./product_service";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .finally(() => console.log("termino"));
  }, []);

  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId);
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <Table responsive dark striped size="sm" borderless className="mt-3">
        <thead>
          <tr>
            <th>Producto </th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>
                <Button color="danger" onClick={() => handleDelete(product.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
