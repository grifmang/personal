import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/about/About';
import Skills from './components/about/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Nav />
    <Header />
    <About />
    <Skills />
    {/* <Resume /> */}
    <Portfolio />
    <Contact />
    </>
  );
}

export default App;
