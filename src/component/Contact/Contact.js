import React from 'react'
import './Contact.css';
import { SocialIcon } from 'react-social-icons';

import profile from '../../visuals/profile.jpg';

export default function Contact() {
  return (
    <>
        <div className='contact-intro'>
            <div className='contact-component'>
                <p className='contact-text-box'>
                    Thank you for stopping by! Contact me through these links below!
                </p>
                <img className='my-face' src={ profile } />
                <div className='gmail-and-github'>
                    <SocialIcon className='social-icons' network="mailto" style={{ height: 130, width: 130 }}/>
                    <SocialIcon  url='https://github.com/SPC-Toad' style={{ height: 130, width: 130 }}/>
                </div>
                <div id='email-text'>
                    SangyunKim2025@gmail.com
                </div>
                <div className='linked-in-icon'>
                <SocialIcon className='social-icons' url='https://www.linkedin.com/in/sangyun-kim/' style={{ height: 130, width: 130}}/>
                </div>
            </div>
        </div>
    </>
  )
}
