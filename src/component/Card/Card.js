import React from 'react'
import './Card.css'

function Card({title, description, background_image}) {
  return (
    <div className='card-container'>
        <div className='image-container'>
            <img src={background_image} alt='picture here'/>
        </div>
        <div className='card-content'>
            <div className='card-title'><h3>{ title }</h3></div>
            <div className='body-text'>
              <p>{ description }</p>
            </div>
            <button className='buttn'>
              <a>More</a>
            </button>
        </div>
    </div>
  )
}

export default Card