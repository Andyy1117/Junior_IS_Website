// import dependencies 
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '/Users/agoor/Desktop/Junior_IS_Website/src/transition.js';

// import images 
import Me from '../img/About/me.jpg'; 

// define the About Component
const About = () => {
    return (
        <motion.section 
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={transition1}
        className='section'
        >
        
            <div className="container mx-auto min-h-screen relative">
                {/* text & img wrapper */}
                <div className='flex flex-col lg:flex-row h-full
                    items-center justify-center gap-x-8 text-center 
                    lg:text-left lg:pt-16'>
                    {/* image */}
                    <div>
                        <img src={Me} alt='' style={{maxWidth: '60%'}}/>
                    </div>
                    {/* text */}
                    <motion.div 
                    initial={{ opacity: 0, y: '-80%' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '-80%' }}
                    transition={transition1}
                    className='flex-1 pt-36 pb-34 lg:pt-0 w-1/2
                    lg:w-auto z-10 flex flex-col justify-relative
                    items-center lg:items-start'>
                        <h1 className='h1' > About me</h1>
                            <p className='mb-12'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id purus sit amet sapien mollis elementum. Integer imperdiet dapibus velit, a convallis nulla euismod a. 
                            </p>
                            <br />
                            <br />
                        <Link to={'/portfolio'} className='btn'>
                            View my work
                        </Link>
                    </motion.div>
                </div>
            </div>
         
        </motion.section>
    );
};

export default About;

