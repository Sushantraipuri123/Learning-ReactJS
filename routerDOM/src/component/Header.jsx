import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <div>
      <nav>
        <ul className=' d-flex gap-5 list-unstyled'>
            <NavLink to="/" className=' text-decoration-none text-black' >
                <li>Home</li>
            </NavLink>
            <NavLink to="/about" className=' text-decoration-none text-black'>
                <li>About</li>
            </NavLink>
            <NavLink to="/contact" className=' text-decoration-none text-black'>
                <li>Contact</li>
            </NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Header
