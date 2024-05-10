import React, { useState } from 'react';
import ProductService from './product-service';

const ProductCreate = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        category: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        ProductService.create(formData)
            .then(() => {
                console.log('Product created successfully');
                // Reset form data after successful creation
                setFormData({
                    title: '',
                    description: '',
                    price: '',
                    category: ''
                });
            })
            .catch(error => {
                console.error('Error creating product: ', error);
            });
    };

    return (
        <div>
            <h1>Create Product</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" /><br />
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description"></textarea><br />
                <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" /><br />
                <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" /><br />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default ProductCreate;
