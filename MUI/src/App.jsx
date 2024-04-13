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
import Typography from '@mui/material/Typography'

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

    <Typography variant="body1" color="initial" sx={ {textAlign:"justify", mt:8}}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit illum molestias dolorem recusandae impedit vitae sit saepe odit sapiente doloremque distinctio repellat fugit possimus voluptates iste alias asperiores tempore provident veniam nesciunt, laborum architecto harum. Harum mollitia animi consequatur, aliquid vero alias culpa voluptatem. Perferendis hic dolore alias quos ipsa quae dicta. Adipisci facere excepturi unde, consequuntur praesentium aperiam molestias facilis ea hic, voluptates enim, voluptate delectus tenetur necessitatibus placeat! Excepturi, earum quo enim porro a iure molestias autem magnam magni tenetur voluptate amet deleniti officiis et, odit quisquam dolorum pariatur fugit quam id corrupti asperiores aliquam nam culpa. Praesentium excepturi est doloribus explicabo, eligendi vero odit, natus maiores corporis autem repellendus ipsa. Minus praesentium, exercitationem ipsam modi possimus consequatur illo voluptatum omnis, molestiae natus et voluptatem, ea ad saepe. Cumque laudantium a, earum esse quasi nam aliquid similique molestiae facere consequatur sequi asperiores, harum vitae optio hic temporibus? Laborum, cupiditate suscipit. Et velit explicabo quidem voluptas vel distinctio, id magni vitae sed soluta temporibus aliquam doloribus dolore tempora ipsam, quia fuga. Laudantium iusto sed eligendi id! Mollitia in velit quibusdam quasi. Unde, ducimus repellat. Expedita reprehenderit laudantium error eius amet voluptatum quis veniam laboriosam nesciunt distinctio vel, deleniti velit nostrum consequuntur quae ad consectetur aliquam labore! Numquam, ratione aliquid eum voluptatum natus commodi sint harum molestiae quisquam, rerum tempore et possimus repellat est adipisci ea optio facere quos dolores obcaecati nesciunt aut voluptate distinctio? Repudiandae natus vero nihil, at omnis repellat laboriosam. Sit quidem temporibus eaque excepturi distinctio labore accusantium, tempora at, nihil autem ipsa? Fugiat corrupti aliquam eius incidunt. Dolor, consectetur eius. Optio modi assumenda laudantium expedita aspernatur possimus minus, nam quam exercitationem quas voluptate quaerat sapiente corporis atque unde accusamus quisquam hic tenetur dolorem earum. Magnam ducimus quibusdam magni officiis non dicta velit consequatur adipisci quam, corporis quisquam inventore illum ea laudantium, aliquam rerum temporibus soluta beatae, nihil et repellat? Nesciunt deleniti dolorem voluptas numquam quia adipisci officiis ipsam libero esse quasi vero, perferendis repudiandae sapiente tempora voluptates rem itaque? Quis, repellendus dolorem saepe quidem distinctio perferendis sequi impedit similique ipsa eligendi, eos totam accusamus, laudantium maiores asperiores quae neque laboriosam culpa aut blanditiis nesciunt sit ut. Enim nisi similique voluptatibus ipsam numquam velit veniam maxime voluptas tenetur odio commodi ea temporibus, omnis sit sequi modi excepturi eos, quis fuga aliquid sunt sint accusantium ratione distinctio? At ut illum ipsa laudantium adipisci modi quae odit ipsam excepturi repellendus alias itaque officia deleniti nihil, sunt vero culpa hic doloremque tempora corrupti consequuntur, nulla laborum dicta eveniet. At illo quidem assumenda odio similique quis, reprehenderit repudiandae maxime sequi eum aspernatur est iure veritatis laborum corrupti, in, molestias ratione. Nisi commodi aspernatur molestias architecto?
    </Typography>




    </>
  )
}

export default App
