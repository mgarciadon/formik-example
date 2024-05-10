import React, { useState, useEffect } from 'react';
import ProductService from './product-service';

const ProductDetail = ({ productId }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        ProductService.getById(productId)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details: ', error);
            });
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Product Detail</h1>
            <p>Title: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
        </div>
    );
};

export default ProductDetail;
