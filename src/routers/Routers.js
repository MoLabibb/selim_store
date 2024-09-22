import React from 'react'
import { Route, Routes, Navigate } from 'react-router'
import Home from '../pages/home/Home'
import Shop from '../pages/shop/Shop'
import Cart from '../pages/cart/Cart'
function Routers() {
  return<Routes>
      <Route path='/' element = { <Navigate to= 'home' />} />
      <Route path='/selim' element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/cart' element={<Cart />} />
  </Routes>
}
  
export default Routers ; 