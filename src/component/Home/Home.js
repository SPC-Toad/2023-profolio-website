// import react and react-router
import React from 'react'
import { Link } from "react-router-dom";

// import files
import Card from '../Card/Card';
import './Home.css';

// png and gif
import profile from '../../visuals/profile.jpg'
import cqb from '../../visuals/cqb.jpg';
import old_website from '../../visuals/old-website.PNG';
import new_website from '../../visuals/new-website.PNG';
import workinprogress from '../../visuals/workinprogress.png';


export default function Home() {
  return (
    <>
      <div className='web-body'>

         {/* this is intro section! */}
        <div className='intro-section'>
          <div className='intro-left-column'>
            <div className='intro-text'>
              <p>Hello there, I am <br/>
                <div id='name'>Sangyun Kim</div>
                Software engineer! <br/>
                Currently persuing in <br/> 
                Bachelor's Degree Computer Science! <br/>
                Click the button below to learn more!
              </p>
            </div>
            <Link to='/about'><button className='about-me'>About me!</button></Link>
          </div>
          <img className='profile-pic' src={ profile } alt='Error'></img>
        </div>

         {/* this is project section! */}
        <div className='projects-section'>
          <div className='project-section-title'>Projects</div>
          <div className='first-row'>
            <Card 
              title='Web Development'
              description='
                Developed personal website using React JavaScript.
                Understanding router and router-DOM to navigate through different pages such as: home, about, contact page. 
                Ensured website functions as intended.
              '
              background_image={ new_website }
            />
            <Card 
              title='Web Development'
              description='
                Developed personal website using HTML, CSS, and JavaScript
                Explored website functionality such as inserting “about” page and “contact me” page.
                Ensured website functions as intended
              '
              background_image={ old_website }
            />
            <Card 
              title='Annual Training'
              description='
                Worked in 94th MP Company to inspect, service, maintain, repair, and test HMMWV, MTV, LMTV, and FMTV for 382nd Brigade.
                Experienced Field Training.
                Assisted Close Quarter Combat and hostage rescue scenarios alongside Military Police.
              '
              background_image={ cqb }
            />
          </div>
          <div className='second-row'>
          <Card 
                title='In Progress'
                description='
                  Comming Soon!
                '
                background_image={ workinprogress }
            />
            <Card 
                title='In Progress'
                description='
                  Comming Soon!
                '
                background_image={ workinprogress }
            />
            <Card 
                title='In Progress'
                description='
                  Comming Soon!
                '
                background_image={ workinprogress }
            />
            
            
          </div>
        </div>
      </div>
    </>
  )
}
