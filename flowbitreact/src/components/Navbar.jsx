import React from 'react'
import { NavLink, Link } from 'react-router-dom';

import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

function Navbar() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
      <NavLink><Link to='/'>Home</Link></NavLink>
      <NavLink><Link to="/about">About</Link></NavLink>
      <NavLink><Link to="/service">Services</Link></NavLink>
      </NavbarCollapse>
    </Navbar>
  );
}





















// function Navbar() {
//   return (
//   <nav>
//     <ul className=' flex gap-5 text-xl bg-slate-200 p-5'>
//       <NavLink><Link to='/'>Home</Link></NavLink>
//       <NavLink><Link to="/about">About</Link></NavLink>
//       <NavLink><Link to="/service">Services</Link></NavLink>
//     </ul>
//   </nav>
//   );
// }

export default Navbar
