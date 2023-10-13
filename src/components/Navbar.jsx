import React, { useState } from 'react';
import Nabar from './Nabar.css';
import img from '../image/logovzla.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className='Navbar'>
      <img className ='w-14 ml-5' src={img} alt=''/>
      <span className='nav-logo'>Sabores de Venezuela</span>
      <div className={`nav-items ${isOpen && "open"}`}>
      <i class="fa-solid fa-house"></i>
        <a href='/home'>Home</a>
        <i class="fa-sharp fa-solid fa-users"></i>
        <a href='/Info'>Comidas</a>
        <i class="fa-brands fa-servicestack"></i>
        <a href='/Product'>Combos</a>
        <i class="fa-sharp fa-solid fa-address-book"></i>
        <a href='/contact'>Contact</a>
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`}
       onClick={() => setIsOpen(!isOpen)}
       >
        <div className='bar'></div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
