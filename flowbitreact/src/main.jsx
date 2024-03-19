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
import { Auth0Provider } from '@auth0/auth0-react';



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
  <Auth0Provider
    domain="dev-h76gimkidp7t0m0i.us.auth0.com"
    clientId="arcvZTXvhx2EAExZWexVoliJxhoL0smd"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={router} />
    </Auth0Provider>,
)
