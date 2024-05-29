import { useState } from 'react'
import Controls from './components/Controls/Controls'
import TextArea from './components/TextArea/TextArea'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className=' text-center pt-4'>
   <h1 className=' text-2xl'> Text To Speach</h1>
   <hr  className=' my-4'/>
  <TextArea/>
   <Controls/>
   
   </div>
  )
}

export default App
