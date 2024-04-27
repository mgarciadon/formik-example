import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'reactstrap';
import { deleteProduct } from './product-service.tsx';

const DeleteProduct = () => {
    const [deletedProductId, setDeletedProductId] = useState(null);

    const initialValues = {
        id: ''
    };

    const validationSchema = Yup.object().shape({
        id: Yup.number().required('El ID es requerido')
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        deleteProduct(values.id)
            .then(response => {
                console.log('Producto eliminado:', response.data);
                setDeletedProductId(response.data.id);
                resetForm();
            })
            .catch(error => {
                console.error('Error eliminando producto:', error);
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <div style={{ minHeight: '100vh', padding: '20px'}}>
            <h2>Eliminar Producto</h2>
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

                        <Button type="submit" color="danger" disabled={isSubmitting}>
                            {isSubmitting ? 'Eliminando...' : 'Eliminar Producto'}
                        </Button>
                    </Form>
                )}
            </Formik>

            {deletedProductId && (
                <div>
                    <h3>Producto Eliminado</h3>
                    <p>ID: {deletedProductId}</p>
                </div>
            )}
        </div>
    );
};

export default DeleteProduct;
