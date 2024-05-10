import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import { getAllProducts } from "./product-service";
import DeleteProduct from "./DeleteProduct";
import GetProductById from "./GetProductById";
import CreateProduct from "./CreateProduct";
import UpdateProduct from "./UpdateProduct";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    getAllProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .finally(console.log("Productos cargados"));
  }, []);

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  return (
    <div>
      <CreateProduct
        setProducts={setProducts}
        products={products}
        editingProduct={editingProduct}
        selectedProduct={selectedProduct}
      />

      <UpdateProduct
        setProducts={setProducts}
        setEditingProduct={setEditingProduct}
        editingProduct={editingProduct}
        products={products}
      />

      <GetProductById
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      {!selectedProduct && (
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
              {products?.map((product, index) => (
                <tr key={index}>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleEditProduct(product);
                      }}
                    >
                      Editar
                    </button>
                  </td>
                  <td>
                    <DeleteProduct
                      setProducts={setProducts}
                      setSelectedProduct={setSelectedProduct}
                      products={products}
                      productId={product.id}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default ProductList;