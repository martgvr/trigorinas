import './contact.css'
import React, { useEffect } from 'react'
import ContactCard from '../ContactCard/ContactCard'

import AOS from 'aos'
import 'aos/dist/aos.css'

function Contact() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='Contact flex-column' id='contact'>
        <div className='contact__divider'></div>
        <div className='contact__content flex-column' data-aos="zoom-in">
            <h1>Contactanos</h1>
            <div className='contact__cards--container flex-row'>
                <ContactCard name={'Ubicación'} description={'Ramos Mejía, Buenos Aires'} image={'https://cdn-icons-png.flaticon.com/512/2838/2838912.png'}/>
                <ContactCard name={'Instagram'} description={'https://www.instagram.com/trigorinas/'} image={'https://pixlok.com/wp-content/uploads/2021/07/Instagram-Free-Icon-rdfd.png'}/>
                <ContactCard name={'Whatsapp'} description={'15 1234 5678'} image={'https://cdn-icons-png.flaticon.com/512/597/597359.png'}/>
            </div>
        </div>
    </div>
  )
}

export default Contact