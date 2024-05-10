import React, { useState } from 'react';
import { DeleteProduct } from './product-service';

const DeleteProduct = ({ productId }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await DeleteProduct(productId);
      console.log('Producto eliminado con exito');
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div>
      {isDeleting ? (
        <p>eliminando</p>
      ) : (
        <button onClick={handleDelete}>producto eliminado</button>
      )}
    </div>
  );
};

export default DeleteProduct;