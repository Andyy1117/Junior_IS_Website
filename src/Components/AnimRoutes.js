// import dependencies 
import React from 'react';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Portfolio from '../Pages/Portfolio';

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// define AnimRoutes component
const AnimRoutes = () => {
  const location = useLocation();

  // return AnimRoutes component with Routes and AnimatePresence components
  return (
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname} Location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;