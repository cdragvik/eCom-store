import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Home} from './pages/Home.jsx';
import Contact from './pages/contact';
import { ProductPage } from './pages/ProductPage';




const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home></Home>
  }, 
  {
    path: "/contact", 
    element: <Contact></Contact>
  }, 
  {
    path: "/product/:id",
    element: <ProductPage />,
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
