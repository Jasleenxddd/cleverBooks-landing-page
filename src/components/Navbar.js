import React,{useState} from 'react'
import { Link } from 'react-scroll';
import './Navbar.css';
import Book from './book.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      {/* <div className="navbar-logo"> */}
        <img src={Book} className='img'/>
        <p className='kety'>CleverBooks</p>
        {/* </div> */}
      <ul className="navbar-links">

        <li><a href="#product">Product</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#industry">Industry</a></li>
        <li><a href="#stories">Customer Stories</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#blog">Blog</a></li>
        
        
        <li><a href="#login" className='login'>Login</a></li>
        </ul>
        <ul className='navbar-l'>
        <li><button className='contact'>Contact</button></li>
        </ul>
      
      
    </nav>
    
  )
}

export default Navbar
