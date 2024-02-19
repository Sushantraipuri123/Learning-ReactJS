import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
   
    if(!user) return <div className='mt-3'>Please Login</div>

    return <div className='mt-3'>login Success {user}</div>
}

export default Profile;