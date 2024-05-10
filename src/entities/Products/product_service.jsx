import api from "../../api";

export const getAllProducts = async () => await api.get("products");
export const getProductById = async () => await api.get("/products/1");
export const deleteProduct = async () => await api.delete("products/6");
export const updateProduct = async () => await api.put("products/7");
export const createProduct = async () => await api.post("products");
