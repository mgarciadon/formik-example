import React, { useState } from 'react';
import { UpdateProduct } from './product-service';

const UpdateProduct = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
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
      const response = await UpdateProduct(formData);
      console.log('producto actualizado con exito', response.data);
      
    } catch (error) {
      console.error('error al actualizar producto', error);

    }
  };

  return (
    <div>
      <h2>actualizar producto</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required />
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} required />
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} required />
        <button type="submit">actualizar producto</button>
      </form>
    </div>
  );
};

export default UpdateProduct;