import React from 'react'
import { Figma, Github, World } from '../icons/icons'

const CardPortafolio = ({ project }) => {
    console.log(project.img);
    return (
        <div className=' my-4 mx-4 cardMaxWPorta rounded-2xl'>
            <div className='imgCardPorta '>
                <div class="slider">
                    <ul>
                        <li>
                            <img src={project.img[0]} alt={project.name} />
                        </li>
                        <li>
                            <img src={project.img[1]} alt={project.name} />
                        </li>
                        <li>
                            <img src={project.img[2]} alt={project.name} />
                        </li>
                        {/* {project.img.map((i) => (
                            <li>
                                <img src={i} alt={project.name} />
                            </li>
                        ))} */}
                    </ul>
                </div>
                {/* <img className='rounded-xl' src='https://res.cloudinary.com/edwin3002/image/upload/v1656100567/portafolio/Screenshot_2022-06-24_145416_flejy9.png' alt='img' /> */}
            </div>
            <div className='infoCardPorta text-center'>
                <p>{project.name.toUpperCase()}</p>
                <div className='my-3 flex justify-around'>
                    <div className='logoPorta'>
                        <a href={project.url} target='_blanck'>
                            <World />
                        </a>
                    </div>
                    <div className='logoPorta'>
                        <a href={project.github} target='_blanck'>
                            <Github />
                        </a>
                    </div>
                    <div className='logoPorta'>
                        <a href={project.figma[0]} target='_blanck'>
                            <Figma />
                        </a>
                    </div>
                </div>
                <p className='mx-1'>
                    {project.technology}
                </p>
                <p className='underline desc'>Description</p>
            </div>
        </div>
    )
}

export default CardPortafolio