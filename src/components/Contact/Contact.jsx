import './contact.css'
import React, { useEffect, useState } from 'react'
import { getData } from "../../services/firebase.service"

import AOS from 'aos'
import 'aos/dist/aos.css'

import Loading from '../Loading/Loading'
import ContactCard from '../ContactCard/ContactCard'

function Contact() {
  const [data, setData] = useState(null)

  useEffect(() => {
    AOS.init()
    getData("contact").then((res) => setData(res))
  }, [])

  return (
    <div className='Contact flex-column' id='contact'>
        <div className='contact__divider'></div>
        <div className='contact__content flex-column' data-aos="zoom-in">
            <h1>Contactanos</h1>
            <div className='contact__cards--container flex-row'>
              {
                data === null ?
                  <Loading text={'Cargando información de contacto'} txtColor={'#fff'} />
                  : 
                  data.map(item => <ContactCard name={item.name} description={item.description} image={item.image} link={item.link} />)
              }
            </div>
        </div>
    </div>
  )
}

export default Contact