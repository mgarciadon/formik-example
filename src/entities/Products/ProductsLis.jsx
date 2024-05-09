import React, { useState, useEffect } from 'react';
import { Table} from 'reactstrap';
import { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct } from './product-service';

const ProductList = () => {
    const [ValueproductId, setValueProductId] = useState(1);
    const [ProductbyID, setProductbyID] = useState();
    const [products, setProducts] = useState([]);
    const [EnableProductsid, setEnableProductsid] = useState(false)

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await getAllProducts();
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        getProducts();
    }, [])

    const getProductByIdHandler = async () => {
        try {
            const product = await getProductById(ValueproductId);
            setProductbyID(product.data); 
            setEnableProductsid(true);
        } catch (error) {
            console.error("Error fetching product by id:", error);
        }
    };

    const DeleteProductHandler = async (productId)=>{
        try {
             await deleteProduct(productId);
             console.log('successful deletion')
        } catch (error) {
            console.error("Error delete product by id:", error);
        }
    }

return (

    <Table responsive>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Categoría</th>
                </tr>
            </thead>
            <tbody>
                {products?.map(product => (
                    <tr key={product.id}>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <button onClick={()=>(DeleteProductHandler(product.id))}>Delete</button>
                    </tr>
                ))}
            </tbody>

            <input type="number" min={1} max={20} value={ValueproductId} onChange={(event)=>(setValueProductId(event.target.value))} />
            <button onClick={getProductByIdHandler}>Get Product By id</button>

            <div>
           
            {EnableProductsid && (
                <div key={ProductbyID.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card h-100">
                    <img src={ProductbyID.image} className="card-img-top" alt={ProductbyID.title} />
                    <div className="card-body">
                        <h5 className="card-title">{ProductbyID.title}</h5>
                        <p className="card-text">${ProductbyID.price}</p>
                    </div>
                </div>
            </div>
            )}


        </div>
        </Table>
);
};

export default ProductList; 