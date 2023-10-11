import React from 'react'

import Header from '../header/Header'
import Routers from '../../Router/Routers'
import Footer from '../footer/footer'

const Layout = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
};

export default Layout;
