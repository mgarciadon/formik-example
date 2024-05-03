import React, { useState, useEffect } from "react";
import { Button, FormGroup, Table } from "reactstrap";
import { deleteProductById, getAllProducts, getProductById } from "./ProductServices";
import StyledInput from "../../shared/Input";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .finally(console.log("termino"));
  }, []);

  const deleteProduct=async(id) =>{
    const response = await deleteProductById(id)
    console.log(response)
  }
  const searchProduct = async (idProduct) => {
    try {
      const response = await getProductById(idProduct);
      console.log(response.data);
    } catch (error) {
      console.error("Error al buscar el producto por ID:", error);
    }
  };
  const formik = useFormik({
    initialValues: {
      idProduct: "",
    },
    onSubmit: (values) => {
      searchProduct(values.idProduct);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <StyledInput
            placeholder="idProduct"
            type="idProduct"
            className="form-control"
            value={formik.values.idProduct}
            onChange={formik.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Button color="primary" type="submit">
            Buscar
          </Button>
        </FormGroup>
        <Link to="/product/create-product">
        <Button variant="light" className="button-admin">
          + Nuevo producto
        </Button>
      </Link>
      </form>
      <Table responsive>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <>
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
            </tr>
            <Link to={`/product/edit-product/${product.id}`}>
            <button>Editar</button>
            </Link>
            <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
            </>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ProductList;
