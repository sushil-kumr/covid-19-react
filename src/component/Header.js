
import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import "./Header.css"
import { CSSTransition } from "react-transition-group";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (<>


    <div className="menu-mobile menu-activated-on-click color-scheme-light">
           <div className="mm-logo-buttons-w">
             <Link className="mm-logo" to="/" onClick={() => window.location.reload(false)}><img src="img/logos2.png"/><span></span></Link>
            <div className="mm-buttons">
              <div className="mobile-menu-trigger">                 
              <div onClick={toggleNav} className="os-icon os-icon-hamburger-menu-1"></div>
              </div>
             </div>
           </div>

      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
           <Link to="/">Home</Link >             
           <Link to="/help">Helpline No.s</Link >             
         </nav>
        </CSSTransition>
       </div>

    <div className="menu-w  color-scheme-light fixed-top color-style-default menu-position-top menu-layout-compact sub-menu-style-over sub-menu-color-bright selected-menu-color-bright menu-activated-on-hover menu-has-selected-link">
       <div className="logo-w">
           <div className="logo-w menu-size">
                <Link  to="/" className="logo" onClick={() => window.location="/"}>
                <img src='img/logos2.png' className="Logo" alt="logo" />
                 </Link >
           </div>
           </div>
     
     
        <div className="top-bar color-scheme-light">
       
        <ul>
           <li className="">
                 <Link to="/">Home</Link >
               </li>
              <li>
                 <Link to="/help">Helpline No.s</Link >
              </li>
            </ul> 
        </div>
    </div>
    </>
  );
}
