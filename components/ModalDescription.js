import React, { } from 'react'
import { useTranslation } from 'react-i18next';
import { Figma, Github, World } from '../icons/icons'

const ModalDescription = ({ data, f }) => {
    const [t, i18n] = useTranslation("global");

    return (
        <div>
            <div className="  fixed top-0 left-0 lg:right-0  z-50 w-full lg:w-3/4 mx-auto ">
                <div className=" p-4">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                            <h3 className="text-xl font-semibold ">
                                {data.name}
                            </h3>
                            <button onClick={f} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className=' my-4 mx-4 cardMaxWPorta cardModal rounded-2xl'>
                                <div className='imgCardPorta '>
                                    <div className="slider">
                                        <ul className='flex flex-col lg:flex-row'>
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
                                    <p>{t('modal.detail')}</p>
                                    <div className='my-3 flex justify-around'>
                                        <div className='logoPorta logoModal'>
                                            <a href={data.url} target='_blanck'>
                                                <World />
                                            </a>
                                        </div>
                                        <div className='logoPorta logoModal'>
                                            <a href={data.github} target='_blanck'>
                                                <Github />
                                            </a>
                                        </div>
                                        {
                                            data.figma ? <div className='logoPorta logoModal'>
                                                <a href={data.figma[0]} target='_blanck'>
                                                    <Figma />
                                                </a>
                                            </div> : ''
                                        }
                                    </div>
                                    <p className='m-4 text-xs lg:text-sm'>
                                        {data.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end p-6  ">
                            <button className='btnCv rounded-lg px-4 py-1 flex items-center justify-around ' onClick={() => { f() }}>
                                <p>{t('modal.close')}</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDescription