import React, { useState } from 'react' 
import { techSkills } from '../data/skills'
import CardSkill from './CardSkill'
import { motion, useTransform, useViewportScroll } from "framer-motion"

const About = () => {
  const [teskill, setTeskill] = useState(techSkills);
  
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  return (
    <div id='about' className='mt-8 lg:mt-0'>
      <div  className='flex flex-col w-full lg:flex-row'>
        <div className='flex w-full mx- lg:w-1/2'>
          <div className='w-4/5 m-auto'>
            <h2 className='font-bold text-3xl lg:text-4xl'>About Me</h2>
            <h3 className='text-2xl lg:text-3xl'>I am Edwin Frontend Developer</h3>
            <p className='my-6 text-xl lg:text-2xl'>
              I am a Full Stack developer with experience building websites and web applications. I specialize in JavaScript, and have professional experience working with React.
              <br />
              <br />
              I am always seeking to improve my skills and continue growing professionally in order to make valuable contributions at the working group I am part of. Therefore I use the modern development workflow with CodeStream in order to increase productivity and improve communication inside our development team.
            </p>
            <a href='https://drive.google.com/u/0/uc?id=1A_okfhnq7ovTZFmqlGB40LH_pnviqJ5H&export=download' target='_black' download="Edwin Vargas Ayala">

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
                teskill.map((ski)=>(
                  <motion.div
                  style={{ scale }}
                >
                  <motion.div
                    style={{
                      scaleY: scrollYProgress
                    }}
                  />
                  <CardSkill key={ski.id} data={ski}/>
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