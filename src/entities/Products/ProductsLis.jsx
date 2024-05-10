import React, { useState, useEffect } from 'react';
import { getAllProducts, deleteProduct, createProduct, updateProduct } from './product-service';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productsData = await getAllProducts();
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleCreate = async () => {
    try {
      await createProduct({ name: newProductName, price: newProductPrice });
      setNewProductName('');
      setNewProductPrice('');
      fetchProducts();
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleEdit = async (id, newName, newPrice) => {
    try {
      await updateProduct(id, { name: newName, price: newPrice });
      fetchProducts();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
            <button onClick={() => handleDelete(product.id)}>Delete</button>
            <button onClick={() => handleEdit(product.id, product.name, product.price)}>Edit</button>
          </li>
        ))}
      </ul>
      <h2>Create New Product</h2>
      <input
        type="text"
        placeholder="Name"
        value={newProductName}
        onChange={(e) => setNewProductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={newProductPrice}
        onChange={(e) => setNewProductPrice(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default ProductList;
