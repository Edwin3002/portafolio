
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Home1 = () => {
    const urlGit = 'https://api.github.com/users/Edwin3002'

    const [git, setGit] = useState({});
    const [t, i18n] = useTranslation("global");

    const dataGit = async () => {
        const res = await fetch(urlGit);
        const data = await res.json();
        setGit(data);
    }
    const { avatar_url } = git
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    useEffect(() => {
        dataGit();
    }, []);

    return (
        <div id="home" className="h-screen bg-cover   bg-[url('https://res.cloudinary.com/edwin3002/image/upload/v1656358366/portafolio/portafolioBG3_kaviwh.jpg')]">
                <motion.ul
                    className="flex   flex-col  md:flex-row h-screen "
                    variants={container}
                    initial="hidden"
                    animate="visible">
                    <div className='flex mt-20 md:mt-10 w-full lg:w-1/2'>
                        <div className=' m-auto'>
                            <motion.li className="item" variants={item} >
                                <img className='rounded-full w-3/4 m-auto' src={avatar_url} alt='Edwin vargas' />
                            </motion.li>
                            <motion.li className="item" variants={item} >
                                <h2 className=' text-center text-4xl lg:text-5xl'>Edwin Vargas Ayala</h2>
                            </motion.li>
                        </div>
                    </div>
                    <div className='flex w-full lg:w-1/2'>
                        <div className='m-auto p-1 text-center lg:text-left'>
                            <motion.li className="item" variants={item} >
                                <h2 className='colorText font-bold text-4xl lg:text-5xl'>{t("home.hi")}</h2>
                            </motion.li>
                            <motion.li className="item" variants={item} >
                                <h3 className='font-bold text-3xl lg:text-4xl'>Frontend Developer</h3>
                            </motion.li>
                            <motion.li className="item" variants={item} >
                                <p className='my-6  text-lg lg:text-2xl'>
                                {t("home.phrase")}
                                </p>
                            </motion.li>
                        </div>
                    </div>
                </motion.ul>
        </div>
    )
}

export default Home1