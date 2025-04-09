
import React from 'react';
import Layout from '@/components/Layout';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              We'd love to hear from you! Reach out with questions, feedback, or just to say hello.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-text/70">hello@childrensentertainmenthub.com</p>
                    <p className="text-text/70">support@childrensentertainmenthub.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-sky/20 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-sky-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-text/70">+1 (555) 123-4567</p>
                    <p className="text-text/70">Monday - Friday, 9am - 5pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow/20 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-yellow-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-text/70">123 Fun Street</p>
                    <p className="text-text/70">Playville, CA 90210</p>
                    <p className="text-text/70">United States</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green/20 p-3 rounded-full mr-4">
                    <MessageSquare className="h-6 w-6 text-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Social Media</h3>
                    <div className="flex space-x-4 mt-2">
                      <a href="#" className="text-text/70 hover:text-primary">Facebook</a>
                      <a href="#" className="text-text/70 hover:text-primary">Twitter</a>
                      <a href="#" className="text-text/70 hover:text-primary">Instagram</a>
                      <a href="#" className="text-text/70 hover:text-primary">YouTube</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bubble-button w-full flex justify-center"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="bg-primary/5 rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Find quick answers to common questions about our platform, membership, and content.
            </p>
            <a href="#" className="bubble-button bg-sky text-text">
              Visit FAQ Page
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
