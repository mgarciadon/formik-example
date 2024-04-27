import React, { useState, useEffect } from 'react';
import { Table, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import { getProductById } from './product-service.tsx';

const ProductListById = () => {
    const [product, setProduct] = useState({});
    const [id, setId] = useState(1);
    const [newId, setNewId] = useState();

    useEffect(() => {
        fetchProduct();
    }, [id]);

    const fetchProduct = () => {
        getProductById(id).then((response) => {
            setProduct(response.data);
        });
    };

    const handleButtonClick = () => {
        setId(newId);
    };

    const handleInputChange = (event) => {
        setNewId(parseInt(event.target.value, 1));
    };

    return (
        <div>
            <Row>
                <Col md={8}>
                    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Categoría</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.title && (
                                <tr>    
                                    <td>{product.title}</td>
                                    <td>${product.price.toLocaleString()}</td>
                                    <td>{product.category}</td>
                                </tr>
                                )}
                                   
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
                                value={newId}
                                onChange={handleInputChange}
                                placeholder="Ingrese el id del producto"
                            />
                        </FormGroup>
                        <Button type="button" color="primary" onClick={handleButtonClick}>
                            Actualizar Producto
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default ProductListById;
