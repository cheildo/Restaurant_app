import React from 'react';
import './App.css';
import { AboutUs, Chef, Findus, Footer, Header, Gallery, Intro, Menu, Laurels } from './container';
import { Navbar } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <Findus />
      <Footer />
    </div>
  );
}

export default App;
