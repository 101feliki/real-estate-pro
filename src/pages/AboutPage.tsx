import React from 'react';
import NewNavbar from '@/components/layout/NewNavbar';
import { 
  Users, 
  Target, 
  Heart, 
  Shield,
  Clock,
  Award,
  ArrowRight,
  CheckCircle,
  Globe,
  ShieldCheck,
  MapPin,
  LandPlot,
  FileSearch,
  Building2,
  Compass,
  Target as TargetIcon
} from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Diaspora Focused',
      description: 'Specialized expertise serving Kenyans abroad with tailored land acquisition solutions.',
      color: 'bg-blue-50 text-blue-600',
      border: 'border-l-4 border-blue-500'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Verified Integrity',
      description: 'Scam-proof processes with transparent verification and full documentation.',
      color: 'bg-green-50 text-green-600',
      border: 'border-l-4 border-green-500'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Land Excellence',
      description: 'Unmatched expertise in Kenyan land markets, zoning, and development potential.',
      color: 'bg-orange-50 text-orange-600',
      border: 'border-l-4 border-orange-500'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Partnership',
      description: 'Building lifelong relationships, not just closing transactions.',
      color: 'bg-indigo-50 text-indigo-600',
      border: 'border-l-4 border-indigo-500'
    }
  ];

  const milestones = [
    { 
      year: '2010', 
      title: 'Vision Established', 
      description: 'Founded with a mission to provide safe land investment for the Kenyan diaspora.',
      icon: <Compass className="w-5 h-5" />
    },
    { 
      year: '2014', 
      title: 'Verification System', 
      description: 'Developed proprietary scam-proof land verification protocols.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    { 
      year: '2018', 
      title: 'Diaspora Expansion', 
      description: 'Launched dedicated UK office to serve growing Kenyan community abroad.',
      icon: <Globe className="w-5 h-5" />
    },
    { 
      year: '2021', 
      title: '500+ Plots Verified', 
      description: 'Milestone of successfully verifying and transacting over 500 land parcels.',
      icon: <LandPlot className="w-5 h-5" />
    },
    { 
      year: '2024', 
      title: 'Complete Solutions', 
      description: 'Expanded to full-service development management for remote investors.',
      icon: <Building2 className="w-5 h-5" />
    },
  ];

  const leadership = [
    {
      name: 'Sarah Kamau',
      role: 'Founder & CEO',
      expertise: 'Land Acquisition Specialist',
      experience: '15+ years in Kenyan real estate',
      quote: 'We don\'t just sell land—we secure legacies for families abroad.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Michael Ochieng',
      role: 'Operations Director',
      expertise: 'Diaspora Relations',
      experience: '10+ years cross-border transactions',
      quote: 'Making Kenyan land investment accessible and secure from anywhere in the world.',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Grace Mwangi',
      role: 'Legal & Compliance Head',
      expertise: 'Land Law & Documentation',
      experience: '12+ years legal experience',
      quote: 'Every title deed we process represents a dream realized safely.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <NewNavbar />

      {/* Hero Section - Land & Legacy Focus */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Kenyan landscape development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-blue-900/80 mix-blend-multiply"></div>
        </div>

        <div className="container relative z-10 px-4 pt-20 text-center">
          <div className="inline-flex items-center px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4 mr-2 text-green-300" />
            Trusted Land Partners Since 2010
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Building Legacies on <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-green-200 to-orange-200">
              Verified Kenyan Soil
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            We're Kenya's premier land acquisition specialists for the diaspora. 
            Transforming distant dreams into tangible reality through verified, 
            scam-proof property investment.
          </p>
        </div>
      </section>

      {/* Story Section - Our Land Journey */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Visuals */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our team verifying land"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                {/* Image overlay badge */}
                <div className="absolute top-6 left-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Site Verification in Progress
                </div>
              </div>
              
              {/* Floating Glass Stat */}
              <div className="absolute -bottom-8 -right-8 z-20 bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 max-w-xs">
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                  <span className="text-sm font-bold text-gray-500 uppercase">Verified Success</span>
                </div>
                <div className="text-4xl font-bold text-blue-900">500+</div>
                <p className="text-sm text-gray-600 mt-1">Plots verified for diaspora clients</p>
                <div className="mt-2 text-xs text-orange-600 font-semibold">
                  <TargetIcon className="w-3 h-3 inline mr-1" />
                  100% scam-free record
                </div>
              </div>
              
              {/* Background elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl -z-10 opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-100 rounded-full blur-3xl -z-10 opacity-30"></div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-50 to-green-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
                <LandPlot className="w-3 h-3 mr-2" />
                Our Land Journey
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                From Vision to Verified Reality
              </h2>
              
              <div className="prose prose-lg text-gray-600 mb-8">
                <p className="mb-6">
                  Founded in 2010 by <span className="text-blue-700 font-semibold">Sarah Kamau</span>, 
                  BlueVision was born from a simple observation: Kenyans abroad wanted to invest 
                  in their homeland but faced overwhelming risks of fraud and lack of transparency.
                </p>
                <p className="mb-6">
                  We pioneered a <span className="text-green-600 font-semibold">scam-proof verification system</span> that combines 
                  traditional due diligence with modern technology, giving diaspora clients 
                  the confidence to invest remotely.
                </p>
                <p>
                  Today, we're not just a real estate company—we're <span className="text-orange-600 font-semibold">land legacy builders</span>, 
                  helping families secure their future on verified Kenyan soil.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-1">14+</div>
                  <div className="text-sm font-medium text-gray-600">Years Specializing in Land</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                  <div className="text-3xl font-bold text-green-600 mb-1">40+</div>
                  <div className="text-sm font-medium text-gray-600">Development Projects Managed</div>
                </div>
              </div>

              {/* Key differentiator */}
              <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border-l-4 border-orange-500">
                <div className="flex items-start">
                  <div className="p-2 bg-orange-100 rounded-lg mr-3">
                    <ShieldCheck className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Our Unique Advantage</h4>
                    <p className="text-sm text-gray-600">
                      Only company offering <span className="font-semibold text-orange-700">end-to-end diaspora land services</span> 
                      from verification to construction management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl -translate-y-32 translate-x-32 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl translate-y-32 -translate-x-32 opacity-30"></div>
        
        <div className="container px-4 mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-green-50 text-blue-700 rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-blue-200">
              <Target className="w-4 h-4 mr-2" />
              What Guides Us
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Core Values That Build Trust</h2>
            <p className="text-lg text-gray-600">
              These principles shape every land verification, every document processed, and every dream we help realize.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 ${value.border} relative overflow-hidden`}
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                <div className={`${value.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                
                {/* Orange accent on hover */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:from-orange-500 group-hover:via-orange-400 group-hover:to-orange-500 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Land Experts</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The experienced team dedicated to securing your Kenyan land investment
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                  {/* Avatar/Icon Area */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${leader.color} flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                    <div className="text-blue-600 font-semibold mb-2">{leader.role}</div>
                    <div className="text-sm text-gray-500 mb-3">{leader.expertise}</div>
                    <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      <Clock className="w-3 h-3 mr-1" />
                      {leader.experience}
                    </div>
                  </div>
                  
                  {/* Quote */}
                  <div className="relative pt-6 border-t border-gray-100">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-3">
                      <div className="text-orange-500">"</div>
                    </div>
                    <p className="text-gray-600 text-center italic">"{leader.quote}"</p>
                  </div>
                  
                  {/* Orange accent button */}
                  <div className="mt-6 text-center">
                    <button className="px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 hover:from-orange-100 hover:to-orange-200 font-semibold rounded-lg text-sm transition-all duration-300 border border-orange-200 hover:border-orange-300 hover:shadow-sm">
                      Connect with {leader.name.split(' ')[0]}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Enhanced with Land Focus */}
      <section className="py-24 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Land Legacy Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Milestones in building Kenya's most trusted diaspora land service
            </p>
          </div>

          <div className="relative">
            {/* Center Line with gradient */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-green-200 to-orange-200"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right pl-12' : 'md:pl-16 pl-12'}`}>
                    <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative hover:border-orange-200">
                      {/* Connector Line (Mobile) */}
                      <div className="absolute top-10 left-[-48px] w-12 h-0.5 bg-gradient-to-r from-blue-200 to-green-200 md:hidden"></div>
                      
                      {/* Year badge with orange accent */}
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full text-sm font-bold mb-4 border border-blue-200 group-hover:from-orange-50 group-hover:to-orange-100 group-hover:text-orange-700 group-hover:border-orange-200 transition-all duration-300">
                        {milestone.icon && <span className="mr-2">{milestone.icon}</span>}
                        {milestone.year}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-[6px] md:-translate-x-1/2 flex items-center justify-center w-5 h-5 z-10">
                    <div className={`w-5 h-5 rounded-full ${index === 1 || index === 3 ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-blue-500 to-blue-600'} ring-4 ring-white shadow-lg`}></div>
                    {index === 1 && (
                      <div className="absolute w-8 h-8 bg-orange-100 rounded-full animate-ping opacity-75"></div>
                    )}
                  </div>

                  {/* Empty Space for the other side */}
                  <div className="w-full md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Land Verification Focus */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
               backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
               backgroundSize: '30px 30px' 
             }}>
        </div>
        
        <div className="container px-4 mx-auto text-center relative z-10">
          {/* Orange accent element */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto mb-8 shadow-lg">
            <ShieldCheck className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Kenyan Legacy?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
            Join hundreds of diaspora families who've securely invested in verified Kenyan land with our expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <a
              href="/contact"
              className="px-8 py-4 bg-transparent border border-blue-300 text-white hover:bg-blue-800/30 font-bold rounded-xl transition-all flex items-center justify-center group backdrop-blur-sm"
            >
              <MapPin className="w-5 h-5 mr-2 group-hover:text-green-300 transition-colors" />
              Book Site Visit
            </a>
          </div>
          
          {/* Trust indicator */}
          <div className="mt-12 pt-8 border-t border-blue-700/30">
            <div className="flex flex-wrap justify-center gap-6 text-blue-200 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                <span>No-Obligation Initial Assessment</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                <span>Dedicated Diaspora Account Manager</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-orange-300" />
                <span>24-Hour Preliminary Report</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
