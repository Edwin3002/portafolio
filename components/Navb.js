import React from 'react'
import Link from 'next/Link'

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
              <Link href="#hom">
                Home
              </Link>
            </li>
            <li >
              <Link href="#abo">
                About_Me
              </Link>
            </li>
            <li >
              <Link href="/Bye">
                Portafolio
              </Link>
            </li>
            <li >
              <Link href="/Bye">
                Contact
              </Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navb