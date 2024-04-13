import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Floatbtn from './components/Floatbtn';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { pink } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import HoriSlider from './components/Slider';
import Stack from '@mui/material/Stack';
import ThemeSwitch from './components/Theme';

function App() {
  const [color, setColor] = useState("secondary")
  const [disable, setDisable] = useState(false)
  const [includes, setIncludes] = useState(true)
  const [likes, setLikes] = useState(0)
  const [value, setValue] = useState('');


  const handleChange = (event) => {
    setValue(event.target.value);
    alert(value)
  };

  let customBtn = () => {
    alert("I Was Clicked")
    setDisable(true)
  }

  const handleLikes = () => {
    setLikes(likes === 0 ? 1 : 0);
  };

  return (
    <>

<div style={{display:"flex", justifyContent:"end"}}>
  <ThemeSwitch/>
</div>
      <Button
        variant="outlined"
        color={color}
        onClick={() => { customBtn() }}
        disabled={disable}
      >MUI button</Button>

      <h1>MUI Button Group</h1>

      <ButtonGroup variant='contained' orientation='horizontal'>
        <Button>one </Button>
        <Button>two </Button>
        <Button>three</Button>

      </ButtonGroup>

      <h1>MUI Check box</h1>
      <Checkbox color='secondary' value={includes} disableRipple onClick={() => { console.log(includes) }} onChange={() => { setIncludes(!includes) }} />

      <h1>Like Dislike Check box</h1>
      <Checkbox color='secondary' onChange={handleLikes} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} /> {likes}

      <div className='floatbtn'>
        <a href="#">
          <Floatbtn />
        </a>
      </div>


      <h1>MUI radio btn</h1>

      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="male" color='secondary' control={<Radio disableRipple color='secondary' />} label="Female" />
          <FormControlLabel value="female" color='secondary' control={<Radio disableRipple sx={{
            color: pink[800], '&.Mui-checked': {
              color: pink[600],
            },
          }} />} label="Male" />
        </RadioGroup>
      </FormControl>

      <h1>MUI Slider</h1>

      <Box sx={{ width: 300 , display:"flex", justifyContent:"center"}}>
      <Stack
        direction="row"
       
        spacing={22}
      >
      <Slider color='secondary' disableRipple defaultValue={20} step={20} marks min={10} max={110} valueLabelDisplay="auto" />

      <HoriSlider/>
      </Stack>
    </Box>

    <h1>MUI Select</h1>




    </>
  )
}

export default App
