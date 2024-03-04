import { useState } from 'react'

function App() {
  const [color,setcolor ] = useState("skyblue")

  return (
   <div className=' h-screen w-full duration-300' style={{backgroundColor: color}}>
    
   <div className="flex justify-center">
   <div className="text-center border w-full mt-6 ms-14 rounded-3xl   shadow-2xl  me-14  py-3">
      <h1 className=' text-3xl font-bold capitalize'>{color}</h1>
    </div>
   </div>
    <div className='flex flex-wrap justify-center fixed py-2 bottom-14 inset-x-0'>
      <div className='flex flex-wrap bg-white shadow-2xl rounded-3xl px-4 py-2 gap-x-3'>
        <button
        onClick={()=> setcolor("red")}
        className=' outline-none px-5 py-2 bg-red-700 text-white capitalize rounded-full'>
          red
        </button>
        <button
        onClick={()=> setcolor("blue")}
         className=' outline-none px-5 py-2 bg-blue-700 text-white capitalize rounded-full'>
          blue
        </button>
        <button
        onClick={()=> setcolor("Green")}
        className=' outline-none px-5 py-2 bg-green-700 text-white capitalize rounded-full'>
          green
        </button>
        <button 
        onClick={()=> setcolor("olive")}
        className=' outline-none px-5 py-2 bg-lime-800 text-white capitalize rounded-full'>
          olive
        </button>
         <button 
        onClick={()=> setcolor("grey")}
        className=' outline-none px-5 py-2  bg-slate-400 text-white capitalize rounded-full'>
          gray
        </button>
        <button 
        onClick={()=> setcolor("Yellow")}
        className=' outline-none px-5 py-2 bg-yellow-300 text-black capitalize rounded-full'>
          yellow
        </button> 
          <button 
        onClick={()=> setcolor("pink")}
        className=' outline-none px-5 py-2  bg-pink-400 text-black capitalize rounded-full'>
          pink
        </button>
          <button 
        onClick={()=> setcolor("purple")}
        className=' outline-none px-5 py-2  bg-purple-600 text-white capitalize rounded-full'>
          purple
        </button>
        
      </div>

    </div>



   </div>
  )
}

export default App
