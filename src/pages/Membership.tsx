
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { CheckCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Membership = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const benefits = [
    "Unlimited access to all premium content",
    "Ad-free experience",
    "New content added weekly",
    "Download songs and games for offline use",
    "Access on multiple devices",
    "Priority customer support"
  ];

  const faqs = [
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period."
    },
    {
      question: "How many devices can I use with one subscription?",
      answer: "You can use your subscription on up to 3 devices simultaneously with a single account."
    },
    {
      question: "Is there a family plan available?",
      answer: "Yes, our family plan allows up to 5 profiles under one subscription. Each profile gets personalized recommendations."
    },
    {
      question: "When does my subscription begin?",
      answer: "Your subscription begins immediately after payment is processed, giving you instant access to all premium content."
    }
  ];

  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Become a <span className="text-primary">Member</span>
            </h1>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              Join our community and unlock all premium content for your children.
            </p>
          </div>
          
          {/* Pricing toggle */}
          <div className="flex justify-center items-center space-x-4 mb-12">
            <span className={`text-lg font-medium ${billingPeriod === 'monthly' ? 'text-primary' : 'text-text/70'}`}>
              Monthly
            </span>
            <div className="relative">
              <input
                type="checkbox"
                id="toggle"
                className="sr-only"
                checked={billingPeriod === 'yearly'}
                onChange={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              />
              <label
                htmlFor="toggle"
                className="block bg-gray-200 w-14 h-8 rounded-full cursor-pointer transition-colors duration-200 ease-in-out"
              >
                <span
                  className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-200 ease-in-out ${
                    billingPeriod === 'yearly' ? 'transform translate-x-6' : ''
                  }`}
                />
              </label>
            </div>
            <span className={`text-lg font-medium flex items-center ${billingPeriod === 'yearly' ? 'text-primary' : 'text-text/70'}`}>
              Yearly
              <span className="ml-2 bg-green text-white text-xs px-2 py-1 rounded-full">Save 20%</span>
            </span>
          </div>
          
          {/* Pricing cards */}
          <div className="flex flex-col md:flex-row gap-8 mb-16 justify-center">
            <div className="card border-2 border-primary/50 max-w-md w-full">
              <div className="bg-primary text-white p-6 rounded-t-3xl">
                <h2 className="text-2xl font-bold text-center">Premium Membership</h2>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">
                    {billingPeriod === 'monthly' ? '$9.99' : '$95.88'}
                  </span>
                  <span className="text-text/70">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                  {billingPeriod === 'yearly' && (
                    <div className="text-green text-sm font-medium mt-1">
                      Save $23.88 annually
                    </div>
                  )}
                </div>
                
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/register" className="bubble-button w-full flex justify-center">
                  Subscribe Now
                </Link>
                <p className="text-sm text-text/70 text-center mt-4">
                  Immediate access, cancel anytime
                </p>
              </div>
            </div>
          </div>
          
          {/* Benefits section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Why Choose Our Membership
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">For Children</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fun, engaging content that entertains while teaching</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Age-appropriate content for all developmental stages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Builds confidence and knowledge through play</span>
                  </li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">For Parents</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Peace of mind with safe, ad-free environment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Quality content reviewed by educational experts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Flexible access on multiple devices for busy families</span>
                  </li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">For Educators</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Content aligned with early learning standards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Supplementary materials for classroom activities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Special licensing options for schools and institutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* FAQ section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl mx-auto divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <div key={index} className="py-6">
                  <div className="flex items-start">
                    <HelpCircle className="h-6 w-6 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                      <p className="text-text/70">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg mb-4">
                Have more questions? We're here to help!
              </p>
              <Link to="/contact" className="bubble-button bg-sky text-text">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Membership;
