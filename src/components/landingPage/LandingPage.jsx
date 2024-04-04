import React from 'react';
import './LandingPage.css'
import './LandingPageMedia.css'
import Header from '../header/Header';
import webDevelopmentImage1 from '../../assets/webDevelopmentImage1.jpg'
import { useNavigate } from 'react-router-dom';
import Offer from '../offer/Offer';
import webDevelopment1 from '../../../public/webDevelopment1.jpg'
import webDevelopment2 from '../../../public/webDevelopment2.jpg'
import Footer from '../footer/Footer';

const LandingPage = () => {
  const nav = useNavigate()
  return (
    <div className='landingPage-mainBody'>
      <Header />
      <div className="hero-section-main-container">
        <div className="hero-section-wrapper">
          <div className="hero-section-wrapper-left">
            <div className="hero-section-content-container">
              <h1>Discover the Magic of Web Development</h1>
              <p>From pixels to possibilities, web development is where imagination becomes reality. With every line of code and design element, you have the power to shape the digital world. It's a journey where creativity knows no bounds, where every idea can take form and every concept can come to life. Embrace the magic of web development, where your imagination is the only limit.</p>
              <button onClick={()=>{
                nav('/about_us')
              }}>Learn more</button>
            </div>
          </div>
          <div className="hero-section-wrapper-right">
            <img src={webDevelopmentImage1} alt="image about web development" />
          </div>
        </div>
      </div>
      <div className="frontEnd-roles-container">
        <div className="frontEnd-roles-wrapper">
          <div className="frontEnd-role-img">
            <img src={webDevelopment1} alt="frontend image" />
          </div>
          <div className="frontEnd-role">
            <h1>Role of a Front-End Developer</h1>
            <p>Front-end developers convert web designs into HTML, JavaScript, or CSS code. They work to link design and technology, while packaging the utility of back-end data to create something attractive for users to engage with. Their role covers everything from layout to content, images, and internal links.</p>
            <p>Front-end developers focus on user experience. They work to eliminate bugs and errors on the front end and ensure that the design appears as it’s supposed to, including across different platforms and browsers. The job of a front-end developer demands both creative and technical expertise. Their major responsibilities include:</p>
            <ul>
              <li>
                Production and maintenance of websites and web application user interfaces
              </li>
              <li>
                Utilizing HTML, CSS, and JavaScript to bring ideas to life
              </li>
              <li>
                Building tools that enhance interaction with the site in any browser
              </li>
              <li>
                Implementing design for mobile sites
              </li>
              <li>
                Maintaining software workflow management
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="get-into-tech-container">
        <div className="get-into-tech-wrapper">
          <div className="get-into-tech-content">
            <h1>How To Get Into Tech (With Little to No Experience)</h1>
            <p>Choosing a new career path like technology is a huge decision that needs careful planning to ensure success. From researching the job market to developing tech skills, there are many components you need to consider before taking a plunge.</p>
            <p>You may think that hiring managers won’t give you a chance if you’re lacking practical experience. But there are many ways to demonstrate that you’re a tech-savvy professional eager to learn more and make a mark in the industry. </p>
            <h2>Here’s what you can do:</h2>
            <ul>
              <li>
                Develop relevant tech skills
              </li>
              <li>
                Follow tech experts on social media
              </li>
              <li>
                Use the power of networking
              </li>
              <li>
                Implementing design for mobile sites
              </li>
              <li>
                Shadow someone in the industry
              </li>
              <li>
                Volunteer for a tech company
              </li>
              <li>
                Get involved in open-source projects
              </li>
              <li>
                Subscribe to industry newsletters
              </li>
            </ul>
          </div>
          <div className="get-into-tech-image">
            <img src={webDevelopment2} alt="" />
          </div>
        </div>
      </div>
      {/* <div className="offer-main-container">
          <h1>what we offer</h1>
        <div className="offer-wrapper">
          <Offer/>
        </div>
      </div> */}
      <div className="footer-holder">
        <Footer/>
      </div>
    </div>
  )
}

export default LandingPage