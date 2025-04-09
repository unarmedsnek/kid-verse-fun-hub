
import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Video, Puzzle, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-12 pb-24 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text">
              <span className="text-primary">Songs</span> & 
              <span className="text-sky"> Games</span> for 
              <span className="text-yellow"> Happy</span> 
              <span className="text-green"> Kids</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-text/80 max-w-2xl">
              Discover a world of fun, educational songs and interactive games designed specially for children. 
              Safe, ad-free entertainment that parents can trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register" className="bubble-button text-lg">
                Join Now
              </Link>
              <Link to="/library" className="bubble-button text-lg bg-sky text-text">
                Browse Free Content
              </Link>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-text/70">
                <Music className="text-primary" />
                <span className="text-sm">100+ Songs</span>
              </div>
              <div className="flex items-center gap-2 text-text/70">
                <Puzzle className="text-yellow" />
                <span className="text-sm">50+ Games</span>
              </div>
              <div className="flex items-center gap-2 text-text/70">
                <Video className="text-green" />
                <span className="text-sm">Ad-free Videos</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute left-4 top-6 w-28 h-28 bg-yellow rounded-2xl rotate-12 animate-float shadow-lg"></div>
              <div className="absolute right-16 top-16 w-24 h-24 bg-green rounded-full animate-float animation-delay-200 shadow-lg"></div>
              <div className="absolute bottom-20 right-8 w-32 h-32 bg-sky rounded-3xl -rotate-6 animate-float animation-delay-400 shadow-lg"></div>
              <div className="absolute left-16 bottom-8 w-40 h-40 bg-primary rounded-full animate-float animation-delay-600 shadow-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bubble-button flex items-center space-x-2 bg-white text-primary hover:bg-primary hover:text-white px-6 py-4">
                  <Play className="h-6 w-6" />
                  <span className="font-baloo text-lg">Watch Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
