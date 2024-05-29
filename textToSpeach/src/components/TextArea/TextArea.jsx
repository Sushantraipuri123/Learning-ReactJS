import React, { useEffect, useState } from 'react'



function TextArea() {
    const [text, setText] = useState()
    const [stopped, setStopped] = useState(false)
    console.log(text, "hsdjh")

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(text);

        return () => {
            synth.cancel();
          };
    }, [text])

    const handleSpeak = () => {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);

        if(stopped){
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
