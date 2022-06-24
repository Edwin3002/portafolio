import React from 'react'
import { techSkills } from '../data/skills'
import CardPortafolio from './CardPortafolio'
import CardSkill from './CardSkill'

const Portafolio = () => {
  return (
    <div>
      <h2 className='font-bold text-center text-4xl lg:text-5xl'>Portafolio</h2>
      <div>
        <div className='my-16 flex mx-auto w-full lg:w-3/4'>
          <div className='my-auto w-4/5 m-auto p-1 '>
            <div className='flex w-full flex-wrap justify-around'>


              
              <CardPortafolio/>
              <CardPortafolio/>
              <CardPortafolio/>
              <CardPortafolio/>
              <CardPortafolio/>
              
          
              {/* {
                techSkills.map((ski)=>(
                  <CardSkill key={ski.name} data={ski}/>
                ))
              } */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portafolio