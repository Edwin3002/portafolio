import React, { useState } from 'react'
import { techSkills } from '../data/skills'
import CardSkill from './CardSkill';

const About = () => {
  const [teskill, setTeskill] = useState(techSkills)
  console.log(teskill);
  return (
    <div className='h-screen bg-[#212121]'>
      <div id="abo" className='flex  flex-col  md:flex-row h-screen'>
        <div className='flex w-full mx-auto lg:w-1/2'>
          <div className='w-4/5 m-auto'>
            <h2 className='font-bold  text-3xl lg:text-4xl'>About Me</h2>
            <h3 className=' text-2xl lg:text-3xl'>I'm Edwin Frontend Developer</h3>
            <p className='my-6  text-xl lg:text-2xl'>
              I am a Full Stack developer with experience building websites and web applications. I specialize in JavaScript, and have professional experience working with React.
              <br />
              <br />
              I am always seeking to improve my skills and continue growing professionally in order to make valuable contributions at the working group I am part of. Therefore I use the modern development workflow with CodeStream in order to increase productivity and improve communication inside our development team.
            </p>
            <button className='btnCv rounded-lg px-4 py-1 flex items-center justify-around'>
              <img src='https://res.cloudinary.com/edwin3002/image/upload/v1656015671/portafolio/cloud_ubonn6.png' alt='cloud' />
              <p>Download-CV</p>
            </button>
          </div>
        </div>
        <div className='flex w-full lg:w-1/2'>
          <div className='my-auto w-4/5 m-auto p-1 '>
            <h2 className='flex font-bold  text-3xl lg:text-4xl'>Skills</h2>
            <div class="flex w-full flex-wrap justify-between">
              {
                teskill.map((ski)=>(
                  <CardSkill data={ski}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About