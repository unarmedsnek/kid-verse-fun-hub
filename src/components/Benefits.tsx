
import React from 'react';
import { ShieldCheck, Clock, RefreshCw, Heart } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Safe & Ad-Free",
      description: "Child-safe environment with no ads or inappropriate content. Parents can trust our curated collection."
    },
    {
      icon: <Clock className="h-8 w-8 text-yellow" />,
      title: "Unlimited Access",
      description: "Enjoy unlimited access to our full library of songs, videos, and games with a membership."
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-sky" />,
      title: "Weekly Updates",
      description: "Fresh content added weekly to keep children engaged with new learning experiences."
    },
    {
      icon: <Heart className="h-8 w-8 text-green" />,
      title: "Educational & Fun",
      description: "Carefully crafted content that balances education and entertainment for optimal learning."
    }
  ];

  return (
    <section className="py-16 px-4 bg-primary/5">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Why Parents <span className="text-primary">Love Us</span>
          </h2>
          <p className="text-lg text-text/70 max-w-2xl mx-auto">
            We create content that parents can trust and children adore. Here's what makes our platform special.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="card bg-white p-6 text-center flex flex-col items-center">
              <div className="mb-4 rounded-full bg-white p-3 shadow-md">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-baloo font-bold mb-2">{benefit.title}</h3>
              <p className="text-text/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
