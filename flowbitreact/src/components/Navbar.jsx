import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-slate-200'>
      <div className='hidden md:flex gap-5 text-xl p-5'>
        <NavLink to='/' exact activeClassName='active'>Home</NavLink>
        <NavLink to="/about" activeClassName='active'>About</NavLink>
        <NavLink to="/service" activeClassName='active'>Services</NavLink>
      </div>
      <button
        className='text-2xl font-bold p-4 text-red-600 md:hidden'
        onClick={toggleNavbar}
      >
        {isOpen ? 'X' : '☰'}
      </button>
      {isOpen && (
        <div className='md:hidden flex flex-col gap-5 text-xl p-5'>
          <NavLink to='/' exact activeClassName='active'>Home</NavLink>
          <NavLink to="/about" activeClassName='active'>About</NavLink>
          <NavLink to="/service" activeClassName='active'>Services</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
