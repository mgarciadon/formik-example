import { useState } from 'react';
import { deleteProduct } from './product-service';
import { Button } from 'reactstrap';
import StyledInput from '../../shared/Input';

const DeleteProduct = () =>{

  const [productId, setProductId] = useState('');

  const deleteProductById = async () => {
    try {
      const response = await deleteProduct(productId);
      console.log(response.data);
      }   catch (error) {
      console.error("No se pudo eliminar el producto: ", error);
      }
    };
      
    return ( 
          <div>
            <StyledInput
              placeholder="Id del producto a eliminar"
              type="text"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
            <Button color="danger" onClick={deleteProductById}>
              Eliminar
            </Button>
        </div>
      );
  }

  

  export {DeleteProduct}