import React from 'react'
import './Header.css'
import { CiShoppingCart, CiUser, CiSearch, CiMenuBurger } from "react-icons/ci";
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { MdClose } from 'react-icons/md';
import { useSelector } from 'react-redux';
function Header() {
  const cart = useSelector((state) => state.cart);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 767);
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 767);
      setMenuOpen(window.innerWidth > 767);
    };

      window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <section className='header'>
        <Container fluid>
          <div className='header__wrapper'>

                <div onClick={() => setMenuOpen((prev) => !prev)} className={`nav__links ${menuOpen ? ' show': isWideScreen ? ' show' : ' hide'}`}>
                    <NavLink className='nav__links_item' to={'home'}>Home</NavLink>
                    <NavLink className='nav__links_item' to={'/shop'}>Shop</NavLink>
                    <NavLink className='nav__links_item' to={'/cart'}>Cart</NavLink>
                    <NavLink className='nav__links_item' to={'/'}>Contact</NavLink>
                </div>

                <div className='logo'>
                  <NavLink className='logo__nav' to={'/'}><h1>SELIM</h1></NavLink>
                </div>




                <div className='header__icons'>
                    <div className='search__icon'><NavLink to={'/shop'}><CiSearch /></NavLink></div>
                    <div className='user__icon'><NavLink><CiUser /></NavLink></div>
                    <div className='cart__icon'><NavLink to={'/cart'}><CiShoppingCart /><span>{cart.length > 0 ? cart.length: 0}</span></NavLink></div>
                </div>
                
                <div onClick={() => setMenuOpen((prev) => !prev)} className='header__menu_icon'>{menuOpen ? <MdClose /> : <CiMenuBurger /> } </div>

                </div>
        </Container>
    </section>
  )
}

export default Header