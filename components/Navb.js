import React from 'react'

const Navb = () => {
  return (
    <div className="  flex fixed w-full z-40 h-14 colorNav">

        <div className=" basis-1/5 lg:basis-2/4 flex items-center">
          <ul className="flex w-3/4 m-auto">
            <li className="text-slate-300">Edwin</li>
          </ul>
        </div>
        <div className=" basis-4/5 lg:basis-2/4  flex  items-center ">
          <ul className="flex w-full justify-around text-slate-300">
            <li >
              <a href="#hom">
                Home
              </a>
            </li>
            <li >
              <a href="#abo">
                About_Me
              </a>
            </li>
            <li >
              <a href="/Bye">
                Portafolio
              </a>
            </li>
            <li >
              <a href="/Bye">
                Contact
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navb