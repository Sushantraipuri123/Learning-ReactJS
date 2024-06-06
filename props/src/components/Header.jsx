import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className='flex  bg-slate-500 px-8 py-2'>
        <ul className='flex gap-6'>
            <li className=''>Home</li>
            <li>About</li>
            <li>Cards</li>
            <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
