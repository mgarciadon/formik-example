import React from "react";
import { updateProduct } from "./product-service";

const UpdateProduct = ({
  setProducts,
  setEditingProduct,
  editingProduct,
  products,
}) => {
  const handleUpdateProduct = (updatedProduct) => {
    updateProduct(updatedProduct.id, updatedProduct)
      .then(() => {
        const updatedProducts = products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        );
        setProducts(updatedProducts);
        setEditingProduct(null);
      })
      .catch((error) => {
        console.log("Error al actualizar producto", error);
      });
  };
  return (
    <div>
      {editingProduct && (
        <div>
          <h2>EDITAR PRODUCTO</h2>
          <input
            type="text"
            value={editingProduct.title}
            onChange={(e) =>
              setEditingProduct({ ...editingProduct, title: e.target.value })
            }
          />
          <input
            type="text"
            value={editingProduct.price}
            onChange={(e) =>
              setEditingProduct({ ...editingProduct, price: e.target.value })
            }
          />
          <input
            type="text"
            value={editingProduct.category}
            onChange={(e) =>
              setEditingProduct({ ...editingProduct, price: e.target.category })
            }
          />
          <button onClick={() => handleUpdateProduct(editingProduct)}>
            Guardar
          </button>
          <button onClick={() => setEditingProduct(null)}>Cancelar</button>
        </div>
      )}
    </div>
  );
};

export default UpdateProduct;
