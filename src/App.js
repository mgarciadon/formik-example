import "bootstrap/dist/css/bootstrap.min.css";
import ProductById from "./entities/Products/ProductById";
import AddNewProduct from "./entities/Products/AddNewProduct";
import UpdateProduct from "./entities/Products/UpdateProduct";
import DeleteProduct from "./entities/Products/DeleteProduct";

const App = () => {
  return (
    <>
      <div
        className="justify-content-center align-items-center "
        style={{ height: "100vh", padding: 50, display: "flex", gap: 100 }}
      >
        <AddNewProduct />
        <UpdateProduct />
        <DeleteProduct />
      </div>
      <ProductById />
    </>
  );
};

export default App;
