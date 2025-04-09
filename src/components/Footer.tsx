
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-baloo font-bold">Children's Entertainment Hub</Link>
            <p className="mt-4 text-white/80">
              Safe, fun, and educational content for children of all ages.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-white hover:text-sky">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-sky">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-sky">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-sky">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-baloo font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white">About Us</Link></li>
              <li><Link to="/library" className="text-white/80 hover:text-white">Songs & Games</Link></li>
              <li><Link to="/membership" className="text-white/80 hover:text-white">Membership</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-baloo font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Parent Guidelines</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-baloo font-semibold mb-4">Newsletter</h3>
            <p className="text-white/80 mb-4">Subscribe for new content updates and parenting tips.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-full w-full focus:outline-none text-text"
              />
              <button 
                type="submit" 
                className="bg-yellow text-text px-4 py-2 rounded-r-full font-medium hover:bg-yellow-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-white/70">
          <p>© {new Date().getFullYear()} Children's Entertainment Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
