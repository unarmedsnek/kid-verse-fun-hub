
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, EyeOff, Eye, CheckCircle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const isMobile = useIsMobile();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const BenefitsList = () => (
    <div className="space-y-4">
      <div className="flex items-start">
        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
        <span>Unlimited access to all premium content</span>
      </div>
      <div className="flex items-start">
        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
        <span>100+ songs and interactive games</span>
      </div>
      <div className="flex items-start">
        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
        <span>Ad-free, child-safe environment</span>
      </div>
      <div className="flex items-start">
        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
        <span>New content added weekly</span>
      </div>
      <div className="flex items-start">
        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
        <span>Download content for offline use</span>
      </div>
      <div className="flex items-start">
        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
        <span>Access on multiple devices</span>
      </div>
      <div className="flex items-start">
        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
        <span>Cancel anytime, no commitments</span>
      </div>
    </div>
  );

  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {isMobile && (
                <div>
                  <h2 className="text-xl font-bold mb-6">Membership Benefits</h2>
                  <BenefitsList />
                </div>
              )}
              
              <div className="card border-2 border-primary/20 p-8">
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-primary mb-2">Start Your Family's Fun Today!</h1>
                  <p className="text-text/70 text-sm">
                    Create an account to begin your entertainment journey
                  </p>
                </div>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-medium text-sm">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                        placeholder="John Doe"
                      />
                      <User className="absolute left-3 top-2.5 h-5 w-5 text-text/40" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium text-sm">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                        placeholder="your@email.com"
                      />
                      <Mail className="absolute left-3 top-2.5 h-5 w-5 text-text/40" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block mb-1 font-medium text-sm">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        className="w-full pl-10 pr-10 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                        placeholder="••••••••"
                      />
                      <Lock className="absolute left-3 top-2.5 h-5 w-5 text-text/40" />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-2.5 text-text/40 hover:text-text/70"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="confirm-password" className="block mb-1 font-medium text-sm">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="confirm-password"
                        className="w-full pl-10 pr-10 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                        placeholder="••••••••"
                      />
                      <Lock className="absolute left-3 top-2.5 h-5 w-5 text-text/40" />
                      <button
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                        className="absolute right-3 top-2.5 text-text/40 hover:text-text/70"
                      >
                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 mt-1 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <label htmlFor="terms" className="ml-2 text-sm text-text/70">
                      I agree to the{' '}
                      <a href="#" className="text-primary hover:text-primary-dark">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-primary hover:text-primary-dark">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="bubble-button w-full flex justify-center"
                  >
                    Create Account
                  </button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-text/70 text-sm">
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary hover:text-primary-dark">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
              
              {!isMobile && (
                <div className="bg-primary/5 p-8 rounded-3xl">
                  <h2 className="text-xl font-bold mb-6">Membership Benefits</h2>
                  <BenefitsList />
                  
                  <div className="mt-8 p-4 bg-yellow/20 rounded-xl">
                    <div className="font-bold mb-1">Immediate Access</div>
                    <p className="text-sm">
                      Get immediate access to all premium features when you subscribe. Cancel anytime.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
