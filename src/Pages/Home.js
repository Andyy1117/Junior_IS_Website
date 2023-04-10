import React from 'react';
import NYC1 from '../img/Home/home2.jpg';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
    <section className='section'>
    <div style={{ height: '1024px', overflow: 'scroll' }}>
        <div className='container mx-auto h-full relative'>
            {/* text & img wrapper */}
            <div className='flex flex-col justify-center'>
                {/* text */}
                <div className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0
                lg:w-auto z-10 lg:absolute flex flex-col
                justify-center items-center lg:items-start'>
                    <h1 className='h1'>
                        photographer <br /> & Software Engineer
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
                <div className='flex justify-center max-h-96
                lg:max-h-max'>
                    <div className='relative lg:-right-40'>
                        <img src={NYC1} alt='' />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    );
};

export default Home;