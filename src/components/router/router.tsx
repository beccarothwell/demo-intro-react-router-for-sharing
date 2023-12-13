import { Route, Routes } from "react-router-dom";
import Home from "../home/home";
import MainLayout from "../layouts/main_layouts";
import About from "../about/about";
import Products from "../products/products";
import Help from "../help/help";
import Product from "../products/product/product";
import NotFound from "../not_found/not_found";

const Router = () => (
  <Routes>
    <Route path={"/"} element={<MainLayout />}>
      <Route index element={<Home />}></Route>
      <Route path={"products"} element={<Products />}></Route>
      <Route path={"products/:productId"} element={<Product />}></Route>
      <Route path={"about"} element={<About />}></Route>
      <Route path={"help"} element={<Help />}></Route>
      <Route path={"*"} element={<NotFound />}></Route>
    </Route>
  </Routes>
);
export default Router;
