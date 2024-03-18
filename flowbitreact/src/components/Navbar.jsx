import React from 'react'
import { NavLink, Link } from 'react-router-dom';


function Navbar() {
  return (
  <nav>
    <ul className=' flex gap-5 text-xl bg-slate-200 p-5'>
      <NavLink><Link to='/'>Home</Link></NavLink>
      <NavLink><Link to="/about">About</Link></NavLink>
      <NavLink><Link to="/service">Services</Link></NavLink>
    </ul>
  </nav>
  );
}

export default Navbar
