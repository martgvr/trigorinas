import './header.css'
import React from 'react'

function Header() {
  return (
    <div className='Header flex-row'>
        <div className='Header__gradient'></div>
        <ul className='flex-row'>
            <li>Home</li>
            <li>Productos</li>
            <li>Contactanos</li>
        </ul>
    </div>
  )
}

export default Header