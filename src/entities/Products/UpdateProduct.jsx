import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { getProductById, updateProduct } from "./product-Service";

const UpdateProduct = () => {
    const [productId, setProductId] = useState("");
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleInputChange = (e) => {
        setProductId(e.target.value);
    };

    const handleForSumbit = (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        getProductById(productId)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((err) => {
                console.error("Error al obtener el producto", err);
                setErrorMessage("Error al obtener el producto");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleEditProduct = () => {
        window.alert("Estas seguro que deseas editar este producto?")
        setLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        updateProduct(productId, product)
            .then(() => {
                setSuccessMessage("Producto editado con exito!");
            })
            .catch((err) => {
                console.error("Error al editar el producto", err);
                setErrorMessage("Error al editar el producto");
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleChangeProduct = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <Form onSubmit={handleForSumbit}>
                <FormGroup>
                    <Label for="productId">Id del producto:</Label>
                    <Input
                        type="text"
                        name="productId"
                        id="productId"
                        value={productId}
                        onChange={handleInputChange}
                    />
                </FormGroup>
                <Button type="sumbit" color="primary">
                    Buscar producto
                </Button>
            </Form>

            {loading && <p>Cargando producto...</p>}
            {errorMessage && <p>{errorMessage}</p>}
            {successMessage && <p>{successMessage}</p>}

            {product && (
                <div>
                    <h3>Detalles del Producto:</h3>
                    <FormGroup>
                        <Label for="title">Título:</Label>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            value={product.title}
                            onChange={handleChangeProduct}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="price">Precio:</Label>
                        <Input
                            type="text"
                            name="price"
                            id="price"
                            value={product.price}
                            onChange={handleChangeProduct}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="category">Categoría:</Label>
                        <Input
                            type="text"
                            name="category"
                            id="category"
                            value={product.category}
                            onChange={handleChangeProduct}
                        />
                    </FormGroup>
                    <Button
                        color="primary"
                        onClick={handleEditProduct}
                        disabled={loading}
                    >
                        Guardar Cambios
                    </Button>
                </div>
            )}
        </div>
    )
}

export default UpdateProduct;