import React from 'react'
import {Link} from 'react-router-dom'

// const menuItems = [
//   'projects',
//   'about',
// ];

export default function Header() {
    return (
        <>
        <div className="menu-mobile menu-activated-on-click color-scheme-light">
          <div className="mm-logo-buttons-w">
            <Link className="mm-logo" to="/"><img src="img/logos2.png" alt=""/><span></span></Link>
            <div className="mm-buttons">
              <div className="mobile-menu-trigger">
                <div className="os-icon os-icon-hamburger-menu-1"></div>
              </div>
            </div>
          </div>
          <div className="menu-and-user">
{/*         
            <!--------------------
            START - Mobile Menu List
            --------------------> */}
            {/* <ul className="main-menu">
                
            <li className="active">
                <Link to="/">Home</Link >
              </li>
              <li>
                <Link to="/analytics">Analytics</Link >
              </li>
              <li>
                <Link to="/help">Helplines and Support</Link >
              </li>
              <li>
                <Link to="/about">About</Link >
              </li>
              <li>
                <Link to="/donate">Donate</Link >
              </li>  
        
            </ul> */}
            {/* <!--------------------
            END - Mobile Menu List
            --------------------> */}
          </div>
        </div>
        <div className="menu-w color-scheme-light fixed-top color-style-default menu-position-top menu-layout-compact sub-menu-style-over sub-menu-color-bright selected-menu-color-bright menu-activated-on-hover menu-has-selected-link">
          <div className="logo-w">
             <div className="logo-w menu-size">
                 <Link  to="/" className="logo">
                <img src="img/logos2.png" alt="logo" width="100%"/>
                </Link >
          </div>
          </div>
            
          <div className="top-bar color-scheme-light">
            {/* <ul>
              <li className="active">
                <Link to="/">Home</Link >
              </li>
              <li>
                <Link to="/analytics">Analytics</Link >
              </li>
              <li>
                <Link to="/help">Helplines and Support</Link >
              </li>
              <li>
                <Link to="/about">About</Link >
              </li>
              <li>
                <Link to="/donate">Donate</Link >
              </li>    
            </ul> */}
          </div>    
            
        </div>
        </>
    )
}
