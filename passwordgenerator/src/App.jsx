
import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  let [length, setlength] = useState(8)
  let [number, setnumber] = useState(false)
  let [character, setcharacter] = useState(false)
  let [onlynumber, setonlynumber]=useState(false)
  let [password, setpassword] = useState("")

  let passwordGenerator = useCallback(() => {
    let pass = ""
    let strng = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) strng += "0123456789"
    if (character) strng += "!@#$%&*"
    if(onlynumber) strng = "123456789"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * strng.length + 1)
      pass += strng.charAt(char)
    }

    setpassword(pass)
  }, [length, number, character,onlynumber, setpassword])

  const passRef=useRef(null)



  const copyPass = useCallback(()=>{
    passRef.current?.select()
     window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, number, character,onlynumber, passwordGenerator])



  return (
    <>
      <div className=' w-full max-w-xl mx-auto shadow-2xl bg-slate-700 text-white rounded-3xl my-12 px-4 py-3 '>
        <h1 className='text-center mb-4 text-2xl'>Password Generator</h1>
        <div className='flex overflow-hidden mb-4 shadow-lg rounded-full'>
          <input type="text"
            value={password}
            className=' outline-none w-full px-3 py-1 text-slate-700'
            placeholder='password'
            ref={passRef}
            readOnly
          />
          <button className='px-4 py-2 bg-slate-400' onClick={copyPass}>
            Copy
          </button>

        </div>
        <div className='text-sm flex gap-x-2'>
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={0}
              max={30}
              value={length}
              className=' cursor-pointer bg-slate-600'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label>Length: {length}</label>

          </div>
          <div className="flex items-center ms-9 gap-x-2">
            <input type="checkbox"
            defaultChecked={number}
            id='numberinput'
            onChange={()=>{
              setnumber((prev)=> !prev)
            }}
            />
            <label>Numbers</label>
            <input type="checkbox"
            defaultChecked={character}
            id='numberinput'
            onChange={()=>{
              setcharacter((prev)=> !prev)
            }}
            />
            <label>Character</label> 
            <input type="checkbox"
            defaultChecked={onlynumber}
            id='onlynumber'
            onChange={()=>{
              setonlynumber((prev)=> !prev)
            }}
            />
            <label htmlFor='onlynumber'>Only number</label>
          </div>

        </div>
      </div>





    </>
  )
}

export default App





























// import { useState,useCallback,useEffect,useRef } from "react";


// function App() {
//   const [length, setlength] = useState(8)
//   const [number,setnumber] = useState(false)
//   const[character,setcharacter]= useState(false)
//   const[password,setpassword]=useState("")

//   let passGEnerator = useCallback(()=>{
//     let passw=""
//     let strng="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if(number) strng+="0123456789"
//     if(character) strng+="!@#$%^&*|\_"

//     for (let i = 0; i < length; i++) {
//       let passwrd= Math.floor(Math.random() * strng.length +1)
//       passw += strng.charAt(passwrd)
//     }
//     setpassword(passw)
//   },[length,number,character,setpassword])

//   let Copyref= useRef(null)

//   let copyPass = useCallback(()=>{
//     Copyref.current?.select()
//     window.navigator.clipboard.writeText(password)
//   },[password])

//   useEffect(()=>{
//   passGEnerator()
//   },[length,number,character,passGEnerator])
//   return (
//     <>

//       <div className="flex flex-wrap items-center my-12 inset-x-5 justify-center pb-3  text-white bg-purple-700 mx-80 rounded-lg ">
//         <div className=" w-full max-w-3xl flex justify-center p-5 rounded-full">
//           <input type="text"
//           value={password}
//             className=" outline-none w-full rounded-s-3xl text-violet-500 ps-4 "
//             placeholder="Password"
//             ref={Copyref}
//             readOnly
//           />
//           <button className=" bg-purple-500 rounded-e-3xl ps-1 pe-2"
//           onClick={copyPass}
//           >
//             Copy
//           </button>

//         </div>

//         <div className="flex flex-wrap  gap-x-10  mt-2">
//           <div className="flex gap-3">
//             <input type="range"
//               min={0}
//               max={20}
//               className=" cursor-pointer"
//               onChange={(e)=>{
//                 setlength(e.target.value)
//               }}
//             />
//             <label htmlFor="">Length: {length}</label>
//           </div>
//           <div className="flex gap-3">
//             <input type="checkbox"
//             defaultChecked={number}
//               id="number"
//               onChange={()=>{
//                 setnumber((prev)=> !prev)
//               }}
//             />
            
//             <label htmlFor="number">Number-included</label>
//             <input type="checkbox"
//             defaultChecked={character}
//             onChange={()=>{
//               setcharacter((prev)=>!prev)
//             }}
//               id="spechar"
//             />
//             <label htmlFor="spechar">Special-Characters-included</label>
//           </div>

//         </div>



//       </div>


//     </>
//   )
// }


// export default App