import api from '../../api';

const getAllProducts = () => { return api.get("/products")}

const getProductById = (id) => {
    return api.get(`/products/${id}`);
}

const createNewProduct = (title, price, description, category) => {
    return api.post(`/products`,{title:title, price:price, description:description, category:category});
}

const  updateProduct = (id, title, price, description, category) => {
    return api.put(`/products/${id}`,{title:title, price:price, description:description, category:category});
}

const deleteProduct = (id) => {
    return api.delete(`/products/${id}`);
}

export {getAllProducts,getProductById,createNewProduct,updateProduct,deleteProduct}