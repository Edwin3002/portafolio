
import React, { useEffect, useState } from 'react';

const Home1 = () => {
    const urlGit = 'https://api.github.com/users/Edwin3002'
    const [git, setGit] = useState({})
    const dataGit = async () => {
        const res = await fetch(urlGit);
        const data = await res.json();
        setGit(data);
    }
    const {avatar_url} = git
    useEffect(() => {
        dataGit();
    }, []);

    return (
        <div id="home" className="h-screen bg-cover   bg-[url('https://res.cloudinary.com/edwin3002/image/upload/v1656009045/portafolio/Copia_de_Dise%C3%B1o_sin_t%C3%ADtulo_mn3doq.png')]">
            <div  className='flex backdrop-blur-sm backdrop-brightness-50   flex-col  md:flex-row h-screen'>
                <div className='flex mt-20 md:mt-10 w-full lg:w-1/2'>
                    <div className=' m-auto'>
                        <img className='rounded-full w-3/4 m-auto' src={avatar_url} alt='Edwin vargas'/>
                        <h2 className=' text-center text-4xl lg:text-5xl'>Edwin Vargas Ayala</h2>
                    </div>
                </div>
                <div className='flex w-full lg:w-1/2'>
                    <div className='m-auto p-1 text-center lg:text-left'>
                        <section className='my-6 '>
                        <h2 className='colorText font-bold text-4xl lg:text-5xl'>Hi 👋🏼, I am Ed</h2>
                        <h3 className='font-bold text-3xl lg:text-4xl'>Frontend Developer</h3>
                        </section>
                        <p className='my-6  text-xl lg:text-3xl'>
                            Develop solutions to help the world.
                            Develop solutions to help the world.
                            Develop solutions to help the world.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home1