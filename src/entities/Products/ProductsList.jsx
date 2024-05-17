import React, { useState, useEffect } from "react";
import { Table, Button } from "reactstrap";
import { getAllProducts } from "./product-service";
import DeleteProduct from "./DeleteProduct";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Button color="info" href={`/products/${product.id}`}>
                  View
                </Button>{" "}
                <Button color="warning" href={`/products/edit/${product.id}`}>
                  Edit
                </Button>{" "}
                <DeleteProduct productId={product.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductsList;
