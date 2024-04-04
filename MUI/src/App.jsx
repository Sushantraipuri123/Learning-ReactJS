import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';

function App() {
  const [color, setColor] = useState("secondary")
  const [disable, setDisable] = useState(false)

  let customBtn = ()=>{
     alert("I Was Clicked")
     setDisable(true)
  }

  return (
    <>
      
      <Button
       variant="outlined" 
       color={color}
       onClick={()=>{customBtn()}}
       disabled={disable}
       >MUI button</Button>
       
    </>
  )
}

export default App
