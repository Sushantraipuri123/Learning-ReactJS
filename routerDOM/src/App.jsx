import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'

function App() {
 
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Header/><Home/></>
    },
    {
      path:"/about",
      element:<><Header/><About/></>
    },
    {
      path:"/contact",
      element: <><Header/><Contact/></>
    },
  ])

  return (
   <>
   <h1 className=' border rounded-pill bg-danger'>Hello worls</h1>
   
       <RouterProvider router={router} />

   </>
  )
}

export default App
