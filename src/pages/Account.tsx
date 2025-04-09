import React from 'react';
import Layout from '@/components/Layout';
import { User, Mail, CreditCard, LogOut, Settings, Gift, CheckCircle } from 'lucide-react';

const Account = () => {
  // Mock user data
  const user = {
    name: 'Jane Smith',
    email: 'jane@example.com',
    subscription: {
      type: 'Premium',
      status: 'Active',
      nextBillingDate: '2025-05-09',
      price: '$9.99/month'
    }
  };

  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              My <span className="text-primary">Account</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Sidebar */}
              <div className="md:col-span-1">
                <div className="card p-6 mb-6">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-12 w-12 text-primary" />
                    </div>
                    <h2 className="font-bold text-xl">{user.name}</h2>
                    <p className="text-text/70">{user.email}</p>
                  </div>
                  
                  <nav className="space-y-2">
                    <a href="#profile" className="flex items-center py-2 px-4 bg-primary/10 rounded-lg text-primary">
                      <User className="h-5 w-5 mr-3" />
                      <span>Profile</span>
                    </a>
                    <a href="#subscription" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-lg">
                      <CreditCard className="h-5 w-5 mr-3" />
                      <span>Subscription</span>
                    </a>
                    <a href="#settings" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-lg">
                      <Settings className="h-5 w-5 mr-3" />
                      <span>Settings</span>
                    </a>
                    <button className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-lg w-full text-left text-red-500">
                      <LogOut className="h-5 w-5 mr-3" />
                      <span>Sign Out</span>
                    </button>
                  </nav>
                </div>
                
                <div className="card p-6 bg-sky/10">
                  <div className="flex items-center mb-4">
                    <Gift className="h-6 w-6 text-sky mr-2" />
                    <h3 className="font-bold text-lg">Refer a Friend</h3>
                  </div>
                  <p className="text-text/70 text-sm mb-4">
                    Share the joy of learning! Invite friends and get one month free when they subscribe.
                  </p>
                  <button className="bubble-button w-full bg-sky text-text">
                    Get Referral Link
                  </button>
                </div>
              </div>
              
              {/* Main content */}
              <div className="md:col-span-2">
                {/* Profile section */}
                <div id="profile" className="card p-6 mb-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <User className="h-6 w-6 mr-2 text-primary" />
                    Profile Information
                  </h2>
                  
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="profile-name" className="block mb-2 font-medium">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="profile-name"
                        value={user.name}
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="profile-email" className="block mb-2 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="profile-email"
                        value={user.email}
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="profile-password" className="block mb-2 font-medium">
                        Password
                      </label>
                      <input
                        type="password"
                        id="profile-password"
                        value="••••••••"
                        disabled
                        className="w-full px-4 py-2 border-2 border-gray-200 bg-gray-50 rounded-lg"
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <button className="bubble-button bg-sky text-text">
                        Update Profile
                      </button>
                    </div>
                  </form>
                </div>
                
                {/* Subscription section */}
                <div id="subscription" className="card p-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <CreditCard className="h-6 w-6 mr-2 text-primary" />
                    Subscription Details
                  </h2>
                  
                  <div className="bg-green/10 p-4 rounded-lg mb-6 flex items-center">
                    <div className="bg-green/20 p-2 rounded-full mr-4">
                      <CheckCircle className="h-5 w-5 text-green" />
                    </div>
                    <div>
                      <div className="font-semibold">Active Subscription</div>
                      <div className="text-sm text-text/70">Your subscription is currently active.</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="text-sm text-text/70 mb-1">Plan</div>
                      <div className="font-semibold">{user.subscription.type}</div>
                    </div>
                    <div>
                      <div className="text-sm text-text/70 mb-1">Price</div>
                      <div className="font-semibold">{user.subscription.price}</div>
                    </div>
                    <div>
                      <div className="text-sm text-text/70 mb-1">Status</div>
                      <div className="font-semibold">{user.subscription.status}</div>
                    </div>
                    <div>
                      <div className="text-sm text-text/70 mb-1">Next Billing Date</div>
                      <div className="font-semibold">{user.subscription.nextBillingDate}</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <button className="bubble-button">
                      Manage Subscription
                    </button>
                    <button className="bubble-button bg-gray-100 text-text hover:bg-gray-200">
                      View Billing History
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Account;
