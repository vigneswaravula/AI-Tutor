import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CourseGrid from './components/CourseGrid';
import Testimonials from './components/Testimonials';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
      <CourseGrid />
      <Testimonials />
      <Dashboard />
    </div>
  );
}

export default App;