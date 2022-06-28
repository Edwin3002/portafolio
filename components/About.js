import React, { useState } from 'react'
import { techSkills } from '../data/skills'
import CardSkill from './CardSkill'
import { motion, useTransform, useViewportScroll } from "framer-motion"

const About = () => {
  const [teskill, setTeskill] = useState(techSkills);

  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.2]);
  return (
    <div id='about' className='mt-8 lg:mt-0'>
      <div className='flex flex-col w-full lg:flex-row'>
        <div className='flex w-full lg:w-1/2'>
          <div className='w-4/5 m-auto'>
            <h2 className='font-bold text-3xl lg:text-4xl'>About Me</h2>
            <h3 className='text-2xl lg:text-3xl font-bold'>I am Edwin Frontend Developer / Web Designer</h3>
            <p className='my-6 text-lg lg:text-xl'>
              I am a Frontend Developer with experience building websites and web applications. I specialize in the design, and have professional experience working with React.
              <br />
              <br />
              I also seek to improve my skills and continue to grow professionally in order to add value to the work group of which I am a part. And I love exploring opportunities, as well as participating in projects even without having much expertise.
            </p>
            <a href='https://drive.google.com/uc?id=1Cm21f8ZYXtqMfu5py2zPHF2esMWeYm9g&export=download' target='_black' download="Edwin Vargas Ayala">

              <button className='btnCv rounded-lg px-4 py-1 flex items-center justify-around'>
                <img src='https://res.cloudinary.com/edwin3002/image/upload/v1656015671/portafolio/cloud_ubonn6.png' alt='cloud' />
                <p>Download-CV</p>
              </button>
            </a>
          </div>
        </div>
        <div className='my-16 w-full lg:w-1/2'>
          <div className='my-auto w-4/5 mx-auto p-1 '>
            <h2 className='flex font-bold  text-3xl lg:text-4xl'>Skills</h2>
            <div className='flex w-full flex-wrap  justify-between'>
              {
                teskill.map((ski) => (
                  <motion.div
                    key={ski.id}
                    style={{ scale }}
                  >
                    <motion.div
                      style={{
                        scaleY: scrollYProgress
                      }}
                    />
                    <CardSkill data={ski} />
                  </motion.div>
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