import React, {useState} from 'react'
import './About.css'

// toad png
import toad from '../../visuals/toad.gif';

// web-development icon
import HTML from '../../visuals/html.png'
import CSS from '../../visuals/css.png'
import JS from '../../visuals/js.png'
import RT from '../../visuals/reacticon.png'

// data structure icon
import java from '../../visuals/java.png'
import python from '../../visuals/python.png'
import c_prog from '../../visuals/c_programming.png'

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  const mouseOver = () => {
    setIsVisible(true)
  }

  const mouseOut = () => {
    setIsVisible(false)
  }


  return (
    <>
      <div className='about-intro'>
        <div className='about-text-box'>
          <p>
            I'm a Software Engineer who enjoys developing web-pages and data structures!<br /><br />
            I'm currently pursuing a bachelor's degree in computer science at the University of Massachusetts Boston!<br /><br />
            I have experience developing web-page with:
            <ul>
              <li onMouseOver={mouseOver} onMouseOut={mouseOut}>
                HTML
                {isVisible && (
                    <div>
                      <img className='img_1' src={ HTML } alt='Error'/>
                    </div>
                  )
                }
              </li>
              <li onMouseOver={mouseOver} onMouseOut={mouseOut}>
                CSS
                {isVisible && (
                  <div>
                    <img className='img_1' src={ CSS } alt='Error'/>
                  </div>
                )
                }
              </li>
              <li onMouseOver={mouseOver} onMouseOut={mouseOut}>
                JavaScript
                {isVisible && (
                  <div>
                    <img className='img_1' src={ JS } alt='Error'/>
                  </div>
                )
                }
              </li>
              <li onMouseOver={mouseOver} onMouseOut={mouseOut}>
                React
                {isVisible && (
                  <div>
                    <img className='img_1' src={ RT } alt='Error'/>
                  </div>
                )
                }
              </li>
            </ul>
            I have experience developing data structures with:
            <ul>
              <li onMouseOver={mouseOver} onMouseOut={mouseOut}>
                Python
                {isVisible && (
                  <div>
                    <img className='img_2' src={ python } alt='Error'/>
                  </div>
                )
                }
              </li>
              <li onMouseOver={mouseOver} onMouseOut={mouseOut}>
                Java
                {isVisible && (
                  <div>
                    <img className='img_2' src={ java } alt='Error'/>
                  </div>
                )
                }
              </li>
              <li onMouseOver={mouseOver} onMouseOut={mouseOut}>
                C programming languages
                {isVisible && (
                  <div>
                    <img className='img_2' src={ c_prog } alt='Error'/>
                  </div>
                )
                }
              </li>
            </ul> 
          </p>
        </div>
      </div>
      <div className='resume-section'>
        <div>
          <p className='resume-text'>
            Thank you for stopping by! <br /><br />
            If learn more about me, check out the resume below!<br /><br />
            If learn more about personal side of me, check out the personal tab!<br /><br />
          </p>
          <button className='resume-button'>Resume (.pdf)</button>
        </div>
        <img className='toad-pic' src={ toad } alt='Error'></img>
      </div>
    </>
  )
}