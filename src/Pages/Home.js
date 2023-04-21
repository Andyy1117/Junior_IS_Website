import React from 'react';
//import NYC1 from '../img/Home/home2.jpg';
import NYC2 from '../img/Portfolio/Image6.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '/Users/agoor/Desktop/Junior_IS_Website/src/transition.js';


const Home = () => {
    return (
    <motion.section 
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={transition1}
    className='section'
    >

    <div style={{ height: '1024px', overflow: 'scroll' }}>
        <div className='container mx-auto h-full relative'>
            {/* text & img wrapper */}
            <div className='flex flex-col justify-center'>
                {/* text */}
                <div className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0
                lg:w-auto z-10 lg:absolute flex flex-col
                justify-center items-center lg:items-start'>
                    <h1 className='h1'>
                        <div style = {{backgroundColor: "white"}} >
                            Photographer <br /> & Software Engineer    
                        </div>
                    </h1>
                    <p className='text-[26px lg:text-[36px
                    font-primary mb-4 lg:mg-12'>
                        NYC, USA
                    </p>
                    <Link to={'/contact'} className='btn mb-[40px]'>
                        hire me
                    </Link>
                </div> 
                {/* image */}
                <div className='flex justify-relative max-h-96
                md:max-h-max'>
                    <div className='relative lg:-right-40'>
                        <img src={NYC2} alt='' />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </motion.section>
    );
};

export default Home;