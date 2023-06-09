// import all dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '/Users/agoor/Desktop/Junior_IS_Website/src/transition.js';

// import images
import Image1 from '../img/Portfolio/Image1.jpg';
import Image2 from '../img/Portfolio/Image2.jpg';
import Image3 from '../img/Portfolio/Image3.jpg';
import Image4 from '../img/Portfolio/Image4.jpg';
import Image5 from '../img/Portfolio/Image5.jpg';
import Image6 from '../img/Portfolio/Image6.jpg';

const Portfolio = () => {
    return (
        // wrap the UI in a framer-motion component to enable animations and transitions
        <motion.section 
        initial={{ opacity: 0, y: '100%'}}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={transition1}
        className='section'>
            <div style={{ height: '900px', overflow: 'scroll' }}>
            <div className='container mx-auto h-full relative'>
                <div className='flex flex-col lg:flex-row h-full
                items-center justify-start gap-x-24 text-center
                lg:text-left pt-24 lg:pt-36 pb-8'>
                    {/* text */}
                    <motion.div 
                        initial={{ opacity: 0, y: '-80%'}}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-80%' }}
                        transition={transition1}
                        className='flex flex-col lg:items-start'
                        >
                        <h1 className='h1'>Portfolio</h1>
                        <p className='mb-12 max-2-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit leo eu libero semper, a lacinia elit suscipit. 
                        Sed non maximus velit. 
                        </p>
                        <Link to={'/contact'} className='btn mb-[30px]
                        mx-auto lg:mx-0'>
                            Contact
                        </Link>
                    </motion.div>
                    {/* image grid */}
                    <div className='grid grid-cols-3 lg:gap-4'>
                        {/* images displayed */}
                        <div className='max-w-[150px] lg:max-w-[200px] h-
                        [112px] lg:h-[220px] bg-accent overflow-hidden'>
                            <img 
                                className='object-cover h-48 lg:h-[280px]
                                hover:scale-110 transition-all duration-500'
                                src={Image1} 
                                alt='' 
                            />
                        </div>
                        <div className='max-w-[150px] lg:max-w-[200px] h-
                        [112px] lg:h-[220px] bg-accent overflow-hidden'>
                            <img 
                                className='object-cover h-48 lg:h-[280px]
                                hover:scale-110 transition-all duration-500'
                                src={Image2} 
                                alt='' 
                            />
                        </div>
                        <div className='max-w-[150px] lg:max-w-[200px] h-
                        [187px] lg:h-[220px] bg-accent overflow-hidden'>
                            <img 
                                className='object-cover h-48 lg:h-[280px]
                                hover:scale-110 transition-all duration-500'
                                src={Image3} 
                                alt='' 
                            />
                        </div>
                        <div className='max-w-[150px] lg:max-w-[200px] h-
                        [187px] lg:h-[220px] bg-accent overflow-hidden'>
                            <img 
                                className='object-cover h-100 lg:h-[280px]
                                hover:scale-110 transition-all duration-500'
                                src={Image4} 
                                alt='' 
                            />
                        </div>
                        <div className='max-w-[150px] lg:max-w-[200px] h-
                        [187px] lg:h-[220px] bg-accent overflow-hidden'>
                            <img 
                                className='object-cover h-48 lg:h-[280px]
                                hover:scale-110 transition-all duration-500'
                                src={Image5} 
                                alt='' 
                            />
                        </div>
                        <div className='max-w-[150px] lg:max-w-[200px] h-
                        [187px] lg:h-[220px] bg-accent overflow-hidden'>
                            <img 
                                className='object-cover h-48 lg:h-[280px]
                                hover:scale-110 transition-all duration-500'
                                src={Image6} 
                                alt='' 
                            />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </motion.section>
    );
};

export default Portfolio;
