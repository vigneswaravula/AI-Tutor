import React from 'react';
import { Play, ChevronRight } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Learn Smarter with</span>
                <span className="block text-[#00A4CC]">AI-Powered Tutoring!</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Experience personalized education tailored to your learning style. Our AI-driven platform adapts to your pace, ensuring the most effective and engaging learning journey.
              </p>
              
              {/* CTA Buttons */}
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#00A4CC] hover:bg-[#008CAD] md:py-4 md:text-lg md:px-10 transition duration-150">
                    Get Started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-[#FF6F61] bg-[#FF6F61]/10 hover:bg-[#FF6F61]/20 md:py-4 md:text-lg md:px-10 transition duration-150">
                    Watch Demo <Play className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#00A4CC]">50K+</p>
                  <p className="text-sm text-gray-500">Active Students</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#00A4CC]">100+</p>
                  <p className="text-sm text-gray-500">Expert Tutors</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#00A4CC]">95%</p>
                  <p className="text-sm text-gray-500">Success Rate</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Hero Image Carousel */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <ImageCarousel />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:flex items-center text-gray-500 animate-bounce">
        <span className="mr-2">Scroll to explore</span>
        <ChevronRight className="h-4 w-4 transform rotate-90" />
      </div>
    </div>
  );
}