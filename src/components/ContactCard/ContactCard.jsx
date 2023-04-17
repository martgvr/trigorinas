import React from 'react'
import './contactcard.css'

function ContactCard({ name, image, description, link }) {
  console.log(link);

  return (
    <a href={link}>

      <div className='ContactCard flex-row'>
          <img src={image} alt="" />
          <div>
              <p>{name}</p>
              <p>{description}</p>
          </div>
      </div>
    </a>
  )
}

export default ContactCard