import { useState } from 'react'

import './App.css'

function App() {

  const [show, setShow] = useState(false)

  const handleShow = ()=>{
    setShow(!show)
    
  }
  return (
   <>
   <h1 className=' text-2xl'>Show Hide Password </h1>
   <div className=' container mx-auto mt-3 max-w-52'>
<div className="border flex ">
   <input type={show ? 'text':'password'} className=' focus:outline-none' />
   <button onClick={handleShow} className=' bg-slate-200 w-full'>{show ? 'h':'s'}</button>
</div>
   </div>
   </>
  )
}

export default App
