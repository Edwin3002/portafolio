
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Home1 = () => {

    const [photo, setPhoto] = useState('https://res.cloudinary.com/edwin3002/image/upload/v1656974851/portafolio/ed_mgrnc9.png');
    const [t] = useTranslation("global");

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
                                <img className='w-3/4 m-auto' src={photo ? photo : 'https://ouch-cdn2.icons8.com/lKuVLNguQl_yxSAw5bVEIPSlgGLY3D2nd27prwfwzrk/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODA3/LzM0NDExZmZlLTdk/YzYtNDYyNC04Nzgx/LTc1Zjc0MzFhM2Fk/Zi5zdmc.png'} alt='Edwin vargas' />
                            </motion.li>
                            <motion.li className="item" variants={item} >
                                <h2 className='text-center text-4xl lg:text-5xl'>Edwin Vargas</h2>
                            </motion.li>
                        </div>
                    </div>
                    <div className='flex w-full lg:w-1/2'>
                        <div className='m-auto p-1 text-center lg:text-left'>
                            <motion.li className="item" variants={item} >
                                <h2 className='colorText neon font-bold text-4xl lg:text-5xl'>{t("home.hi")}</h2>
                            </motion.li>
                            <motion.li className="item" variants={item} >
                                <h3 className='font-bold text-3xl lg:text-4xl'>{t("home.rol")}</h3>
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