import React from 'react';
import { Search, Home, Shield, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80"></div>
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&auto=format&fit=crop"
          alt="Luxury Real Estate"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Find Your Dream Home with Confidence
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Elite Reality connects you with premium properties and expert agents. 
            Experience seamless real estate transactions with our professional team.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-xl p-2 shadow-2xl mb-12">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Enter location, neighborhood, or ZIP code"
                    className="w-full pl-12 pr-4 py-4 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 text-gray-800"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <select className="px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-800">
                  <option value="">Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="commercial">Commercial</option>
                </select>
                <select className="px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-800">
                  <option value="">Price Range</option>
                  <option value="0-300000">$0 - $300,000</option>
                  <option value="300000-600000">$300,000 - $600,000</option>
                  <option value="600000-1000000">$600,000 - $1M</option>
                  <option value="1000000+">$1M+</option>
                </select>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <div className="bg-white/20 p-4 rounded-xl mr-4 backdrop-blur-sm">
                <Home className="w-8 h-8" />
              </div>
              <div>
                <div className="text-3xl font-bold">1,500+</div>
                <div className="text-blue-200">Properties Sold</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-white/20 p-4 rounded-xl mr-4 backdrop-blur-sm">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <div className="text-3xl font-bold">98%</div>
                <div className="text-blue-200">Client Satisfaction</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-white/20 p-4 rounded-xl mr-4 backdrop-blur-sm">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div>
                <div className="text-3xl font-bold">15+ Years</div>
                <div className="text-blue-200">Industry Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;