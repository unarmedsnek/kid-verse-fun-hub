import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Video, Puzzle, Play } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  return <section className="pt-12 pb-16 md:pb-24 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text">
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
          
          <div className="flex-1 relative mt-10 md:mt-0">
            {/* Modified to have better mobile layout */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Updated positioning for better mobile layout */}
              <div className={`absolute inset-0 ${isMobile ? 'scale-75' : ''} bg-primary/20 rounded-full animate-pulse hidden sm:block`}></div>
              <div className={`absolute ${isMobile ? 'left-2 top-4 w-16 h-16' : 'left-4 top-6 w-20 sm:w-28 h-20 sm:h-28'} bg-yellow rounded-2xl rotate-12 animate-float shadow-lg`}></div>
              <div className={`absolute ${isMobile ? 'right-12 top-12 w-12 h-12' : 'right-16 top-16 w-16 sm:w-24 h-16 sm:h-24'} bg-green rounded-full animate-float animation-delay-200 shadow-lg`}></div>
              <div className={`absolute ${isMobile ? 'bottom-16 right-6 w-18 h-18' : 'bottom-20 right-8 w-24 sm:w-32 h-24 sm:h-32'} bg-sky rounded-3xl -rotate-6 animate-float animation-delay-400 shadow-lg`}></div>
              <div className={`absolute ${isMobile ? 'left-12 bottom-6 w-24 h-24' : 'left-16 bottom-8 w-32 sm:w-40 h-32 sm:h-40'} bg-primary rounded-full animate-float animation-delay-600 shadow-lg`}></div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;