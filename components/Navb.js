import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Translations } from '../icons/icons';

const Navb = () => {
  const [language, setLanguage] = useState('english');
  const [t, i18n] = useTranslation("global");

  const [btnNav, setBtnNav] = useState(false);

  const changeL = () => {
    if (language === 'espanol') {
      setLanguage('english')
    } else {
      setLanguage('espanol')
    }
    i18n.changeLanguage(language);
  }

  return (
    <nav className="fixed w-full z-10  px-2 sm:px-4 py-2  colorNav">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="" className="flex items-center">
          <img
            src="https://res.cloudinary.com/edwin3002/image/upload/v1656561378/portafolio/logo-circle_rqq2e4.png"
            className="mr-3 h-8 sm:h-10"
            alt="Netflix"
          />
          {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Netflix
        </span> */}
        </a>
        <button onClick={() => {
              setBtnNav(!btnNav);
            }}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-[#4cd982] dark:focus:ring-gray-400"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={
            btnNav
              ? "w-full md:block md:w-auto"
              : "hidden w-full md:block md:w-auto"
          }
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-[#212121] md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a href="#home" onClick={() => {
              setBtnNav(false);
            }}
                className="block py-2 pr-4 pl-3 text-white hover:bg-[#4cd982] md:hover:bg-transparent rounded md:bg-transparent md:hover:text-[#57f794]  md:p-0 "
                aria-current="page"
              >
                {t("navbar.home")}
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => {
              setBtnNav(false);
            }}
                className="block py-2 pr-4 pl-3 text-white hover:bg-[#4cd982] md:hover:bg-transparent rounded md:bg-transparent md:hover:text-[#57f794]  md:p-0 "
                aria-current="page"
              >
                {t("navbar.about")} (CV)
              </a>
            </li>
            <li>
              <a href="#portafolio" onClick={() => {
              setBtnNav(false);
            }}
                className="block py-2 pr-4 pl-3 text-white hover:bg-[#4cd982] md:hover:bg-transparent rounded md:bg-transparent md:hover:text-[#57f794]  md:p-0 "
                aria-current="page"
              >
                {t("navbar.portafolio")}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => {
              setBtnNav(false);
            }}
                className="block py-2 pr-4 pl-3 text-white hover:bg-[#4cd982] md:hover:bg-transparent rounded md:bg-transparent md:hover:text-[#57f794]  md:p-0 "
                aria-current="page"
              >
                {t("navbar.contact")}
              </a>
            </li>
            <li>
              <div className='w-12 md:w-6 my-auto block py-2 pr-4 pl-3 md:p-0 hover:scale-125' onClick={() => { changeL() }}>
                <Translations />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};



export default Navb
