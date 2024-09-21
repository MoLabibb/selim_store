import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from '../../routers/Routers'
function Layout() {
  return<>
    <Header />
          <div className='layout__content'><Routers /></div> 
    <Footer />
  </>
}

export default Layout