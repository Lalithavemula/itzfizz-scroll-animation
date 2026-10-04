import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Impact from './components/Impact';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#07090e] text-[#f3f4f6] selection:bg-cyan-500 selection:text-black">
      {/* 1. Scroll-Driven Hero Section */}
      <Hero />

      {/* 2. Services Section: What We Do */}
      <Services />

      {/* 3. Impact & Client Work Section */}
      <Impact />

      {/* 4. Production Workflow Section */}
      <Process />

      {/* 5. Call To Action Section */}
      <CTA />

      {/* 6. Agency Footer */}
      <Footer />
    </div>
  );
}

export default App;
