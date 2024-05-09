import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./shared/NavBar";

import { LoginForm } from "./entities/Login/LoginForm";
import ProductsList from "./entities/Products/ProductsList";
import ProductCreate from "./entities/Products/ProductCreate";
import ProductDelete from "./entities/Products/ProductDelete";
import ProductUpdate from "./entities/Products/ProductUpdate";
const App = () => {
  return (
    <>
      <div
        className="justify-content-center align-items-center"
        style={{ height: "10vh" }}
      >
        <div style={{ width: "10px" }}></div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/product" element={<ProductsList />} />
            <Route path="/product/create" element={<ProductCreate />} />
            <Route path="/product/delete" element={<ProductDelete />} />
            <Route path="/product/update" element={<ProductUpdate />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;

// import "bootstrap/dist/css/bootstrap.min.css";
// import { LoginForm } from "./entities/Login/LoginForm";
// import ProductById from "./entities/Products/getProductById";
// import CreateProduct from "./entities/Products/createProduct";
// import ProductList from "./entities/Products/ProductsList";
// import DeleteProduct from "./entities/Products/DeleteProduct";

// const App = () => {
//   return (
//     <>
//       <div
//         className="d-flex justify-content-center align-items-center"
//         style={{ height: "100vh" }}
//       >
//         <div style={{ width: "300px" }}>
//           <LoginForm />
//         </div>
//         <div style={{ marginLeft: "20px" }}>
//           <div style={{ marginBottom: "20px" }}>
//             <ProductById />
//           </div>
//           <div style={{ marginBottom: "20px" }}>
//             <ProductList />
//           </div>
//           <div style={{ marginBottom: "20px" }}>
//             <CreateProduct />
//           </div>
//           <div>
//             <DeleteProduct />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;
