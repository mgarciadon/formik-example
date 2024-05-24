import React, { useState, useEffect, useContext } from 'react';
import { Table } from 'reactstrap';
import { getAllProducts } from './product.service';
import { AuthContext } from '../../AuthProvider';
import useToast from '../../hooks/useToast';



const ProductList = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const { showToast, renderToast } = useToast();

    useEffect(() => {
        const getProducts = async () => {
            if (isLoggedIn) {
                try {
                    const response = await getAllProducts();
                    setProducts(response.data);
                } catch (error) {
                    showToast('Error', error, 'error');
                }
            }
        };

        getProducts();
    }, [isLoggedIn]);

    return (
        <Table responsive>
            {renderToast()}
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