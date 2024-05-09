import React, { useState } from 'react';
import { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct } from './product-service';

const CreateProduct = () => {
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        description: '',
        price: 0,
        category: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addProduct(formData);
        } catch (error) {
            console.error('Error creating product:', error);
            alert('An error occurred while creating the product.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                id:
                <input type="text" name="id" value={formData.id} onChange={handleChange} />
            </label>
            <label>
                Title:
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
            </label>
            <label>
                Description:
                <input type="text" name="description" value={formData.description} onChange={handleChange} />
            </label>
            <label>
                Price:
                <input type="number" name="price" value={formData.price} onChange={handleChange} />
            </label>
            <label>
                Category:
                <input type="text" name="category" value={formData.category} onChange={handleChange} />
            </label>
            <button type="submit">Create Product</button>
        </form>
    );
};

export default CreateProduct;
