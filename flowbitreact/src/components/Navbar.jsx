import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Navbar } from 'flowbite-react';

function Navbar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} to="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavLink to="/" active>
          Home
        </NavLink>
        <NavLink  to="/about">
          About
        </NavLink>
        <NavLink to="/service">Services</NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}


export default Navbar
