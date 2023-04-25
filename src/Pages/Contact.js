// import dependencies 
import { motion } from 'framer-motion';
import { transition1 } from '/Users/agoor/Desktop/Junior_IS_Website/src/transition.js';

// import images 
import TimeSquare from '../img/Contact/Image6.jpg';

const Contact = () => {
  
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section bg-white'
    >
      {/*scrolling behavior*/}
      <div style={{ height: '900px', overflow: 'scroll' }}> 
        <div className='container mx-auto h-full'>
          <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
            {/* bg */}
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={transition1}
              className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'
            ></motion.div>
            {/* text & form */}
            <div
              className='lg:flex-1 lg:pt-32 px-4'
            >
              <h1 className='h1'>Contact</h1>
              <p className='mb-12'>Requests</p>
              {/* form */}
              <form className='flex flex-col gap-y-4'>
                <div className='flex gap-x-10'>
                  <input
                    className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                    type='text'
                    placeholder='Name'
                  />
                  <input
                    className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                    type='text'
                    placeholder='Email'
                  />
                </div>
                <input
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='text'
                  placeholder='Request'
                />
                <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>
                  Submit
                </button>
              </form>
            </div>
            {/* image */}
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ transition: transition1, duration: 1.5 }}
              className='lg:flex-1'
            >
              <img src={TimeSquare} alt='' />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
