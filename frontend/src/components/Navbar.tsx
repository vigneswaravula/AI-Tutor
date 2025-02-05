import React, { useState } from 'react';
import { Brain, Search, Menu, X, User } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import AuthModal from './AuthModal';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const { user, isAuthenticated, signOut } = useAuthStore();

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Brain className="h-8 w-8 text-[#00A4CC]" />
                <span className="ml-2 text-xl font-bold text-gray-900">AI Tutor</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <a href="#" className="text-gray-700 hover:text-[#00A4CC] font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-[#00A4CC] font-medium">Courses</a>
              <a href="#" className="text-gray-700 hover:text-[#00A4CC] font-medium">Live Sessions</a>
              <a href="#" className="text-gray-700 hover:text-[#00A4CC] font-medium">About Us</a>
              
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-64 px-4 py-1 rounded-full border border-gray-300 focus:outline-none focus:border-[#00A4CC]"
                />
                <Search className="absolute right-3 top-1.5 h-5 w-5 text-gray-400" />
              </div>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-4">
                {isAuthenticated ? (
                  <>
                    <span className="text-gray-700">Welcome, {user?.name}</span>
                    <button
                      onClick={signOut}
                      className="text-[#FF6F61] hover:text-[#FF5B4D] font-medium"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleAuthClick('signin')}
                      className="text-gray-700 hover:text-[#00A4CC] font-medium"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => handleAuthClick('signup')}
                      className="bg-[#00A4CC] text-white px-4 py-2 rounded-full hover:bg-[#008CAD] transition duration-150"
                    >
                      Get Started
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00A4CC]"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#00A4CC] hover:bg-gray-50">Home</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#00A4CC] hover:bg-gray-50">Courses</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#00A4CC] hover:bg-gray-50">Live Sessions</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#00A4CC] hover:bg-gray-50">About Us</a>
              
              <div className="relative mt-3 px-3">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-[#00A4CC]"
                />
                <Search className="absolute right-6 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              <div className="mt-4 space-y-2">
                {isAuthenticated ? (
                  <>
                    <span className="block px-3 py-2 text-gray-700">Welcome, {user?.name}</span>
                    <button
                      onClick={signOut}
                      className="w-full px-3 py-2 text-center text-[#FF6F61] hover:text-[#FF5B4D] hover:bg-gray-50 rounded-md"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleAuthClick('signin')}
                      className="w-full px-3 py-2 text-center text-gray-700 hover:text-[#00A4CC] hover:bg-gray-50 rounded-md"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => handleAuthClick('signup')}
                      className="w-full px-3 py-2 text-center bg-[#00A4CC] text-white rounded-full hover:bg-[#008CAD]"
                    >
                      Get Started
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
}