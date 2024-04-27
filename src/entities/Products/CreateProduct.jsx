import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'reactstrap';
import { createProduct } from './product-service.tsx';


const CreateProduct = () => {

    const [createdProduct, setCreatedProduct] = useState(null);

    const initialValues = {
        title: '',
        price: '',
        category: '',
        description: '',
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('El título es requerido'),
        price: Yup.number().required('El precio es requerido').positive('El precio debe ser un número positivo'),
        category: Yup.string().required('La categoría es requerida'),
        description: Yup.string().required('La descripción es requerida'),
    });

    

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        createProduct(values)
            .then(response => {
                console.log('Nuevo producto creado:', response.data);
                setCreatedProduct(response.data);
                resetForm();
            })
            .catch(error => {
                console.error('Error creando producto:', error);
            })
            .finally(() => {
                setSubmitting(false);
            });
    };;

    return (
        <div style={{ minHeight: '100vh', padding: '20px'}}>
            <div>
            <h2>Crear Nuevo Producto</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
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
                            {isSubmitting ? 'Creando...' : 'Crear Producto'}
                        </Button>
                    </Form>
                )}
            </Formik>
            {createdProduct && (
                <div>
                    <h3>Nuevo Producto Creado</h3>
                    <p>ID: {createdProduct.id}</p>
                    <p>Título: {createdProduct.title}</p>
                    <p>Precio: {createdProduct.price}</p>
                    <p>Categoría: {createdProduct.category}</p>
                    <p>Descripción: {createdProduct.description}</p>
                </div>
            )}
        </div>
    </div>
    );
};

export default CreateProduct;
