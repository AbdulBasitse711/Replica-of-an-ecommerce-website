import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from "./components/Pages/Home.jsx"
import ProductDescription from './components/Pages/ProductDescription.jsx'
import Cart from './components/Pages/Cart.jsx'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />} />
    <Route path='product/:productName' element={<ProductDescription />} sensitive={false} >
    </Route>
    <Route path='cart' element={<Cart />} />
  </Route>

))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
) 
