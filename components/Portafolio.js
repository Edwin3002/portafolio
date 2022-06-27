import React, { useState } from 'react'
import CardPortafolio from './CardPortafolio'
import { projectsPortafolio } from '../data/projects'
import ModalDescription from './ModalDescription'
import App from './App'

const Portafolio = () => {
  const [mod, setMod] = useState(false)
  const [dataModal, setdataModal] = useState([])
  const modal = (data) => {
    setMod(!mod)
    setdataModal(data)
  }


  return (
    <div id='portafolio' className='mt-8'>
      <h2 className='font-bold text-center text-3xl lg:text-4xl'>Portafolio</h2>
      <div className='my-8 flex mx-auto w-full '>
        <div className='my-auto w-4/5 m-auto p-1 '>
          <div className='flex w-full flex-wrap justify-around'>
            {
              projectsPortafolio.map((project) => (

                <CardPortafolio key={project.id} project={project} f={modal} />
              ))
            }

          </div>
          <div className='m-auto flex'>
            {
              mod ? <ModalDescription data={dataModal} f={modal} /> : ''
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portafolio