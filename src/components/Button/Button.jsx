import './button.css'
import React from 'react'

function Button({ text }) {
  return (
    <div className='Button'><a href="#products">{text}</a></div>
  )
}

export default Button