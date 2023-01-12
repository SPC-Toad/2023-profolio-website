import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';

// png and gif
import profilepng from '../../visuals/toad.gif'
import forest from '../../visuals/forest.mp4'

const contactBut = () => {
  return(
    () => <Link to='/about'></Link>
  );
}

export default function Home() {
  return (
    <>
      <video src={forest} alt='error' loop muted autoPlay />
      <div className='body-contents'>
        <div className='left-column'>
          <div className='text-box'>
            Hello there, <br /> 
            I am <strong>Kim</strong><br />
            Software Engineer
          </div>
          <button onClick={contactBut} className='contact-button'>How To Contact Me</button>
        </div>
        <img src={ profilepng } alt="tbu"/>
      </div>
    </>
  )
}
