import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import ProblemsSection from './components/ProblemsSection';
import MetricsSection from './components/MetricsSection';
import ReviewsSection from './components/ReviewsSection';
import FeaturesSection from './components/FeaturesSection';
import CTASection from './components/CTASection';
import FooterSection from './components/FooterSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection />
      <ProblemsSection />
      <MetricsSection />
      <ReviewsSection />
      <FeaturesSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}

export default App;
