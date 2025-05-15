import { BrowserRouter, Routes, Route } from "react-router";

import AuthLayout from "./layouts/AuthLayout";
import NormalLayout from "./layouts/NormalLayout";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Profile from "./pages/Profile";
import Sales from "./pages/Sales";
import ProfileProducts from "./pages/ProfileProducts";

import MyProducts from "./pages/MyProducts";
import CreateProduct from "./pages/CreateProduct";
import ProductDetail from "./pages/ProductDetail";

import Home from "./pages/Home";
import PrivateRoute from "./router/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* {PÚBLICAS} */}
        <Route element={<AuthLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route element={<NormalLayout />}>
          {/* {PÚBLICA} */}
          <Route path="/" element={<Home />} />
          <Route path="profile/edit?">
            {/* {PRIVADAS} */}
            <Route element={<PrivateRoute />}>
              <Route index element={<Profile />} />
              <Route path="sales" element={<Sales />} />
            </Route>

            {/* {PÚBLICA} */}
            <Route path=":userId" element={<ProfileProducts />} />
          </Route>

          <Route path="products">
            {/* {PRIVADAS} */}
            <Route element={<PrivateRoute />}>
              <Route index element={<MyProducts />} />
              <Route path="add" element={<CreateProduct />} />
            </Route>
            {/* {PÚBLICA} */}
            <Route path=":productId" element={<ProductDetail />} />
          </Route>

          {/* 
            /products/add Registrar producto
            /products/{id} Detalle del producto
            /products/{id}/edit Editar producto

            /cart Ver mi carrito de compras

            /payments/create Pasarela de pagos
            /payments Historial de compras
        */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
