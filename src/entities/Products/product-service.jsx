import axios from 'axios';

const BASE_URL = 'https://fakeapi.com/products';

// Función para obtener todos los productos
export const getAllProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error getting all products:', error);
    throw error;
  }
};

// Función para obtener un producto por su ID
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error getting product with ID ${id}:`, error);
    throw error;
  }
};

// Función para crear un nuevo producto
export const createProduct = async (productData) => {
  try {
    const response = await axios.post(BASE_URL, productData);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

// Función para actualizar un producto existente
export const updateProduct = async (id, productData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, productData);
    return response.data;
  } catch (error) {
    console.error(`Error updating product with ID ${id}:`, error);
    throw error;
  }
};

// Función para eliminar un producto
export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting product with ID ${id}:`, error);
    throw error;
  }
};
