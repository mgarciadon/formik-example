import api from "../../api"

const getAllProducts = () => {
     return api.get("/products")}

const getProductById = (
    idProduct) => { return api.get(`/products/${idProduct}`) }

const addNewProduct = (
    title,price,description,image,category) =>{ return api.post('https://fakestoreapi.com/products',{title: title,price:price,description:description,category:category})}

const updateProduct = (
    id,title,price,description,image,category) =>{return api.put(`https://fakestoreapi.com/products/${id}`,{title: title,price:price,description:description,category:category})}

const deleteProductById = (id) => {
    return api.delete(`https://fakestoreapi.com/products/${id}`)}

export {
    getAllProducts,getProductById,addNewProduct,updateProduct,deleteProductById}