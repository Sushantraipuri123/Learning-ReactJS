import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Service from './components/Service.jsx';
import Layout from './Layout.jsx';



const router = createBrowserRouter([
 {
  path:"/",
  element:<Layout/>,
  children:[
    {
      path: "/",
      element: <Home/>,
    },  
    {
      path: "/about",
      element: <About/>,
    },
     {
      path: "/service",
      element: <Service/>,
    },
  ]
 }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
