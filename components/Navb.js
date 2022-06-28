import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Navb = () => {
  const [language, setLanguage] = useState('espanol')
  const [t, i18n] = useTranslation("global");

  const changeL = () => {
    if(language === 'espanol'){
      setLanguage('english')
    }else{
      setLanguage('espanol')
    }
    i18n.changeLanguage(language)
  }

  return (
    <div className="  flex fixed w-full z-40 h-14 colorNav">
      <div className=" basis-1/5 lg:basis-2/4 flex items-center">
        <ul className="flex w-3/4 m-auto">
          <li className="text-slate-300">Edwin</li>
        </ul>
      </div>
      <div className=" basis-4/5 lg:basis-2/4  flex  items-center ">
        <ul className="linkNav flex w-full justify-around text-slate-300">
          <li >
            <a href="#home">
              {t("navbar.home")}
            </a>
          </li>
          <li >
            <a href="#about">
              {t("navbar.about")}
            </a>
          </li>
          <li >
            <a href="#portafolio">
              {t("navbar.portafolio")}
            </a>
          </li>
          <li >
            <a href="#contact">
              {t("navbar.contact")}
            </a>
          </li>
          <li >
            <a >
              <button onClick={() => {changeL()}}>eng</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navb