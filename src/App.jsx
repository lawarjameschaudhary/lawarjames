import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import Education from './components/Education/Education';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Discuss from './components/Discuss/Discuss';
import Contact from './components/Contact/Contact';
import Discription from './components/Description/Discription';
import GetInTouch from './components/GetInTouch/GetInTouch';
import Projects from './components/Projects/Projects';

const App = () => {
  const homeRef = useRef(null);
  const discriptionRef = useRef(null);
  const educationRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const discussRef = useRef(null);
  const contactRef = useRef(null);
  const getInTouchRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = {
      home: homeRef,
      discription: discriptionRef,
      education: educationRef,
      projects: projectRef,
      about: aboutRef,
      skills: skillsRef,
      discuss: discussRef,
      contact: contactRef,
      getInTouch: getInTouchRef
    };

    refs[section].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <div ref={homeRef}><Home /></div>
      <div ref={discriptionRef}><Discription /></div>
      <div ref={educationRef}><Education /></div>
      <div ref={projectRef}><Projects /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={discussRef}><Discuss /></div>
      <div ref={contactRef}><Contact /></div>
      <div ref={getInTouchRef}><GetInTouch /></div>
    </div>
  );
};

export default App;
