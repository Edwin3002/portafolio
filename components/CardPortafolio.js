import React from 'react'

const CardPortafolio = ({proyect}) => {
    return (
        <div className=' my-4 mx-4 cardMaxWPorta rounded-2xl'>
            <div className='imgCardPorta '>
            <div class="slider">
              <ul>
                {proyect.img.map((i)=>(
                    <li>
                    <img src={i} alt={proyect.name}/>
                  </li>
                ))}
              </ul>
            </div>
                {/* <img className='rounded-xl' src='https://res.cloudinary.com/edwin3002/image/upload/v1656100567/portafolio/Screenshot_2022-06-24_145416_flejy9.png' alt='img' /> */}
            </div>
            <div className='infoCardPorta text-center'>
                <p>{proyect.name.toUpperCase()}</p>
                <div></div>
            </div>
        </div>
    )
}

export default CardPortafolio