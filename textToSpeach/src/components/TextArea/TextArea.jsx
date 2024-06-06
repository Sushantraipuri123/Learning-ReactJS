import React, { useEffect, useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function TextArea() {
    const [text, setText] = useState()
    const [stopped, setStopped] = useState(false)
    const [selectedValue, setSelectedValue] = useState('female');
    console.log(text, "hsdjh")

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(text);

        return () => {
            synth.cancel();
        };
    }, [text])

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
       
            alert(selectedValue)
      
    };

    const handleSpeak = () => {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);

        // const voices = synth.getVoices()

        // const femaleVoice = voices.find(voice=> voice.name.includes('Female')|| voice.name.includes('female') || voice.gender === 'female')
        // if (femaleVoice) {
        //     utterance.voice = femaleVoice;
        // }

        if (stopped) {
            synth.resume()
        }
        synth.speak(utterance);

    }
    const handleStop = () => {
        const synth = window.speechSynthesis;

        synth.cancel();


        setStopped(true)
    }

    const handleReset = () => {
        setText('');
    }

    return (
        <div className=' text-center pt-4'>
            <textarea name="text" id="text" cols={35} rows={9}
                className=' border-2 border-black bg-slate-200  p-3 rounded-md'
                placeholder='Write Text Here.....!'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            {/* select voice=== */}
            <div>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">select voice</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectedValue}
                        onChange={handleChange}
                        
                    >
                        <FormControlLabel  value="female" dissableRipple control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>
            </div>

            <div className=' flex flex-wrap gap-3 mt-3  justify-center '>
                <button className=' py-1 px-2 rounded bg-violet-500'
                    onClick={handleSpeak}
                > Speak </button>
                <button className=' py-1 px-2 rounded bg-violet-500'
                    onClick={handleStop}
                > Stop </button>
                <button className=' py-1 px-2 rounded bg-violet-500'
                    onClick={handleReset}
                > Reset </button>
            </div>
        </div>
    )
}

export default TextArea
