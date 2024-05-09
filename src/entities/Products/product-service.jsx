// product-service.js
import api from '../../api';

export const getAllProducts = () => {
    return api.get("/products");
}

export const getProductById = (productId) => {
    return api.get(`/products/${productId}`);
}

export const createProduct = (productData) => {
    return api.post(`/products`, productData);
}

export const updateProduct = (productId, productData) => {
    return api.put(`/products/${productId}`, productData);
}

export const deleteProduct = (productId) => {
    return api.delete(`/products/${productId}`);
}
