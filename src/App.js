import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import PartnersAndTools from './components/PartnersAndTools';
import LatestInsights from './components/LatestInsights';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <PartnersAndTools />
      <LatestInsights />
      <Footer />
    </div>
  );
}

export default App;
