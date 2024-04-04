import React from 'react'
import './ContactUs.css'
import contact from '../../../public/contactUs.svg'

const ContactUs = () => {
  return (
    <>
      <div className="contact-container">
        <div className="container-info-container">
          <div className="container-infor-wrapper">
            <h1>Contact Us</h1>
            <input type="text" placeholder='Please enter your Full Name' className='contact-us-input-name' />
            <input type="email" placeholder='Please enter your Email Address' className='contact-us-input-name' />
            <input type="text" placeholder='Message' className='contact-us-input-msg'/>
            <button className='contact-us-btn'>Send Message</button>
          </div>
        </div>
        <div className="container-info-image-container">
          <img src={contact} alt="" />
        </div>
      </div>
    </>
  )
}

export default ContactUs