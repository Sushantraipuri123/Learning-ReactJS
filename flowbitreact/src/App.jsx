import { useState } from 'react'
import { Button } from 'flowbite-react';
import './App.css'
import { Card } from 'flowbite-react';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
<h1 className=' bg-slate-400 text-3xl'> 
Learning  flowbite 
</h1>

<Card href="#" className="max-w-sm mt-10">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
<Button outline gradientDuoTone="purpleToBlue" className=' mt-7 focus:outline-none'>
        Purple to Blue
      </Button>
    </Card>


   </>
  )
}

export default App
