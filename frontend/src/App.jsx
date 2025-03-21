import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Collection from "../src/pages/Collection";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Product from "../src/pages/Product"
import Cart from "../src/pages/Cart";
import Login from "../src/pages/Login";
import PlaceOrder from "../src/pages/PlaceOrder";
import Orders from "../src/pages/Orders";
import  Navbar  from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[5vw] lg:px-[9vw] flex flex-col min-h-screen">
     <ToastContainer/>
      <Navbar />
      <SearchBar/>
     <main className="flex-grow">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
     </main>
      <Footer/>
    </div>
  );
};

export default App;
