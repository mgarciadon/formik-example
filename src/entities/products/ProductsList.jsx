import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import { getAllProducts } from './product.service';



const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts().then((response) => {
            setProducts(response.data);
        }).finally(console.log("termino"));
    }, []);

    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {products?.map(product => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default ProductList