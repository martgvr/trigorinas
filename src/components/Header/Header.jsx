import './header.css'
import React from 'react'

function Header() {
  return (
    <div className='Header flex-row'>
        <div className='Header__gradient'></div>
        <ul className='flex-row'>
            <li className='menu__item active'>Home</li>
            <li className='menu__item'><a href="#products">Productos</a></li>
            <li className='menu__item'><a href="#contact">Contactanos</a></li>
        </ul>
    </div>
  )
}

export default Header