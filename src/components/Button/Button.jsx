import React from 'react'
import './button.css'

function Button({ text }) {
  return (
    <div className='Button'><a href="#products">{text}</a></div>
  )
}

export default Button