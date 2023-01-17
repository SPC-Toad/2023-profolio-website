import React from 'react'
import './Personal.css';

import army from '../../visuals/army.jpg'
import coding from '../../visuals/coding-background.jpg'
import goal from '../../visuals/tunnel.jpg'
import forest from '../../visuals/nature.jpg';

export default function Personal() {
  return (
    <>
      <img className='background-img' src={forest}></img>
      <div className='personal-card-container'>
        <div className='cards'>
          <div className='left-card'>
            <img id='description-pic'  src={coding} />
            <div className='right-box'>
              <div className='text-box'>
                <div className='title'>How did I start coding?</div>
                <p>
                  Description
                </p>
              </div>
            </div>
          </div>
          <div className='right-card'>
            <div className='left-box'>
              <div className='text-box'>
                <div className='title'>How did I start coding?</div>
                <p>
                  Description
                </p>
              </div>
            </div>
            <img id='description-pic'  src={coding} />
          </div>
          <div className='left-card'>
            <img id='description-pic'  src={coding} />
            <div className='right-box'>
              <div className='text-box'>
                <div className='title'>How did I start coding?</div>
                <p>
                  Description
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
