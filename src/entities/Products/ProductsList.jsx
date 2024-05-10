import React, { useState, useEffect } from "react";
import { Button, Table } from "reactstrap";
import {
  getAllProducts,
  addProduct,
  deleteProduct,
} from "./Product-service";
import { useFormik } from "formik";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      title: "",
      price: "",
      category: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const newProduct = {
          title: values.title,
          price: values.price,
          category: values.category,
        };
        await addProduct(newProduct);

        const updatedProducts = await getAllProducts();
        setProducts(updatedProducts.data);
        console.log("Usuario Agregado");
        resetForm();
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
  });

  useEffect(() => {
    const allProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.data);
      } catch (e) {
        console.error("Error trayendo los productos", e);
      }
    };
    allProducts();
  }, []);

  const handleEditProduct = async (productId) => {
    console.log("Editando producto con ID:", productId);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId);
      const updatedProducts = await getAllProducts();
      setProducts(updatedProducts.data);
      console.log("Producto eliminado");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2 mr-sm-2"
          onChange={handleChange}
          placeholder="Producto"
          type="text"
          name="title"
        ></input>
        <input
          className="form-control mb-2 mr-sm-2"
          onChange={handleChange}
          placeholder="Precio"
          type="number"
          name="price"
        ></input>
        <input
          className="form-control mb-2 mr-sm-2"
          onChange={handleChange}
          placeholder="Categoria"
          type="text"
          name="category"
        ></input>
        <Button type="submit" color="primary" className="mb-2">
          Agregar Producto
        </Button>
      </form>

      <Table responsive>
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
                  color="info"
                  className="mr-2"
                  onClick={() => handleEditProduct(product.id)}
                >
                  Editar
                </Button>
                <Button
                  color="danger"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Borrar
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
