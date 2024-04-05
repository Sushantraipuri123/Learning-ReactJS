import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Floatbtn from './components/Floatbtn';

function App() {
  const [color, setColor] = useState("secondary")
  const [disable, setDisable] = useState(false)
  const [includes, setIncludes] = useState(true)
  const [likes, setLikes] = useState(0)

  let customBtn = ()=>{
     alert("I Was Clicked")
     setDisable(true)
  }

  const handleLikes = () => {
    setLikes(likes === 0 ? 1 : 0);
  };

  return (
    <>
      
      <Button
       variant="outlined" 
       color={color}
       onClick={()=>{customBtn()}}
       disabled={disable}
       >MUI button</Button>
       
       <h1>MUI Button Group</h1>

       <ButtonGroup variant='contained' orientation='horizontal'>
       <Button>one </Button>
       <Button>two </Button>
       <Button>three</Button>

       </ButtonGroup>

       <h1>MUI Check box</h1>
       <Checkbox color='secondary' value={includes} disableRipple onClick={()=>{console.log(includes)}} onChange={()=>{setIncludes(!includes)}}/>

       <h1>Like Dislike Check box</h1>
       <Checkbox  color='secondary'   onChange={handleLikes} icon={<BookmarkBorderIcon  />} checkedIcon={<BookmarkIcon  />} /> {likes}
         
         <div className='floatbtn'>

       <Floatbtn/>
         </div>
    </>
  )
}

export default App
