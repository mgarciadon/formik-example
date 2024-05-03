import React, { useState, useEffect } from 'react';
import { Table, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct } from './product-service';
import './Product.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [editedProduct, setEditedProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getAllProducts();
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    const handleAddProduct = async () => {
        try {
            const newProductData = { title: "New product", price: 0, category: "New category" };
            const response = await addProduct(newProductData);
            setProducts([...products, response.data]);
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    const handleUpdateProduct = async () => {
        try {
            if (editedProduct) {
                const response = await updateProduct(editedProduct.id, editedProduct);
                const updatedProducts = products.map(product =>
                    product.id === editedProduct.id ? response.data : product
                );
                setProducts(updatedProducts);
                setEditedProduct(null);
            }
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    const handleDeleteProduct = async (productId) => {
        try {
            await deleteProduct(productId);
            const updatedProducts = products.filter(product => product.id !== productId);
            setProducts(updatedProducts);
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const handleProductClick = async (productId) => {
        try {
            const response = await getProductById(productId);
            setSelectedProduct(response.data);
            setEditedProduct(response.data);
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <Button onClick={handleAddProduct}>Agregar Producto</Button>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Categoría</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map(product => (
                        <tr key={product.id} onClick={() => handleProductClick(product.id)}>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>
                                <Button onClick={() => setSelectedProduct(product)}>Editar</Button>
                                <Button onClick={() => handleDeleteProduct(product.id)}>Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {editedProduct && (
                <div>
                    <h2>Editar Producto</h2>
                    <Form>
                        <FormGroup>
                            <Label for="title">Título</Label>
                            <Input type="text" name="title" id="title" value={editedProduct.title} onChange={handleEditChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="price">Precio</Label>
                            <Input type="number" name="price" id="price" value={editedProduct.price} onChange={handleEditChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="category">Categoría</Label>
                            <Input type="text" name="category" id="category" value={editedProduct.category} onChange={handleEditChange} />
                        </FormGroup>
                        <Button onClick={handleUpdateProduct}>Guardar</Button>
                    </Form>
                </div>
            )}
        </div>
    );
}

export default ProductList;
