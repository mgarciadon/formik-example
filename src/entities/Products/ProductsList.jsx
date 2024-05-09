import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { getAllProducts, createProduct, deleteProduct, updateProduct, getProductById } from './product-service'; 
import './ProductsStyle.css'; 

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalDelete, setModalDelete] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedProductData, setEditedProductData] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const [modalAddProduct, setModalAddProduct] = useState(false);
    const [newProductData, setNewProductData] = useState({
        title: '',
        price: '',
        category: ''
    });



    //traer todos los productos
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getAllProducts();
                setProducts(response.data);
            } catch (error) {
                console.error("Error getting products", error);
            }
        };
        fetchProducts();
    }, []);


    //buscar un producto por su nombre
    const handleSelectProduct = async (productId) => {
        try {
            const response = await getProductById(productId);
            setSelectedProduct(response.data);
        } catch (error) {
            console.error("Error getting product by ID:", error);
        }
    };


    //crear un nuevo producto
    const handleCreateProduct = async () => {
        try {
            const response = await createProduct(newProductData);
            setProducts([...products, response.data]);
            setModalAddProduct(false);
            setNewProductData({
                title: '',
                price: '',
                category: ''
            });
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };


    //eliminar un prodcuto
    const handleDeleteProduct = async () => {
        try {
            await deleteProduct(selectedProduct.id);
            setProducts(products.filter(product => product.id !== selectedProduct.id));
            setModalDelete(false);
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

   
    //editar un producto
    const handleEditProduct = (product) => {
        setSelectedProduct(product);
        setIsEditing(true);
        setEditedProductData(product);
    };

    const handleSaveProduct = async () => {
        try {
            const response = await updateProduct(editedProductData.id, editedProductData);
            const updatedProductList = products.map(product =>
                product.id === editedProductData.id ? response.data : product
            );
            setProducts(updatedProductList);
            setIsEditing(false);
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    const toggleDeleteModal = () => setModalDelete(!modalDelete);

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditedProductData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleAddProductChange = (e) => {
        const { name, value } = e.target;
        setNewProductData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const toggleAddProductModal = () => setModalAddProduct(!modalAddProduct);

    const handleSubmitAddProduct = (e) => {
        e.preventDefault();
        handleCreateProduct();
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    

    return (
        <div className="product-list-container">
            <Button className="add-product-button" onClick={toggleAddProductModal}>Agregar Producto</Button>
            <Input
             className="search-input"
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <Table  className="product-table" responsive>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Categoría</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map(product => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>
                                <Button onClick={() => handleEditProduct(product)}>Editar</Button>
                                <Button onClick={toggleDeleteModal}>Eliminar</Button>
                                <Button onClick={() => handleSelectProduct(product.id)}>Ver</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <Modal isOpen={modalDelete} toggle={toggleDeleteModal}>
                    <ModalHeader toggle={toggleDeleteModal}>Confirmar eliminación</ModalHeader>
                    <ModalBody>
                        ¿Estás seguro que deseas eliminar el producto "{selectedProduct?.title}"?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={handleDeleteProduct}>Eliminar</Button>
                        <Button color="secondary" onClick={toggleDeleteModal}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={isEditing} toggle={() => setIsEditing(false)}>
                    <ModalHeader toggle={() => setIsEditing(false)}>Editar Producto</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="title">Título</Label>
                                <Input type="text" name="title" id="title" value={editedProductData.title} onChange={handleEditChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="price">Precio</Label>
                                <Input type="number" name="price" id="price" value={editedProductData.price} onChange={handleEditChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="category">Categoría</Label>
                                <Input type="text" name="category" id="category" value={editedProductData.category} onChange={handleEditChange} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={handleSaveProduct}>Guardar Cambios</Button>
                        <Button color="secondary" onClick={() => setIsEditing(false)}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={modalAddProduct} toggle={toggleAddProductModal}>
                    <ModalHeader toggle={toggleAddProductModal}>Agregar Producto</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={handleSubmitAddProduct}>
                            <FormGroup>
                                <Label for="title">Título</Label>
                                <Input type="text" name="title" id="title" value={newProductData.title} onChange={handleAddProductChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="price">Precio</Label>
                                <Input type="number" name="price" id="price" value={newProductData.price} onChange={handleAddProductChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="category">Categoría</Label>
                                <Input type="text" name="category" id="category" value={newProductData.category} onChange={handleAddProductChange} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={handleSubmitAddProduct}>Guardar</Button>
                        <Button color="secondary" onClick={toggleAddProductModal}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </Table>
        </div>
    );
}

export default ProductList;
