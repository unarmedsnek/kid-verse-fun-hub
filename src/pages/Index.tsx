
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ContentPreview from '@/components/ContentPreview';
import Benefits from '@/components/Benefits';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      {/* Increased z-index to make sure content stays above any floating elements */}
      <div className="relative z-20">
        <Hero />
        <ContentPreview />
        <Benefits />
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-sky/20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-6">
              Ready to Start the Fun?
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto mb-8">
              Join thousands of happy families who trust us for safe and educational entertainment.
            </p>
            <Link to="/register" className="bubble-button text-lg">
              Subscribe Now
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
