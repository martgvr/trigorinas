import './header.css'
import React from 'react'

function Header() {
  return (
    <div className='Header flex-row'>
        <div className='Header__gradient'></div>
        <ul className='flex-row'>
            <li className='menu__item active'>Home</li>
            <li className='menu__item'>Productos</li>
            <li className='menu__item'>Contactanos</li>
        </ul>
    </div>
  )
}

export default Header