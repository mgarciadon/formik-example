import api from "../api";

export const getAllProductsAPI = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error getting all products:", error);
  }
};

export const getProductAPI = async (productId) => {
  try {
    const response = await api.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting single product:", error);
  }
};

export const postProductAPI = async (newProduct) => {
  try {
    const response = await api.post(`/products`, newProduct);
    return response.data;
  } catch (error) {
    console.error("Error posting product", error);
  }
};

export const updateProductAPI = async (productId, updatedProduct) => {
  try {
    const response = await api.put(`/products/${productId}`, updatedProduct);
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
  }
};

export const deleteProductAPI = async (productId) => {
  try {
    const response = await api.delete(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting product", error);
  }
};
