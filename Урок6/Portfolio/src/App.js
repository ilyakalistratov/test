import React from 'react';
import './App.css';
import HeaderBlock from './components/Header';
import AboutMe from './components/AboutMe';
import Practice from './components/Practice';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Examples from './components/Examples';




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
