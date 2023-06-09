//import dependencies  
import React from 'react';
import Header from './Components/Header';
import AnimRoutes from './Components/AnimRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </>
  );
};

export default App;
