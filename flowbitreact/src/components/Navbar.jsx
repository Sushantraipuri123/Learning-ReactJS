import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'flowbite-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-slate-300 p-5 flex justify-between'>
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
        <div className='md:hidden flex flex-col gap-5 text-xl p-5'>
          <NavLink to='/' className={({ isActive }) => `${isActive ? " text-red-400" : " text-black"}`}
            onClick={toggleNavbar} >Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `${isActive ? " text-red-400" : " text-black"}`} onClick={toggleNavbar} >About</NavLink>
          <NavLink to="/service" className={({ isActive }) => `${isActive ? " text-red-400" : " text-black"}`} onClick={toggleNavbar} >Services</NavLink>
        </div>
      )}

      <div>
      <Button as="span" className="cursor-pointer" color='blue' pill>
        Sign up
      </Button>
      </div>
    </nav>
  );
}

export default Navbar;
