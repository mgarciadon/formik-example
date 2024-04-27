import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'reactstrap';
import { updateProduct } from './product-service.tsx';

const UpdateProduct = () => {
    const [updatedProduct, setUpdatedProduct] = useState(null);

    const initialValues = {
        id: '',
        title: '',
        price: '',
        category: '',
        description: '',
    };

    const validationSchema = Yup.object().shape({
        id: Yup.number().required('El ID es requerido'),
        title: Yup.string().required('El título es requerido'),
        price: Yup.number().required('El precio es requerido').positive('El precio debe ser un número positivo'),
        category: Yup.string().required('La categoría es requerida'),
        description: Yup.string().required('La descripción es requerida'),
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        const { id, ...updatedData } = values;
        const productId = id
        updateProduct(productId, updatedData)
            .then(response => {
                console.log('Producto actualizado:', response.data);
                setUpdatedProduct(response.data);
                resetForm();
            })
            .catch(error => {
                console.error('Error actualizando producto:', error);
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <div style={{ minHeight: '100vh', padding: '20px'}}>
            <h2>Actualizar Producto</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="id">ID del Producto</label>
                            <Field type="number" name="id" className="form-control" />
                            <ErrorMessage name="id" component="div" className="text-danger" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="title">Título</label>
                            <Field type="text" name="title" className="form-control" />
                            <ErrorMessage name="title" component="div" className="text-danger" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Precio</label>
                            <Field type="number" name="price" className="form-control" />
                            <ErrorMessage name="price" component="div" className="text-danger" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="category">Categoría</label>
                            <Field type="text" name="category" className="form-control" />
                            <ErrorMessage name="category" component="div" className="text-danger" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Descripción</label>
                            <Field type="text" name="description" className="form-control" />
                            <ErrorMessage name="description" component="div" className="text-danger" />
                        </div>

                        <Button type="submit" color="primary" disabled={isSubmitting}>
                            {isSubmitting ? 'Actualizando...' : 'Actualizar Producto'}
                        </Button>
                    </Form>
                )}
            </Formik>

            {/* Mostrar el producto actualizado */}
            {updatedProduct && (
                <div>
                    <h3>Producto Actualizado</h3>
                    <p>ID: {updatedProduct.id}</p>
                    <p>Título: {updatedProduct.title}</p>
                    <p>Precio: {updatedProduct.price}</p>
                    <p>Categoría: {updatedProduct.category}</p>
                    <p>Descripción: {updatedProduct.description}</p>
                </div>
            )}
        </div>
    );
};

export default UpdateProduct;
