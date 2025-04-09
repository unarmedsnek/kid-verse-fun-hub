
import React from 'react';
import Layout from '@/components/Layout';
import { Smile, Heart, Star } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">About Us</h1>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              Meet the team behind Children's Entertainment Hub and learn about our mission.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg mb-4">
                Children's Entertainment Hub was founded in 2023 by a group of parents, educators, and artists 
                who wanted to create a safe, enriching online space for children.
              </p>
              <p className="text-lg mb-4">
                We noticed that many children's platforms were filled with advertisements and sometimes inappropriate content.
                We set out to build something different—a carefully curated collection of songs, videos, and games designed 
                to entertain while supporting childhood development.
              </p>
              <p className="text-lg">
                Today, we're proud to offer hundreds of high-quality, ad-free educational resources that families around the
                world trust and love.
              </p>
            </div>
            <div className="flex-1">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1564429097439-923c4a8f0c4b?auto=format&fit=crop&w=600" 
                  alt="Children playing" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card p-6 text-center">
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <Smile className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Joy in Learning</h3>
              <p className="text-text/70">
                We believe that children learn best when they're having fun. Our content makes learning a joyful experience.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="inline-flex p-3 rounded-full bg-yellow/20 mb-4">
                <Heart className="h-8 w-8 text-yellow-dark" />
              </div>
              <h3 className="text-xl font-bold mb-2">Child Safety First</h3>
              <p className="text-text/70">
                Every piece of content is carefully reviewed to ensure it's appropriate and safe for young audiences.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="inline-flex p-3 rounded-full bg-sky/20 mb-4">
                <Star className="h-8 w-8 text-sky-dark" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Content</h3>
              <p className="text-text/70">
                We collaborate with educational experts, musicians, and animators to create top-quality content.
              </p>
            </div>
          </div>
          
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Emma Johnson", role: "Founder & Educational Director", image: "https://i.pravatar.cc/150?img=1" },
                { name: "David Chen", role: "Head of Content Creation", image: "https://i.pravatar.cc/150?img=8" },
                { name: "Sophie Williams", role: "Children's Musician", image: "https://i.pravatar.cc/150?img=5" },
                { name: "Marcus Taylor", role: "Animation Director", image: "https://i.pravatar.cc/150?img=3" },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-text/70">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
