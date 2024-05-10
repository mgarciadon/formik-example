import api from '../../api';

export const getAllProducts = () => { return api.get("/products")}

export const addProduct = (title,price,category,description) =>{ return api.post('https://fakestoreapi.com/products',{title: title,price:price,category:category,description:description})}

export const getProductById = (productId) => { return api.get(`/products/${productId}`) }

export const updateProduct = (productId,title,price,category,description) =>{return api.put(`https://fakestoreapi.com/products/${productId}`,{title: title,price:price,category:category,description:description})}

export const deleteProduct = (productId) => {return api.delete(`https://fakestoreapi.com/products/${productId}`)}

