import api from '../../api';
export const getProductById = (id) => { return api.get(`/products/${id}`)}
export const addProduct = (newProduct) => {return api.post("/products", newProduct);};
export const updateProduct = (Id, updateProduct) => { return api.put(`/products/${Id}`, updateProduct);};
export const deleteProduct = (id) => {return api.delete(`/products/${id}`)};