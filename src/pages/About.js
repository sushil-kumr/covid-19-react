import React from 'react'

import Helmet from 'react-helmet'

 
export default function About() {
    return (<>

        <Helmet></Helmet>

        <div className="menu-mobile menu-activated-on-click color-scheme-light">
          <div className="mm-logo-buttons-w">
            <a className="mm-logo" href="index.html"><img src="img/logos2.png"/><span></span></a>
            <div className="mm-buttons">
              <div className="mobile-menu-trigger">
                <div className="os-icon os-icon-hamburger-menu-1"></div>
              </div>
            </div>
          </div>
          <div className="menu-and-user" style={{display: "none"}}>
        
            {/* <!--------------------
            START - Mobile Menu List
            --------------------> */}
            <ul className="main-menu">
                
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
              <li>
                <a href="#">Helplines and Support</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Donate</a>
              </li>    
              
        
            </ul>
            {/* <!--------------------
            END - Mobile Menu List
            --------------------> */}
          </div>
        </div>

        <div className="menu-w color-scheme-light fixed-top color-style-default menu-position-top menu-layout-compact sub-menu-style-over sub-menu-color-bright selected-menu-color-bright menu-activated-on-hover menu-has-selected-link">
          <div className="logo-w">
             <div className="logo-w menu-size">
                 <a className="logo" href="index.html">
                <img src="img/logos2.png" alt="logo" width="100%"/>
                </a>
          </div>
          </div>
            
          <div className="top-bar color-scheme-light">
            <ul>
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
              <li>
                <a href="#">Helplines and Support</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Donate</a>
              </li>    
            </ul>
          </div>    
            
        </div>
        </>
    )
}
