import { useState } from 'react'
import './App.css'

function App() {
  const [pass, setPass] = useState(false)

  return (
    <>
   <h1 className=' bg-slate-500 mb-9'>Show Hide Password</h1>

   <input type={pass ? "text":"password"}
   className=' bg-blue-200 px-3 py-1 rounded-full focus:outline-none'
   placeholder='Your pass'
   />

   <button
   onClick={()=>setPass(!pass)}
   >{pass?"":""}</button>
    </>
  )
}

export default App
