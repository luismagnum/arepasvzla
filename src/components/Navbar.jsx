import React, { useState } from 'react';
import Nabar from './Nabar.css';
import img from '../image/logovzla.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
      <div className='Navbar'>
      <img className ='w-16 ml-12' src={img} alt=''/>
      <span className='nav-logo'>Sabores de Venezuela</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href='/home'>Home</a>
        <a href='#Seccion1'>Comidas</a>
        <a href='#shop'>Combos</a>
        <a href='/contact'>Contact</a>
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`}
       onClick={() => setIsOpen(!isOpen)}
       >
        <div className='bar'></div>
      </div>
      </div>
  )
}

export default Navbar
