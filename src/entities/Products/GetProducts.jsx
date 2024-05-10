import React, { useState, useEffect } from 'react';
import { Button, FormGroup, Table } from 'reactstrap';
import { getAllProducts, getProductById } from './product-service';
import { useFormik } from 'formik';
import StyledInput from '../../shared/Input';



const GetProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts().then((response) => {
            setProducts(response.data);
        }).finally(console.log("termino"));
    }, []);

    const getProduct = async (id) => {
        try {
            const response = await getProductById(id);
            console.log(response.data);
        }   catch (error) {
            console.error("No se pudo encontrar el producto: ", error);
        }
    };

    const formik = useFormik({
        initialValues: {
            id: "",
        },
        onSubmit: (values) => {
            getProduct(values.id);
        },
    });


    return (
        <>
         <Table responsive>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Categoría</th>
                </tr>
            </thead>
            <tbody>
                {products?.map(product => (
                    <tr key={product.id}>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                    </tr>
                ))}
            </tbody>
         </Table>

         <form onSubmit={formik.handleSubmit}>
            <FormGroup>
                <StyledInput
                placeholder="Id del producto a buscar"
                type="id"
                className="form-control"
                value={formik.values.id}
                onChange={formik.handleChange}
                />
            </FormGroup>

            <FormGroup>
                <Button color="primary" type="submit">
                 Buscar
                </Button>
            </FormGroup>
         </form>
        </>

        
    );

    

    
}

export {GetProducts}