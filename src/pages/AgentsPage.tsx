import React from 'react';
import NewNavbar from '@/components/layout/NewNavbar';
import { 
  Star, 
  Phone, 
  Mail, 
  Award, 
  Calendar,
  MessageSquare,
  TrendingUp,
  Users,
  CheckCircle,
  Linkedin,
  Twitter
} from 'lucide-react';

const AgentsPage = () => {
  const agents = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Senior Real Estate Agent',
      experience: '12 years',
      specialties: ['Luxury Homes', 'Investment Properties', 'Commercial Real Estate'],
      rating: 4.9,
      sales: 250,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786',
      featured: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Property Investment Specialist',
      experience: '15 years',
      specialties: ['Portfolio Management', 'Market Analysis', 'Investment Strategy'],
      rating: 4.8,
      sales: 180,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      featured: true
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'Residential Property Expert',
      experience: '8 years',
      specialties: ['First-time Buyers', 'Family Homes', 'Neighborhood Analysis'],
      rating: 4.7,
      sales: 120,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      featured: false
    },
    {
      id: 4,
      name: 'David Wilson',
      title: 'Commercial Real Estate Director',
      experience: '20 years',
      specialties: ['Office Spaces', 'Retail Properties', 'Development Projects'],
      rating: 4.9,
      sales: 300,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      featured: true
    },
    {
      id: 5,
      name: 'Jessica Lee',
      title: 'Luxury Property Consultant',
      experience: '10 years',
      specialties: ['Waterfront Properties', 'Penthouse Sales', 'International Clients'],
      rating: 4.8,
      sales: 150,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      featured: false
    },
    {
      id: 6,
      name: 'Robert Kim',
      title: 'Property Management Director',
      experience: '14 years',
      specialties: ['Rental Properties', 'Maintenance Management', 'Tenant Relations'],
      rating: 4.7,
      sales: 200,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      featured: false
    }
  ];

  const stats = [
    { label: 'Total Agents', value: '25+' },
    { label: 'Years Combined Experience', value: '200+' },
    { label: 'Properties Sold', value: '2,500+' },
    { label: 'Client Satisfaction', value: '98%' }
  ];

  return (
    <div className="min-h-screen">
      <NewNavbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet Our Expert Team</h1>
            <p className="text-xl text-blue-100 mb-8">
              Our team of dedicated real estate professionals brings decades of combined experience, 
              market knowledge, and a commitment to excellence in every transaction.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Real Estate Experts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each agent brings unique expertise and a personalized approach to help you achieve your real estate goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <div key={agent.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-64 object-cover"
                  />
                  {agent.featured && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured Agent
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="font-semibold">{agent.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-1">{agent.name}</h3>
                    <p className="text-gray-600 mb-3">{agent.title}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span>{agent.experience} experience • {agent.sales} sales</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-2">Specialties:</div>
                    <div className="flex flex-wrap gap-2">
                      {agent.specialties.map((specialty, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                        <Phone className="w-4 h-4" />
                      </a>
                      <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                        <Mail className="w-4 h-4" />
                      </a>
                      <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Team */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Work With Our Agents</h2>
              <p className="text-gray-600 mb-8">
                Our agents are more than just real estate professionals—they're your partners 
                in achieving your property goals with expertise and dedication.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Certified Experts</h3>
                    <p className="text-gray-600">All agents hold advanced certifications and continuous training.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Team Support</h3>
                    <p className="text-gray-600">Access to a full support team for every transaction.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageSquare className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Clear Communication</h3>
                    <p className="text-gray-600">Regular updates and transparent communication throughout the process.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Schedule a Consultation</h3>
              <p className="text-gray-600 mb-6">
                Meet with one of our agents to discuss your real estate needs and 
                learn how we can help you achieve your goals.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Free 30-minute consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>No obligation or commitment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Personalized recommendations</span>
                </div>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
              <p className="text-xl mb-8">
                Are you a talented real estate professional looking to grow your career? 
                Join our team of experts and benefit from our extensive resources and support.
              </p>
              <a
                href="/careers"
                className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg"
              >
                View Career Opportunities
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Agent Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>Competitive commission structure</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>Advanced training and development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>Marketing and lead generation support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>State-of-the-art technology tools</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgentsPage;