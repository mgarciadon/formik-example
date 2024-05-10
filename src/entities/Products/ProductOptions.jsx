import { GetProducts } from './GetProducts';
import { DeleteProduct } from './DeleteProduct';
import { CreateProduct } from './CreateProduct'
import { UpdateProduct } from './UpdateProduct'

const ProductOptions = () => {
    return (
        <>
            <div>
                <GetProducts />
            </div>

            <div>
               <DeleteProduct />  
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <CreateProduct />
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <UpdateProduct />
            </div>
        </>
    );
};

export {ProductOptions}