import React from 'react'
import { Link } from 'react-router-dom';
import './About.css';

const contactBut = () => {
  return(
    () => <Link to='/about'></Link>
  );
}

export default function About() {
  return (
    <>
      <div className='body-text'><strong>About Me</strong><br />
        I'm a Software Engineer who enjoys developing web-pages and data structures! <br />
        I have experience working with HTML/CSS, Javascript,
        and React for web-page development, and Python, 
        Java and C programming languages for data structures. <br />
        I'm currently pursuing a bachelor's degree in computer science 
        at the University of Massachusetts Boston.<br />
        To learn more about me, check out my resume!
      </div>
      <button onClick={contactBut}>Resume</button>
    </>
  )
}
