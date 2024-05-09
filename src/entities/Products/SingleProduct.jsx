import React, {useState} from "react";
import { getProduct } from "./product-service";

const SingleProduct = () =>{
    const[productId, setProductId] = useState();
    const[product, setProduct] = useState({});

    const productIdHandler = (e) => {
        setProductId(e.target.value);
    
    }

    const getProductHandler = async() =>{
        try {
            const productResult = await getProduct(productId);
            setProduct(productResult);
        }catch (error){
            console.error("Error getting product:", error);
            }
        };

        return (
            <div>
                <label htmlFor="productId">ID del producto:</label>
                <input id="productId" onChange={productIdHandler} type="text" value={productId} />
                <button onClick={getProductHandler}>Buscar producto</button>
                {product ? <div>
                    <h2>Producto:</h2>
                    <p>Nombre: {product.title}</p>
                    <p>Precio: {product.price}</p>
                    <p>Categoría: {product.category}</p>
                    <p>Descripción: {product.description}</p>
                </div> : <p>No existe el producto</p>}
            </div>
        );
    
}

export default SingleProduct;