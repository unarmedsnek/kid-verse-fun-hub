
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Mail, Lock, EyeOff, Eye } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto card border-2 border-primary/20 p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-primary mb-2">Welcome Back!</h1>
              <p className="text-text/70">
                Sign in to access your account and all premium content
              </p>
            </div>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
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
                <label htmlFor="password" className="block mb-2 font-medium">
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
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-text/70">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-primary hover:text-primary-dark">
                  Forgot password?
                </a>
              </div>
              
              <button
                type="submit"
                className="bubble-button w-full flex justify-center"
              >
                Sign In
              </button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-text/70">
                Don't have an account?{' '}
                <Link to="/register" className="text-primary hover:text-primary-dark">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
