import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

const Layout = ({ children }) => {  
    return (
      <React.Fragment>
        <Header/>
          <main>{children}</main>
        <Footer/>
      </React.Fragment>
    )
};

export default Layout;
  
