
import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Puzzle, Lock } from 'lucide-react';

const ContentPreview: React.FC = () => {
  const previewContent = [
    {
      id: 1,
      title: "ABC Song",
      type: "song",
      icon: <Music className="h-5 w-5 text-primary" />,
      badge: "Free",
      badgeColor: "bg-green",
      description: "Learn the alphabet through this catchy tune that children love.",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 2,
      title: "Shape Adventure",
      type: "game",
      icon: <Puzzle className="h-5 w-5 text-yellow" />,
      badge: "Premium",
      badgeColor: "bg-primary",
      description: "Interactive game teaching shapes and colors through fun adventures.",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 3,
      title: "Colors of the Rainbow",
      type: "song",
      icon: <Music className="h-5 w-5 text-primary" />,
      badge: "Free",
      badgeColor: "bg-green",
      description: "A melodic journey through all the colors of the rainbow.",
      image: "https://images.unsplash.com/photo-1521651201144-634f700b36ef?auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 4,
      title: "Animal Sounds",
      type: "song",
      icon: <Music className="h-5 w-5 text-primary" />,
      badge: "Premium",
      badgeColor: "bg-primary",
      description: "Learn about different animals and the sounds they make.",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=400&h=250"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Discover Our <span className="text-primary">Content</span>
          </h2>
          <p className="text-lg text-text/70 max-w-2xl mx-auto">
            Explore a selection of our most popular songs and games designed to engage children while they learn and have fun.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {previewContent.map((item) => (
            <div key={item.id} className="card group hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-40 object-cover"
                />
                <span className={`absolute top-3 right-3 ${item.badgeColor} text-white text-xs px-2 py-1 rounded-full font-medium`}>
                  {item.badge}
                </span>
                {item.badge === "Premium" && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Lock className="h-12 w-12 text-white" />
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-2 text-sm text-text/70 capitalize">{item.type}</span>
                </div>
                <h3 className="font-baloo font-semibold text-lg mt-2">{item.title}</h3>
                <p className="text-sm text-text/70 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/library" className="bubble-button bg-sky text-text">
            See All Content
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContentPreview;
