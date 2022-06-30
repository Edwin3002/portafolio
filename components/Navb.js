import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Logo, Translations } from '../icons/icons';

const Navb = () => {
  const [language, setLanguage] = useState('english');
  const [t, i18n] = useTranslation("global");

  const changeL = () => {
    if (language === 'espanol') {
      setLanguage('english')
    } else {
      setLanguage('espanol')
    }
    i18n.changeLanguage(language);
  }

  return (
    <div className="  flex fixed w-full z-40 h-14 colorNav">
      <div className=" basis-1/5 lg:basis-2/4 flex items-center">
        <ul className="flex w-3/4 m-auto">
          <li className="">
            {/* <div className='inline rounded-full p-3  bg-white'> */}
            <img className='w-1/3 md:w-1/6 pb-1 mx-auto inline' src='https://res.cloudinary.com/edwin3002/image/upload/v1656561378/portafolio/logo-circle_rqq2e4.png'></img>
            </li>
        </ul>
      </div>
      <div className=" basis-4/5 lg:basis-2/4  flex  items-center ">
        <ul className="linkNav flex w-full justify-around text-slate-300">
          <li className='flex'>
            <a className='my-auto' href="#home">
              {t("navbar.home")}
            </a>
          </li>
          <li className='flex'>
            <a className='my-auto' href="#about">
              {t("navbar.about")}
            </a>
          </li>
          <li className='flex'>
            <a className='my-auto' href="#portafolio">
              {t("navbar.portafolio")}
            </a>
          </li>
          <li className='flex'>
            <a className='my-auto' href="#contact">
              {t("navbar.contact")}
            </a>
          </li>
          <li className='flex'>
            <div  className='es-en my-auto' onClick={() => {changeL()}}>
              <Translations />
            </div>
            {/* <button onClick={() => {changeL()}}>eng</button> */}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navb