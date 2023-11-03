import React from 'react';
import './Header.scss'
import  Logo from "../../assets/img/logo.png"

import { useRef } from "react";
import { FaBars, FaTimes ,FaShoppingCart} from "react-icons/fa";

const Header = () => {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav")}
      
  
  return (
    
     <header className="header">
      <a href="#" className="header-logo">    <img src={Logo}/>  </a>

      <div className="menu"  ref={navRef}>
        <ul className='menu-list'>
          <li><a href="#" className='menu-item-link'> Menu</a></li>
          <li><a href="#" className='menu-item-link'> About</a></li>
          <li><a href="#" className='menu-item-link'> Shop</a></li>
          <li><a href="#" className='menu-item-link'> Contact</a></li>
          <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
        </ul>
        <a href="#" className='menu-item-link-cart' >  <FaShoppingCart/>Cart</a>
      </div>
      <button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
     </header>
    
  )
}

export default Header
