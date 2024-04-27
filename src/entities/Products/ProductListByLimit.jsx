import React, { useState, useEffect } from 'react';
import { Table, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import { getProductByLimit } from './product-service.tsx';

const ProductListByLimit = () => {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(5);
    const [newLimit, setNewLimit] = useState();

    useEffect(() => {
        fetchProducts();
    }, [limit]);

    const fetchProducts = () => {
        getProductByLimit(limit).then((response) => {
            setProducts(response.data);
        });
    };

    const handleButtonClick = () => {
        setLimit(newLimit);
    };

    const handleInputChange = (event) => {
        setNewLimit(parseInt(event.target.value, 10));
    };

    return (
        <div>
            <Row>
                <Col md={8}>
                    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Numero</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Categoría</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(product => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.title}</td>
                                        <td>${product.price.toLocaleString()}</td>
                                        <td>{product.category}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <Form>
                        <FormGroup>
                            <Input
                                type="number"
                                value={newLimit}
                                onChange={handleInputChange}
                                placeholder="Ingrese el nuevo límite"
                            />
                        </FormGroup>
                        <Button type="button" color="primary" onClick={handleButtonClick}>
                            Actualizar Límite
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default ProductListByLimit;
