import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <nav className='nav'>
       <ul>
            <li>
                <a href='#home'>Home</a>
            </li>
            <li>
                <a href='#story'>Story</a>
            </li>
            <li>
                <a href='#about'>About</a>
            </li>
       </ul>
    </nav>
  )
}

export default Navbar