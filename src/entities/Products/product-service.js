import api from '../../api';

export const getAllProducts = async () => { 
    try {
        const response = await api.get("/products");
        return response.data;
    } catch (error) {
        console.error("Error getting all products:", error);
        throw error;
    }
};

export const getProduct = async (productId) => { 
    try {
        const response = await api.get(`/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error("Error getting single product:", error);
        throw error;
    }
};

export const addProduct = async (productData) => {
    try {
        const response = await api.post("/products", productData);
        return response.data;
    } catch (error) {
        console.error("Error adding product:", error);
        throw error;
    }
};


export const updateProduct = async (productId, updatedProductData) => {
    try {
        const response = await api.put(`/products/${productId}`, updatedProductData);
        return response.data;
    } catch (error) {
        console.error("Error updating product:", error);
        throw error;
    }
};