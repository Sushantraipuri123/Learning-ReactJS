import React, { useState,useContext } from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const[name,setName]=useState("")
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext)

    const handleSubmit =(e)=>{
        e.preventDefault();
        setUser(name,password)
    }
    
    return(
        <>
        <input type="text" placeholder='Name'
        value={name}
        onChange={(e)=> setName(e.target.value)}
         />
         {""} <br />
        <input className='mt-2 outline-none' type="text" placeholder='Password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
         />
         {""} <br />
        <button
        className=' bg-purple-400 px-3 py-2 rounded-xl mt-2'
         onClick={handleSubmit}>
            Submit
        </button>
        </>
    )
}

export default Login;