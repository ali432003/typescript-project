import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react'
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer } from "react-toastify";
import { ToastAlert } from "./utils/toast"


interface dataType {
  readonly id : number
  thumbnail : string
  title : string
  price : number
  description : string
  images : string[]
  rating : number
}

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
      <div className="text-xl flex flex-wrap justify-center gap-2">
        
        hello world!
        
      </div>

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
