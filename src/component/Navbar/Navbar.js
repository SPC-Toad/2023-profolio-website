import React from 'react'
import './Navbar.css';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return(
    <>
        <nav className='navbar'>
            <a href='./'>
                <FontAwesomeIcon icon={faHome} className='home-icon'/>
            </a>
            <ul>
                <li>
                    <a href='./about'>About</a>
                </li>
                <li>
                    <a href='./contact'>Contact</a>
                </li>
            </ul>
        </nav>
    </>
  )
}
