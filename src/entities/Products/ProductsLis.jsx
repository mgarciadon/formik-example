import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import { getAllProductsAPI } from "../../services/productServices";
import SingleProduct from "./SingleProduct";
import CreateProduct from "./CreateProduct";
import DeleteProduct from "./DeleteProduct";
import UpdateProduct from "./UpdateProduct";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const fetchedProducts = await getAllProductsAPI();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllProducts();
  }, []);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (deleteProductId) => {
    const newProducts = products.filter(
      (product) => product.id !== deleteProductId
    );
    setProducts(newProducts);
  };

  const updateProduct = (updatedProduct) => {
    const updatedProducts = [...products];
    const index = updatedProducts.findIndex(
      (product) => product.id === updatedProduct.id
    );
    updatedProducts[index] = updatedProduct;
    setProducts(updatedProducts);
  };

  return (
    <div>
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
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <SingleProduct />
      <CreateProduct addProduct={addProduct} />
      <UpdateProduct updateProduct={updateProduct} />
      <DeleteProduct deleteProduct={deleteProduct} />
    </div>
  );
};

export default ProductList;
