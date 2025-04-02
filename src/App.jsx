
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import React from 'react'


import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import CartPage from "./pages/CartPage";
import WomenPage from "./pages/WomenPage";
import MenPage from "./pages/MenPage";
import NotFoundPage from "./pages/NotFoundPage"
import { CartProvider } from "./components/CartProvider";
import EachProductPage from "./pages/EachProductPage";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<MainLayout/>}>
    <Route index element={<HomePage />}/>
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="/women" element={<WomenPage/>}/>
    <Route path="/men" element={<MenPage/>}/>
    <Route path="/products/:id" element={<EachProductPage/>}/>
    <Route path="/profile" element={<ProfilePage/>}/>
    <Route path="/contact" element={<ContactPage/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
</Route>
  )
);

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
  )
}
export default App