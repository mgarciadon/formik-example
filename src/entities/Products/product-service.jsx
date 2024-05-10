import api from '../../api';

export const getAllProducts = () => {
    return api.get("/products");
  };
  
  export const getProductById = (id) => {
    return api.get(`/products/${id}`);
  };
  
  export const deleteProduct = (id) => {
    return api.delete(`/products/${id}`);
  };
  
  export const updateProduct = (id, updatedProductData) => {
    return api.put(`/products/${id}`, updatedProductData);
  };
  
  export const createProduct = (newProductData) => {
    return api.post("/products", newProductData);
  };