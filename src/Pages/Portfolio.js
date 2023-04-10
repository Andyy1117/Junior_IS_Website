import React from 'react';

import Image1 from '../img/Portfolio/Image1.jpg';
import Image2 from '../img/Portfolio/Image2.jpg';
import Image3 from '../img/Portfolio/Image3.jpg';
import Image4 from '../img/Portfolio/Image4.jpg';
import Image5 from '../img/Portfolio/Image5.jpg';
import Image6 from '../img/Portfolio/Image6.jpg';

import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <section className='section'>
            <div style={{ height: '700px', overflow: 'scroll' }}>
            <div className='container mx-auto h-full relative'>
                <div className='flex flex-col lg:flex-row h-full
                items-center justify-start gap-x-24 text-center
                lg:text-left pt-24 lg:pt-36 pb-8'>
                    {/* text */}
                    <div className='flex flex-col lg:items-start'>
                        <h1 className='h1'>Portfolio</h1>
                        <p className='mb-12 max-2-sm'>
                            Most of my pictures are taken in the city of Manhattan, New York.
                        </p>
                        <Link to={'/contact'} className='btn mb-[30px]
                        mx-auto lg:mx-0'>
                            Contact
                        </Link>
                    </div>
                    {/* image grid */}
                    <div className='grid grid-cols-2 lg:gap-2'>
                        {/* image */}
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
            Portfolio
        </section>
    );
};

export default Portfolio;