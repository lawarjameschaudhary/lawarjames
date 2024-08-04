import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/Navbar';
import Education from './components/Education/Education';
import About from './components/About/About';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/education' element={<Education />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </div>
  );
};

export default App;
