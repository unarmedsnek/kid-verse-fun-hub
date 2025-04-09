
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Music, Video, Puzzle, Search, Lock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Library = () => {
  const [activeTab, setActiveTab] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: "ABC Song",
      type: "song",
      icon: <Music className="h-5 w-5 text-primary" />,
      premium: false,
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 2,
      title: "Shape Adventure",
      type: "game",
      icon: <Puzzle className="h-5 w-5 text-yellow" />,
      premium: true,
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 3,
      title: "Colors of the Rainbow",
      type: "video",
      icon: <Video className="h-5 w-5 text-sky" />,
      premium: false,
      image: "https://images.unsplash.com/photo-1521651201144-634f700b36ef?auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 4,
      title: "Animal Sounds",
      type: "song",
      icon: <Music className="h-5 w-5 text-primary" />,
      premium: true,
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 5,
      title: "Count with Me",
      type: "song",
      icon: <Music className="h-5 w-5 text-primary" />,
      premium: false,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 6,
      title: "Memory Match",
      type: "game",
      icon: <Puzzle className="h-5 w-5 text-yellow" />,
      premium: true,
      image: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 7,
      title: "Fairy Tale Adventure",
      type: "video",
      icon: <Video className="h-5 w-5 text-sky" />,
      premium: true,
      image: "https://images.unsplash.com/photo-1511622472-3037aef77d15?auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 8,
      title: "Dinosaur Facts",
      type: "video",
      icon: <Video className="h-5 w-5 text-sky" />,
      premium: false,
      image: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=400&h=250"
    }
  ];

  const filteredContent = activeTab === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeTab);

  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Library</span>
            </h1>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              Browse our collection of educational and fun songs, videos, and games for children.
            </p>
          </div>
          
          {/* Search and filters */}
          <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-auto md:flex-grow max-w-md">
              <input
                type="text"
                placeholder="Search content..."
                className="pl-10 pr-4 py-2 rounded-full border-2 border-primary/20 w-full focus:outline-none focus:border-primary/40"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-primary/60" />
            </div>
            
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto py-2">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap ${
                  activeTab === 'all' ? 'bg-primary text-white' : 'bg-gray-100 text-text hover:bg-gray-200'
                }`}
              >
                All Content
              </button>
              <button 
                onClick={() => setActiveTab('song')}
                className={`px-4 py-2 rounded-full font-medium text-sm flex items-center gap-1 whitespace-nowrap ${
                  activeTab === 'song' ? 'bg-primary text-white' : 'bg-gray-100 text-text hover:bg-gray-200'
                }`}
              >
                <Music className="h-4 w-4" />
                Songs
              </button>
              <button 
                onClick={() => setActiveTab('video')}
                className={`px-4 py-2 rounded-full font-medium text-sm flex items-center gap-1 whitespace-nowrap ${
                  activeTab === 'video' ? 'bg-primary text-white' : 'bg-gray-100 text-text hover:bg-gray-200'
                }`}
              >
                <Video className="h-4 w-4" />
                Videos
              </button>
              <button 
                onClick={() => setActiveTab('game')}
                className={`px-4 py-2 rounded-full font-medium text-sm flex items-center gap-1 whitespace-nowrap ${
                  activeTab === 'game' ? 'bg-primary text-white' : 'bg-gray-100 text-text hover:bg-gray-200'
                }`}
              >
                <Puzzle className="h-4 w-4" />
                Games
              </button>
            </div>
          </div>
          
          {/* Content grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredContent.map((item) => (
              <div key={item.id} className="card group hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-40 object-cover"
                  />
                  <span className={`absolute top-3 right-3 ${item.premium ? 'bg-primary' : 'bg-green'} text-white text-xs px-2 py-1 rounded-full font-medium`}>
                    {item.premium ? 'Premium' : 'Free'}
                  </span>
                  {item.premium && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Lock className="h-12 w-12 text-white" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {item.icon}
                      <span className="ml-2 text-sm text-text/70 capitalize">{item.type}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-dark fill-yellow-dark" />
                      <Star className="h-4 w-4 text-yellow-dark fill-yellow-dark" />
                      <Star className="h-4 w-4 text-yellow-dark fill-yellow-dark" />
                      <Star className="h-4 w-4 text-yellow-dark fill-yellow-dark" />
                      <Star className="h-4 w-4 text-yellow-dark fill-yellow-dark" />
                    </div>
                  </div>
                  <h3 className="font-baloo font-semibold text-lg mt-2">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          {/* Membership callout */}
          <div className="mt-16 bg-primary/10 rounded-3xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Unlock All Premium Content
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Get unlimited access to our entire library of premium songs, videos, and games with a membership.
            </p>
            <Link to="/membership" className="bubble-button">
              View Membership Options
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Library;
