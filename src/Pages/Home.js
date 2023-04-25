// import necessary dependencies
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '/Users/agoor/Desktop/Junior_IS_Website/src/transition.js';

// import images 
import NYC1 from '../img/Home/home1.jpg';
import NYC2 from '../img/Home/home2.jpg';
import NYC3 from '../img/Home/home3.jpg';

// define the Home component
const Home = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageWrapperRef = useRef(null);

  // set up a useEffect hook to initialize the images array when the component mounts
  useEffect(() => {
    setImages([NYC1, NYC2, NYC3]);
  }, []);

  // set up another useEffect hook to update the current image index based on the user's scroll position
  useEffect(() => {
    const imageWrapper = imageWrapperRef.current;
    const totalHeight = imageWrapper.clientHeight;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const offset = scrollTop / totalHeight;
      setCurrentImageIndex(Math.floor(offset * images.length));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [images]);

  // render the component's UI
  return (

    // wrap the UI in a framer-motion component to enable animations and transitions
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'
    >
      <div className='relative overflow-hidden h-screen'>
        {/* images */}
        <div className='absolute top-0 left-0 w-full h-full' ref={imageWrapperRef}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=''
              className={`absolute object-cover w-full h-full ${index === currentImageIndex ? '' : 'opacity-0'}`}
            />
          ))}
        </div>
        {/* text */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10'>
          <h1 className='text-6xl lg:text-8xl'>Photographer &amp; Software Engineer</h1>
          <p className='text-lg lg:text-xl'>NYC, USA</p>
          <Link to='/about' className='btn mt-10'>Welcome</Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;