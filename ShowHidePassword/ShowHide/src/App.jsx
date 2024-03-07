import { useState } from 'react'
import './App.css'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
function App() {
  const [pass, setPass] = useState(false)

  return (
    <>
   <h1 className=' bg-slate-500 mb-9'>Show Hide Password</h1>

   <div className=' bg-blue-200 inline  px-3 py-3 rounded-lg'>


   <input type={pass ? "text":"password"}
   className=' bg-blue-200 px-3 py-1 focus:outline-none'
   placeholder='Your pass'
   />

   <button
   onClick={()=>setPass(!pass)}
   >{pass?<FaEye />:<FaEyeSlash />}</button>

   </div>

    </>
  )
}

export default App
