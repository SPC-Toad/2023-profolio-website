import React from 'react'
import { Link } from 'react-router-dom';
import './Contact.css'

const linkedInBut = () => {
  return(
    () => <Link to='https://www.linkedin.com/in/sangyun-kim/'></Link>
  );
}

export default function Contact() {
  return (
    <>
    <div className='text-box'>
      <h1>Contact page!</h1>
      <div>SangyunKim2025@gmail.com</div>
      <button onClick={linkedInBut}>LinkedIn</button>
    </div>
    </>
  )
}
