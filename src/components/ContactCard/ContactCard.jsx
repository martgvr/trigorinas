import React from 'react'
import './contactcard.css'

function ContactCard({ name, image, description }) {
  return (
    <div className='ContactCard flex-row'>
        <img src={image} alt="" />
        <div>
            <p>{name}</p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ContactCard