import React, { useState, useEffect } from 'react';
import ProductService from './product-service';

const ProductUpdate = ({ productId }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        category: ''
    });

    useEffect(() => {
        ProductService.getById(productId)
            .then(response => {
                setFormData(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details: ', error);
            });
    }, [productId]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        ProductService.update(productId, formData)
            .then(() => {
                console.log('Product updated successfully');
            })
            .catch(error => {
                console.error('Error updating product: ', error);
            });
    };

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" /><br />
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description"></textarea><br />
                <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" /><br />
                <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" /><br />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default ProductUpdate;
