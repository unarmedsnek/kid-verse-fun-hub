
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Music, Puzzle, Info, CreditCard, Contact, LogIn, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b-2 border-sky/20 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-primary text-3xl font-baloo font-bold">
                Pasakojis
              </span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-text hover:text-primary"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/library" className="flex items-center space-x-1 text-text hover:text-primary font-medium transition-colors">
              <Music size={20} />
              <span>Library</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 text-text hover:text-primary font-medium transition-colors">
              <Info size={20} />
              <span>About</span>
            </Link>
            <Link to="/membership" className="flex items-center space-x-1 text-text hover:text-primary font-medium transition-colors">
              <CreditCard size={20} />
              <span>Membership</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-1 text-text hover:text-primary font-medium transition-colors">
              <Contact size={20} />
              <span>Contact</span>
            </Link>
            <Link to="/login" className="bubble-button bg-sky text-text">
              <span className="flex items-center">
                <LogIn className="mr-2" size={18} />
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-4 space-y-1 bg-white px-4">
            <Link 
              to="/library" 
              className="flex items-center space-x-2 px-3 py-4 text-text text-lg border-b border-sky/20"
              onClick={() => setIsOpen(false)}
            >
              <Music size={20} />
              <span>Library</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center space-x-2 px-3 py-4 text-text text-lg border-b border-sky/20"
              onClick={() => setIsOpen(false)}
            >
              <Info size={20} />
              <span>About</span>
            </Link>
            <Link 
              to="/membership" 
              className="flex items-center space-x-2 px-3 py-4 text-text text-lg border-b border-sky/20"
              onClick={() => setIsOpen(false)}
            >
              <CreditCard size={20} />
              <span>Membership</span>
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center space-x-2 px-3 py-4 text-text text-lg border-b border-sky/20"
              onClick={() => setIsOpen(false)}
            >
              <Contact size={20} />
              <span>Contact</span>
            </Link>
            <Link 
              to="/login" 
              className="bubble-button bg-sky text-text mt-4 block text-center"
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center justify-center">
                <LogIn className="mr-2" size={18} />
                Login
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
