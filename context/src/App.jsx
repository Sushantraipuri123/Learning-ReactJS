import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css';



function App() {


  return (
    <UserContextProvider >
      <h2 className=' mx-16 mb-6 text-3xl font-bold'> Login </h2>
      <Login/>
      <Profile/>

 
    </UserContextProvider>
  )
}

export default App
