import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/dashboard/Home";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import Cart from "./pages/cart/Cart";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/category/:id" element={<CategoryPage/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
