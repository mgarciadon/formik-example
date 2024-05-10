import  { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label} from 'reactstrap';
import * as Yup from 'yup';
import { addProduct } from './ProductService';
import { Link } from 'react-router-dom';
const AddProduct = () => {
  const [redirect, setRedirect] = useState(false);

  const initialValues = {
    title: '',
    price: '',
    category: '',
    description: '',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('El titulo es requerido').min(3, 'Minimo 3 caracteres'),
    price: Yup.number().required('El precio es requerido').positive('El precio debe ser positivo'),
    category: Yup.string().required('La Categoria es requerida').min(3, 'Minimo 3 caracteres'),
    description: Yup.string().required('La descripcion es requerido').min(3, 'Minimo 3 caracteres'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await addProduct(values.title, values.price, values.category, values.description);
      console.log('Producto añadido');
      alert('Añadido!');
      resetForm();
      setRedirect(true); 
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };


  return (
   
    <Formik
    
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      
      {({ isSubmitting }) => (
        
        <Form>
          <FormGroup>
            <Label for="title">Title</Label>
            <Field type="text" name="title" className="form-control" />
            <ErrorMessage name="title" component="div" className="text-danger" />
          </FormGroup>

          <FormGroup>
            <Label for="price">Price</Label>
            <Field type="number" name="price" className="form-control" />
            <ErrorMessage name="price" component="div" className="text-danger" />
          </FormGroup>

          <FormGroup>
            <Label for="category">Category</Label>
            <Field type="text" name="category" className="form-control" />
            <ErrorMessage name="category" component="div" className="text-danger" />
          </FormGroup>
          
          <FormGroup>
            <Label for="description">Description</Label>
            <Field type="text" name="description" className="form-control" />
            <ErrorMessage name="description" component="div" className="text-danger" />
          </FormGroup>

          

          <Button type="submit" color="primary" disabled={isSubmitting}>
            Add Product
          </Button>
          <Link to="/products">
            <Button color="primary" style={{ marginBottom: '10px' }}>Volver</Button>
            </Link>
        </Form>
        
      )}
    </Formik>
  );
};

export default AddProduct;
