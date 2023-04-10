import React from 'react';
import { Link } from 'react-router-dom';
import Me from '../img/About/me.jpg'; 


const About = () => {
    return (
        <section className='section'>
        <div style={{ height: '1024px', overflow: 'scroll' }}>
            <div className="container mx-auto h-fill relative">
                {/* text & img wrapper */}
                <div className='flex flex-col lg:flow-row h-full
                    items-center justify-center gap-x-24 text-center 
                    lg:text-left lg:pt-16'>
                    {/* image */}
                    <div>
                        <img src={Me} alt='' style={{maxWidth: '70%'}}/>
                    </div>
                    {/* text */}
                    <div className='flex-1 pt-36 pb-34 lg:pt-0
                    lg:w-auto z-10 flex flex-col justify-center
                    items-center lg:items-start'>
                        <h1 className='h1' > About me</h1>
                        <p className='mb-12'>
                            I am a full-stack web developer with a passion for web development.
                        </p>
                        <br />
                        <br />
                        <p>
                            I am a CS Major 
                        </p>
                        <Link t={'/portfolio'} className='btn'>
                            View my work
                        </Link>
                    </div>
                </div>
            </div>
        </div>    
        </section>
    );
};

export default About;

