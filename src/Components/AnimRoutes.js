import React from 'react';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Portfolio from '../Pages/Portfolio';

import { Routes, Route, useLocation } from 'react-router-dom';


const AnimRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Contact' element={<Contact />} />
    </Routes>
  );
};

export default AnimRoutes;