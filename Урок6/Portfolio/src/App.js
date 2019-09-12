import React from 'react';
import './App.css';
import HeaderBlock from './components/PageSections/Header';
import AboutMe from './components/PageSections/AboutMe';
import Practice from './components/PageSections/Practice';
import Skills from './components/PageSections/Skills';
import Experience from './components/PageSections/Experience';
import Examples from './components/PageSections/Examples';
import Contacts from './components/PageSections/Contacts';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <HeaderBlock />
      <AboutMe />
      <Practice />
      <Skills />
      <Experience />
      <Examples />
      <Contacts />     
    </ParallaxProvider>
  );
}
export default App;
