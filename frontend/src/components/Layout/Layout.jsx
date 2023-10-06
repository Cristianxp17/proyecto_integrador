import React from 'react'

import Header from '../header/header'
import Routers from '../../router/routers'
import Footer from '../footer/footer'

const layout = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
};

export default layout;
