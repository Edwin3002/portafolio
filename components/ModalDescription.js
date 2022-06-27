import React from 'react'
import { Figma, Github, World } from '../icons/icons'

const ModalDescription = ({ data, f }) => {
    return (
        <div>
            <div class="  fixed top-0 left-0 lg:right-0  z-50 w-full lg:w-3/4 mx-auto ">
                <div class=" p-4">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                {data.name}
                            </h3>
                            <button onClick={f} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div class="p-6 space-y-6">
                            <div className=' my-4 mx-4 cardMaxWPorta cardModal rounded-2xl'>
                                <div className='imgCardPorta '>
                                    <div className="slider">
                                        <ul>
                                            <li>
                                                <img className='imgP' src={data.img[0]} alt={data.name} />
                                            </li>
                                            <li>
                                                <img className='imgP' src={data.img[1]} alt={data.name} />
                                            </li>
                                            <li>
                                                <img className='imgP' src={data.img[2]} alt={data.name} />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='infoCardPorta text-center' onClick={() => { f(data) }}>
                                    <p>Project Detail</p>
                                    <div className='my-3 flex justify-around'>
                                        <div className='logoPorta'>
                                            <a href={data.url} target='_blanck'>
                                                <World />
                                            </a>
                                        </div>
                                        <div className='logoPorta'>
                                            <a href={data.github} target='_blanck'>
                                                <Github />
                                            </a>
                                        </div>
                                        {
                                            data.figma ? <div className='logoPorta'>
                                                <a href={data.figma[0]} target='_blanck'>
                                                    <Figma />
                                                </a>
                                            </div> : ''
                                        }
                                    </div>
                                    <p className='mx-1'>
                                        {data.technology}
                                    </p>
                                    {/* <p className='underline desc' >Description</p> */}
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-end p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                            <button data-modal-toggle="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { f() }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDescription