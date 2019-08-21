import React from 'react';
import './App.css';
import HeaderBlock from './components/PageSections/Header';
import AboutMe from './components/PageSections/AboutMe';
import Practice from './components/PageSections/Practice';
import Skills from './components/PageSections/Skills';
import Experience from './components/PageSections/Experience';
import Examples from './components/PageSections/Examples';




function App() {
  return (
   <>
      <HeaderBlock />
      <AboutMe />
      <Practice />
      <Skills />
      <Experience />
      <Examples />
   </>
  );
}

export default App;
