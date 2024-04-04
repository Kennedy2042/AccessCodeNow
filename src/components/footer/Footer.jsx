import React from 'react';
import './Footer.css';
import './FooterMedia.css';
import { PiCopyrightLight } from 'react-icons/pi'

const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <div className='footer-what-we-offer-div'>
          <h2>What We Offer</h2>
          <ul>
            <li>
              Infrastructure
            </li>
            <li>
              Networking
            </li>
            <li>
              Security
            </li>
            <li>
              Software Development
            </li>
            <li>
              IT Consulting & Outsourcing
            </li>
            <li>
              Business & Analytics
            </li>
            <li>
              Training
            </li>
            <li>
              DevOps Consulting
            </li>
          </ul>
        </div>
        <div className='footer-our-product-div'>
          <h2>Our Products</h2>
          <ul>
            <li>Mobile Development</li>
            <li>Back-End Development</li>
            <li>Front-End Development</li>
            <li>AI Development</li>
            <li>Computer Development</li>
            <li>team Augmentation</li>
          </ul>
        </div>
        <div className='footer-other-link-div'>
          <h2>Other Links</h2>
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      <div className="footer-signature">
        <h1>AccessCodeNow</h1>
        <div className="footer-copyWrite-wrapper">
          <PiCopyrightLight />
          <p>2022 AccessCodeNow</p>
        </div>
      </div>
    </>
  )
}

export default Footer