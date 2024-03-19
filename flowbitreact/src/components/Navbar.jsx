import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { loginWithRedirect } = useAuth0();

  const { logout } = useAuth0();
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-slate-300 md:p-5 sm:p-2 flex justify-between'>
      <div className='hidden md:flex gap-5  text-xl '>
        <NavLink to='/'
          className={({ isActive }) => `${isActive ? " text-red-400" : " text-black"}`}
        >Home</NavLink>
        <NavLink to="/about"
          className={({ isActive }) => `${isActive ? " text-red-400" : " text-black"}`}
        >About</NavLink>
        <NavLink to="/service"
          className={({ isActive }) => `${isActive ? " text-red-400" : " text-black"}`}
        >Services</NavLink>

      </div>
      <button
        className='text-2xl font-bold p-4 text-red-600 md:hidden'
        onClick={toggleNavbar}
      >
        {isOpen ? 'X' : '☰'}
      </button>
      {isOpen && (
        <div >
          <div className='md:hidden flex flex-col gap-5 text-xl p-2'>

          <NavLink to='/' className={({ isActive }) => `${isActive ? " text-red-400" : " text-black"}`}
            onClick={toggleNavbar} >Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `${isActive ? " text-red-400" : " text-black"}`} onClick={toggleNavbar} >About</NavLink>
          <NavLink to="/service" className={({ isActive }) => `${isActive ? " text-red-400" : " text-black"}`} onClick={toggleNavbar} >Services</NavLink>
          </div>
        </div>
      )}

      <div className=' flex gap-3 '>
      <Button
      onClick={() => loginWithRedirect()}
       as="span" className="cursor-pointer hover:bg-black duration-700 hover:rounded-full" color='blue' >
        Sign up
      </Button> 

      <Button
     onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
       as="span" className="cursor-pointer" color='blue' pill>
      Log out 
      </Button>
    
      </div>
    </nav>
  );
}

export default Navbar;
