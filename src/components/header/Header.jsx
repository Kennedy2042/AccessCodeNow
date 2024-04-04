import React, { useState } from 'react'
import './Header.css'
import './HeaderMedia.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'

const Header = () => {
    const [menu, setMenu] = useState(false);

    return (
        <div className='header-main-container'>
            <div className="header-main-wrapper">
                <div className="header-logo-container">
                    AccessCodeNow

                </div>
                <ul className='header-menu-wrapper'>
                    <li>
                        <a href="#/">Home</a>
                    </li>
                    <li>
                        <a href="#/contact_us">Contact Us</a>
                    </li>
                    <li>
                        <a href="#/about_us">About Us</a>
                    </li>
                    <li>
                        <a href="#/blog">Blog</a>
                    </li>
                </ul>
            </div>
            <div className="header-main-wrapper-mobile">
                <div className='header-mobile-logo-container'>
                    {/* <img src="" alt="logo" /> */}
                    ACCESSNOW
                </div>
                <div className='header-burger-menu-container'>
                    {
                        menu ? <IoMdClose
                            onClick={() => {
                                setMenu(false);
                            }}
                        /> :
                            <RxHamburgerMenu onClick={() => {
                                setMenu(true)
                            }} />}
                </div>
                {
                    menu ? <div className='header-mobile-menu'>
                        <ul>
                            <li>
                                <a href="#/">Home</a>
                            </li>
                            <li>
                                <a href="#/contact_us">Contact Us</a>
                            </li>
                            <li>
                                <a href="#/about_us">About Us</a>
                            </li>
                            <li>
                                <a href="#/blog">Blog</a>
                            </li>
                        </ul>
                    </div> : null
                }
            </div>
        </div>
    )
}

export default Header