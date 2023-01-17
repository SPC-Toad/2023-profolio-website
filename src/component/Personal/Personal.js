import React from 'react'
import './Personal.css';

import army from '../../visuals/army.jpg'
import coding from '../../visuals/coding-background.jpg'
import goal from '../../visuals/tunnel.jpg'

export default function Personal() {
  return (
    <>
      <div className='personal-card-container'>
        <div className='cards'>
          <div className='left-card'>
            <img id='description-pic'  src={coding} />
            <div className='right-box'>
              <div className='text-box'>
                <div className='title'>How did I start coding?</div>
                <p>
                  I first stepped into Computer Science world during high school. I was taking AP Computer Science Class. 
                  Although I was not doing great in grade-wise, but I loved what you could do with programming languages and the infinite challenges the developer might face.
                  From there I decided to become Computer Science Major, and still loving it!
                </p>
              </div>
            </div>
          </div>
          <div className='right-card'>
            <div className='left-box'>
              <div className='text-box'>
                <div className='title'>Why did I join the military?</div>
                <p>
                  I joined U.S. Army reserves a month after graduation of high school. I wanted to have multiple different experiences in life.
                  After joining Army, I became more social, hardened my mental toughiness, and learned discipline.
                </p>
              </div>
            </div>
            <img id='description-pic'  src={army} />
          </div>
          <div className='left-card'>
            <img id='description-pic'  src={goal} />
            <div className='right-box'>
              <div className='text-box'>
                <div className='title'>So what is my final goal?</div>
                <p>
                This is a difficult question to answer. 
                However, after hearing various painful war stories from military members, I want to help former and current military members to the best of my abilities. 
                To achieve my goal, I am trying to gain significantly more experience with programming-languages and problem-solving skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
