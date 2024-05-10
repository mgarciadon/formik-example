import { useEffect } from "react";
import { Button, Table } from "reactstrap";
import { deleteProduct, getAllProducts } from "./product-service";

const ProductList = ({
  products,
  setProducts,
  setFormType,
  setFormProduct,
  showOnEdit,
}) => {
  useEffect(() => {
    getAllProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = async (id) =>
    await deleteProduct(id)
      .then(setProducts((prev) => prev.filter((product) => product.id !== id)))
      .catch((error) => console.log(error));

  const handleEdit = (product) => {
    setFormType("edit");
    setFormProduct(product);
    showOnEdit();
  };

  return (
    <Table responsive bordered>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Categoría</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>
              <Button
                className="mx-1"
                color="primary"
                onClick={() => handleEdit(product)}
              >
                Editar
              </Button>
              <Button
                className="mx-1"
                color="danger"
                onClick={() => handleDelete(product.id)}
              >
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductList;
