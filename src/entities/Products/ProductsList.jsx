import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import { getAllProducts} from './product-service.tsx';

const ProductList = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        getAllProducts().then((response) => {
            setProducts(response.data);
        });
    }, []);

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
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default ProductList;
