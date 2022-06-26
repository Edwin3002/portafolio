import React from 'react'
import { techSkills } from '../data/skills'
import CardPortafolio from './CardPortafolio'
import CardSkill from './CardSkill'
import { projectsPortafolio } from '../data/projects'

const Portafolio = () => {
  return (
    <div id='portafolio' className='mt-8'>
      <h2 className='font-bold text-center text-3xl lg:text-4xl'>Portafolio</h2>
      <div className='my-8 flex mx-auto w-full '>
        <div className='my-auto w-4/5 m-auto p-1 '>
          <div className='flex w-full flex-wrap justify-around'>
            {
              projectsPortafolio.map((proyect) => (
                <CardPortafolio key={proyect.id} proyect={proyect} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portafolio