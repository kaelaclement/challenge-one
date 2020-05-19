import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Employment from './components/Employment';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Employment />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;