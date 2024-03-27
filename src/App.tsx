import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react'
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer } from "react-toastify";
import { ToastAlert } from "./utils/toast"
import { Route,Routes } from 'react-router-dom';
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import Products from "./pages/Products"
import SellProducts from "./pages/SellProduct"
import Cart from "./pages/Cart"
import ProductDetails from "./pages/ProductDetails"



interface dataType {
  readonly id : number
  thumbnail : string
  title : string
  price : number
  description : string
  images : string[]
  rating : number
}

/**
 * Requirements
 * 1. E-commerce website: Create a
Full-stack e-commerce website in which
users can buy and sell products online.
The best example of such platforms can
be Amazon, Flipkart, etc.
 * 
 */

function App() {

  const [data, setData] = useState<dataType[]>([])

  const fetchApi = () => {
    axios.get("https://dummyjson.com/products?limit=10")
      .then((res) => {
        console.log(res.data.products);
        setData(res.data.products)
      })
      .catch((error) => {
        console.log(error);
      });
  }


  useEffect(() => {
    fetchApi()
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/sellProd' element={<SellProducts/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </>

  )
}

export default App
