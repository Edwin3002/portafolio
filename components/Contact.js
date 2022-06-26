import React from 'react'
import {Github, Linkedin, Mail } from '../icons/icons'

const Contact = () => {
  return (
    <div id='contact' className='mx-auto w-full'>
      <div className='mx-auto w-3/4'>
        <h2 className='font-bold text-3xl lg:text-4xl'>Contact</h2>
        <p className='my-6 text-xl lg:text-2xl'>
          Contact me if you want us to work together.
        </p>
        <div className='container my-16 flex justify-around'>
          <div className='card'>
            <a href='https://www.linkedin.com/in/edwin-vargas-ayala/' target=' _blanck'>
              <div className='logo'><Linkedin /></div>
              <div className='logoName'>Linkedin</div>
            </a>
          </div>
          <div className='card'>
            <a href='https://github.com/Edwin3002' target=' _blanck'>
              <div className='logo'><Github /></div>
              <div className='logoName'>Github</div>
            </a>
          </div>
          <div className='card'>
            <a href='mailto:vargas11742@gmail.com' target=' _blanck'>
              <div className='logo'><Mail /></div>
              <div className='logoName'>Mail</div>
            </a>
          </div>
        </div>
      </div>
      <footer className='text-center py-6'>
        Copyright © 2022. @
        <a href="/">
          Edwin
        </a> -
        All Rights Reserved
      </footer>
    </div>
  )
}

export default Contact