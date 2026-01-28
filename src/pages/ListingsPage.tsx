import React, { useState } from 'react';
import NewNavbar from '@/components/layout/NewNavbar';
import { 
  Search, 
  Filter, 
  MapPin, 
  Heart, 
  Share2,
  Grid,
  List,
  ChevronDown,
  LandPlot,
  Home,
  Building,
  Trees,
  Map,
  ShieldCheck,
  ArrowRight,
  Target,
  Globe,
  FileText,
  DollarSign,
  CheckCircle,
  Phone,
  Users,
  Award
} from 'lucide-react';

const ListingsPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    type: '',
    priceRange: '',
    size: '',
    location: '',
    status: 'verified',
    sortBy: 'featured'
  });

  const lands = [
    {
      id: 1,
      title: 'Prime 1-Acre Plot in Kitengela',
      price: 'KES 8,500,000',
      location: 'Kitengela, Kajiado',
      type: 'Residential Plot',
      size: '1 Acre',
      features: ['Title Deed Available', 'Water Available', 'Access Road', 'Electricity'],
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
      featured: true,
      status: 'Verified',
      development: true,
      diasporaSpecial: true
    },
    {
      id: 2,
      title: 'Commercial Plot Along Mombasa Road',
      price: 'KES 15,000,000',
      location: 'Athi River, Machakos',
      type: 'Commercial Plot',
      size: '0.5 Acres',
      features: ['Strategic Location', 'Zoned Commercial', 'Main Road Frontage', 'Ready for Development'],
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef',
      featured: true,
      status: 'Verified',
      development: true,
      diasporaSpecial: true
    },
    {
      id: 3,
      title: 'Agricultural Land in Rift Valley',
      price: 'KES 12,000,000',
      location: 'Naivasha, Nakuru',
      type: 'Agricultural Land',
      size: '5 Acres',
      features: ['Fertile Soil', 'Water Rights', 'Irrigation System', 'Storage Facilities'],
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef',
      featured: false,
      status: 'Verified',
      development: false,
      diasporaSpecial: false
    },
    {
      id: 4,
      title: 'Residential Plot in Thika',
      price: 'KES 3,500,000',
      location: 'Thika, Kiambu',
      type: 'Residential Plot',
      size: '1/8 Acre',
      features: ['Title Deed Available', 'Water & Electricity', 'Gated Community', 'Near Schools'],
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
      featured: false,
      status: 'Verified',
      development: true,
      diasporaSpecial: true
    },
    {
      id: 5,
      title: 'Beach Plot in Diani',
      price: 'KES 25,000,000',
      location: 'Diani, Kwale',
      type: 'Beach Plot',
      size: '0.25 Acres',
      features: ['Ocean Front', 'Tourist Zone', 'All Services', 'Investment Opportunity'],
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      featured: true,
      status: 'Verified',
      development: false,
      diasporaSpecial: true
    },
    {
      id: 6,
      title: 'Mixed-Use Land in Ruaka',
      price: 'KES 18,000,000',
      location: 'Ruaka, Kiambu',
      type: 'Mixed-Use Land',
      size: '0.75 Acres',
      features: ['Residential/Commercial', 'Prime Location', 'All Utilities', 'High ROI Potential'],
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
      featured: true,
      status: 'Under Verification',
      development: true,
      diasporaSpecial: false
    },
    {
      id: 7,
      title: 'Suburban Plot in Ngong',
      price: 'KES 4,200,000',
      location: 'Ngong, Kajiado',
      type: 'Residential Plot',
      size: '1/4 Acre',
      features: ['Quiet Neighborhood', 'Good Security', 'Near CBD', 'Family-Friendly'],
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
      featured: false,
      status: 'Verified',
      development: true,
      diasporaSpecial: true
    },
    {
      id: 8,
      title: 'Industrial Plot in Athi River',
      price: 'KES 30,000,000',
      location: 'Athi River EPZ',
      type: 'Industrial Land',
      size: '2 Acres',
      features: ['EPZ Zone', 'Heavy Power Supply', 'Rail Access', 'Warehouse Potential'],
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef',
      featured: false,
      status: 'Verified',
      development: false,
      diasporaSpecial: false
    }
  ];

  const propertyTypes = [
    { icon: <LandPlot className="w-5 h-5" />, label: 'All Lands', value: '', color: 'bg-blue-500' },
    { icon: <Home className="w-5 h-5" />, label: 'Residential', value: 'residential', color: 'bg-green-500' },
    { icon: <Building className="w-5 h-5" />, label: 'Commercial', value: 'commercial', color: 'bg-orange-500' },
    { icon: <Trees className="w-5 h-5" />, label: 'Agricultural', value: 'agricultural', color: 'bg-emerald-500' },
    { icon: <Building className="w-5 h-5" />, label: 'Industrial', value: 'industrial', color: 'bg-purple-500' },
    { icon: <Map className="w-5 h-5" />, label: 'Beach Front', value: 'beach', color: 'bg-cyan-500' },
  ];

  const locations = [
    'Nairobi Environs', 'Kitengela', 'Athi River', 'Thika', 'Naivasha', 'Diani', 'Ngong', 'Ruaka'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NewNavbar />

      {/* Hero Section - Land Focused */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-green-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container relative px-4 mx-auto">
          <div className="max-w-4xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              <ShieldCheck className="w-4 h-4 mr-2 text-green-300" />
              <span className="mr-2">100% Verified Land Listings</span>
              <span className="px-2 py-0.5 bg-orange-500/90 rounded-full text-xs font-bold">DIASPORA APPROVED</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Discover Verified
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-green-300 to-orange-300">
                Kenyan Land Opportunities
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Browse our curated collection of scam-proof land listings, specially verified for diaspora investors. 
              Each property comes with comprehensive documentation and transparent pricing.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 mt-10">
              <div className="flex items-center">
                <div className="p-2 bg-green-500/20 rounded-lg mr-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                </div>
                <div>
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-blue-200">Verified Plots</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-blue-500/20 rounded-lg mr-3">
                  <Globe className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-sm text-blue-200">Prime Locations</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-orange-500/20 rounded-lg mr-3">
                  <Users className="w-5 h-5 text-orange-300" />
                </div>
                <div>
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm text-blue-200">Diaspora Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Search & Filters */}
      <section className="py-8 bg-white border-b shadow-sm">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Main Search */}
            <div className="flex-1 w-full max-w-3xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by location, plot size, or features (e.g., 'Kitengela 1 acre with title')..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* View & Filter Controls */}
            <div className="flex items-center space-x-4">
              <div className="flex border border-gray-300 rounded-xl overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 ${viewMode === 'grid' ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 ${viewMode === 'list' ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              <button className="flex items-center border border-gray-300 hover:bg-gray-50 px-4 py-3 rounded-xl transition-colors group">
                <Filter className="w-5 h-5 mr-2 text-gray-500 group-hover:text-blue-600" />
                <span className="font-medium">Advanced Filters</span>
                <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Property Type Quick Filters */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wider">FILTER BY LAND TYPE</h3>
            <div className="flex flex-wrap gap-3">
              {propertyTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setFilters({...filters, type: type.value})}
                  className={`flex items-center px-5 py-3 rounded-xl border transition-all duration-300 ${
                    filters.type === type.value
                      ? `bg-gradient-to-r ${type.color} ${type.color.replace('bg-', 'to-').replace('500', '600')} text-white border-transparent shadow-lg`
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-sm bg-white'
                  }`}
                >
                  <span className={`mr-3 ${filters.type === type.value ? 'text-white' : 'text-gray-500'}`}>
                    {type.icon}
                  </span>
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Location Filters */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wider">POPULAR LOCATIONS</h3>
            <div className="flex flex-wrap gap-3">
              {locations.map((location) => (
                <button
                  key={location}
                  onClick={() => setFilters({...filters, location})}
                  className={`px-4 py-2 rounded-full border transition-colors ${
                    filters.location === location
                      ? 'bg-blue-50 text-blue-600 border-blue-200 font-semibold'
                      : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Land Listings Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          {/* Stats and Sort */}
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{lands.length} Verified Lands Available</h2>
              <p className="text-gray-600">Showing 1-{lands.length} of {lands.length} verified results</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 font-medium">Sort by:</span>
              <select 
                value={filters.sortBy}
                onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
                className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="featured">Featured First</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="size">Size: Largest First</option>
                <option value="verified">Verified Status</option>
              </select>
            </div>
          </div>

          {/* Trust Banner */}
          <div className="mb-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg mr-4">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">BlueVision Verification Guarantee</h3>
                <p className="text-sm text-gray-600">
                  All listings undergo our 5-step verification process including title deed check, physical site visit, 
                  and legal due diligence. Your investment is protected.
                </p>
              </div>
              <a href="/verification-process" className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          {/* Lands Grid/List View */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {lands.map((land) => (
                <div key={land.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  {/* Image Section */}
                  <div className="relative h-56">
                    <img
                      src={land.image}
                      alt={land.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {land.featured && (
                        <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-xs font-bold shadow-lg">
                          <Award className="w-3 h-3 mr-1" />
                          FEATURED
                        </div>
                      )}
                      {land.diasporaSpecial && (
                        <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-xs font-bold shadow-lg">
                          <Globe className="w-3 h-3 mr-1" />
                          DIASPORA SPECIAL
                        </div>
                      )}
                    </div>
                    
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors">
                        <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
                      </button>
                      <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors">
                        <Share2 className="w-5 h-5 text-gray-400 hover:text-blue-500" />
                      </button>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute bottom-3 left-3">
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-bold ${
                        land.status === 'Verified' 
                          ? 'bg-green-100 text-green-800 border border-green-200' 
                          : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                      }`}>
                        <ShieldCheck className={`w-3 h-3 mr-1.5 ${land.status === 'Verified' ? 'text-green-600' : 'text-yellow-600'}`} />
                        {land.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  
                  {/* Details Section */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                        {land.title}
                      </h3>
                      <span className="text-xl font-bold text-blue-600">{land.price}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                      <span className="text-sm font-medium">{land.location}</span>
                    </div>
                    
                    {/* Type & Size */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">
                        {land.type}
                      </span>
                      <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold flex items-center">
                        <Target className="w-4 h-4 mr-1.5" />
                        {land.size}
                      </span>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {land.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                            <CheckCircle className="w-3 h-3 mr-1.5 text-green-500" />
                            {feature}
                          </span>
                        ))}
                        {land.features.length > 3 && (
                          <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                            +{land.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <a 
                        href={`/lands/${land.id}`}
                        className="px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-semibold text-sm transition-all hover:shadow-lg flex items-center group/btn"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                      <a 
                        href="/diaspora-consultation"
                        className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                          land.diasporaSpecial 
                            ? 'bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 hover:from-orange-100 hover:to-orange-200 border border-orange-200 hover:border-orange-300'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                        }`}
                      >
                        Diaspora Inquiry
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="space-y-6">
              {lands.map((land) => (
                <div key={land.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Image */}
                    <div className="md:w-72 h-56 relative flex-shrink-0">
                      <img
                        src={land.image}
                        alt={land.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {land.featured && (
                          <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-xs font-bold">
                            FEATURED
                          </div>
                        )}
                        {land.diasporaSpecial && (
                          <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-xs font-bold">
                            DIASPORA
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Details */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mr-3 ${
                              land.status === 'Verified' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              <ShieldCheck className="w-3 h-3 mr-1.5" />
                              {land.status}
                            </span>
                            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold">
                              {land.type}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{land.title}</h3>
                          <div className="flex items-center text-gray-600 mb-3">
                            <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                            <span className="font-medium">{land.location}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600 mb-2">{land.price}</div>
                          <div className="text-lg font-semibold text-gray-700">{land.size}</div>
                        </div>
                      </div>
                      
                      {/* Features */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {land.features.map((feature, idx) => (
                            <span key={idx} className="inline-flex items-center px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm font-medium">
                              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-100">
                        <div className="flex items-center space-x-4">
                          <button className="p-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                            <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
                          </button>
                          <button className="p-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                            <Share2 className="w-5 h-5 text-gray-400 hover:text-blue-500" />
                          </button>
                          <button className="flex items-center text-sm text-gray-600 hover:text-blue-600">
                            <Map className="w-4 h-4 mr-2" />
                            View on Map
                          </button>
                        </div>
                        <div className="flex items-center space-x-3">
                          <a 
                            href={`/lands/${land.id}`}
                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-semibold transition-all hover:shadow-lg flex items-center group/btn"
                          >
                            Full Details
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </a>
                          <a 
                            href={`/consultation?land=${land.id}`}
                            className="px-6 py-3 bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 hover:from-orange-100 hover:to-orange-200 rounded-xl font-semibold border border-orange-200 hover:border-orange-300 transition-all"
                          >
                            Free Consultation
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              <button className="px-5 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 font-medium">
                Previous
              </button>
              <button className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold">1</button>
              <button className="px-5 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 font-medium">2</button>
              <button className="px-5 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 font-medium">3</button>
              <button className="px-5 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 font-medium">4</button>
              <button className="px-5 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 font-medium">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Diaspora CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-800 text-white">
        <div className="container px-4 mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto mb-8 shadow-lg">
            <Globe className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold mb-6">Investing from Abroad?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our diaspora specialists handle everything remotely—from verification to purchase. 
            Get weekly video updates and complete transparency throughout the process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="/diaspora-services"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center justify-center group"
            >
              <span className="flex items-center">
                Diaspora Services Guide
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="tel:+254711387303"
              className="px-8 py-4 bg-transparent border-2 border-white/40 hover:border-orange-400 hover:bg-white/10 text-white font-bold rounded-xl backdrop-blur-sm transition-all duration-300 text-lg flex items-center justify-center group"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:text-orange-300 transition-colors" />
              Call Diaspora Desk
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <FileText className="w-8 h-8 text-green-300 mb-3" />
              <h4 className="font-bold mb-2">Complete Documentation</h4>
              <p className="text-blue-100 text-sm">All legal documents digitally delivered</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <DollarSign className="w-8 h-8 text-green-300 mb-3" />
              <h4 className="font-bold mb-2">Secure Payments</h4>
              <p className="text-blue-100 text-sm">Escrow services for international transfers</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <Users className="w-8 h-8 text-green-300 mb-3" />
              <h4 className="font-bold mb-2">Dedicated Manager</h4>
              <p className="text-blue-100 text-sm">Personal account manager for each client</p>
            </div>
          </div>
        </div>
      </section>

      {/* Need More Help */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Need Help Finding the Right Land?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our land experts can help you find the perfect plot based on your investment goals, 
            budget, and preferences.
          </p>
          <a
            href="/personalized-search"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg group"
          >
            <span className="flex items-center">
              Request Personalized Search
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ListingsPage;