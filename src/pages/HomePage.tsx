import React from 'react';
import NewNavbar from '@/components/layout/NewNavbar';
import Logo from '@/components/layout/Logo';
import { 
  Home, Shield, TrendingUp, Users, Star, Award, CheckCircle,
  ArrowRight, MapPin, Mail, Phone, Target, Clock, Building2, Youtube,
  Heart, ChevronRight, Facebook, Twitter, MessageCircle, 
  Globe, Map, LandPlot, ShieldCheck, FileSearch, Compass, Check
} from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: <LandPlot className="w-6 h-6" />,
      title: 'Land Verification & Acquisition',
      description: 'Scam-proof land purchase with comprehensive title search, boundary identification, and seller verification.',
      features: ['Title Deed Verification', 'Physical Site Inspection', 'Fraud Prevention Checks'],
      color: 'from-blue-500 to-blue-600',
      badge: 'Diaspora Special'
    },
    {
      icon: <FileSearch className="w-6 h-6" />,
      title: 'Legal Due Diligence',
      description: 'Full legal processing including land rates clearance, transfer documentation, and compliance checks.',
      features: ['Land Board Clearance', 'Stamp Duty Processing', 'Registration Services'],
      color: 'from-blue-600 to-blue-700',
      highlight: true
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Development Management',
      description: 'Turnkey construction management with transparent reporting for remote investors.',
      features: ['Architect Selection', 'Contractor Vetting', 'Progress Monitoring'],
      color: 'from-blue-700 to-blue-800'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Diaspora Coordination',
      description: 'Dedicated account management with real-time updates for overseas clients.',
      features: ['Weekly Video Updates', 'Digital Document Portal', '24/7 Support'],
      color: 'from-blue-800 to-blue-900'
    }
  ];

  const testimonials = [
    {
      name: 'James Kariuki',
      location: 'London, UK',
      content: 'BlueVision handled my 2-acre plot purchase in Kitengela while I was overseas. Their monthly site visit videos gave me complete peace of mind.',
      type: 'Land Purchase',
      rating: 5,
      
      accent: 'bg-green-100 text-green-800'
    },
    {
      name: 'Sarah Mwangi',
      location: 'Dubai, UAE',
      content: 'From verifying titles to handing over keys, they made investing in Kenyan land from abroad completely stress-free.',
      type: 'Plot Development',
      rating: 5,
      
      accent: 'bg-blue-100 text-blue-800'
    },
    {
      name: 'David Omondi',
      location: 'Nairobi, Local',
      content: 'Their transparent process and regular updates made me confident to recommend them to family abroad.',
      type: 'Property Management',
      rating: 5,
      
      accent: 'bg-green-100 text-green-800'
    }
  ];

  const stats = [
    { value: '500+', label: 'Verified Plots', icon: <Check className="w-5 h-5" />, color: 'text-green-500' },
    { value: '98%', label: 'Client Satisfaction', icon: <Heart className="w-5 h-5" />, color: 'text-blue-500' },
    { value: '10+', label: 'Years Experience', icon: <Clock className="w-5 h-5" />, color: 'text-blue-600' },
    { value: '40+', label: 'Development Projects', icon: <Building2 className="w-5 h-5" />, color: 'text-green-500' }
  ];

  const processSteps = [
    { number: '01', title: 'Discovery', description: 'Initial consultation & plot shortlisting', icon: <Compass className="w-5 h-5" /> },
    { number: '02', title: 'Verification', description: 'Title deed & physical site verification', icon: <ShieldCheck className="w-5 h-5" /> },
    { number: '03', title: 'Acquisition', description: 'Legal processing & documentation', icon: <FileSearch className="w-5 h-5" /> },
    { number: '04', title: 'Development', description: 'Construction oversight & handover', icon: <Building2 className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <NewNavbar />
      
      {/* HERO SECTION - Land Focus */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-blue-900/70" />
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Land development in Kenya"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-10 px-4 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badge with Green Accent */}
            <div className="inline-flex items-center px-4 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-semibold mb-8 shadow-lg">
              <ShieldCheck className="w-4 h-4 mr-2 text-green-300" />
              <span className="mr-2">Verified & Protected Land Acquisition</span>
              <span className="px-2 py-0.5 bg-green-500/90 rounded-full text-xs font-bold">FOR DIASPORA</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Build Your Legacy on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-300">
                Verified Kenyan Land
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              <span className="font-semibold text-green-300">Scam-proof land acquisition</span> for the Kenyan diaspora. 
              We handle title verification, legal processing, and development—your trusted partner on the ground.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <a
                href="/consultation"
                className="px-8 py-4 bg-transparent border-2 border-white/40 hover:border-green-400 hover:bg-white/10 text-white font-bold rounded-xl backdrop-blur-sm transition-all duration-300 text-base group"
              >
                <span className="flex items-center justify-center">
                  Free Land Verification Call
                  <Phone className="ml-2 w-4 h-4 group-hover:text-green-300 transition-colors" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING STATS - With Green Highlights */}
      <section className="relative z-20 -mt-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center text-center group">
                  <div className={`mb-4 p-3 rounded-full ${stat.color.includes('green') ? 'bg-green-50' : 'bg-blue-50'} group-hover:bg-gradient-to-br ${stat.color.includes('green') ? 'from-green-100 to-green-50' : 'from-blue-100 to-blue-50'} transition-colors duration-300`}>
                    <div className={stat.color}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LAND-FOCUSED SERVICES */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-green-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              <LandPlot className="w-3 h-3 mr-2 text-green-500" />
              Specialized Land Services
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              From Verified Plot to Complete Development
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              End-to-end solutions designed specifically for diaspora land investment in Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-2xl p-6 border ${service.highlight ? 'border-green-200 shadow-lg' : 'border-gray-100'} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
              >
                {service.badge && (
                  <div className="absolute -top-2 left-6 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                    {service.badge}
                  </div>
                )}
                
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 ${service.highlight ? 'ring-2 ring-green-200' : ''}`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={`/services#${service.title.toLowerCase().replace(/ /g, '-')}`}
                  className={`inline-flex items-center font-semibold ${service.highlight ? 'text-green-600 hover:text-green-800' : 'text-blue-600 hover:text-blue-800'} transition-colors group/link`}
                >
                  Learn More 
                  <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIASPORA PROCESS TIMELINE */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-900/10 rounded-full blur-3xl -translate-y-32 -translate-x-32"></div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Your <span className="text-green-300">Transparent</span> Journey
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg">
              See exactly how we manage your land acquisition from anywhere in the world
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-500/30 hover:bg-gray-800/70 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 rounded-full ${index === 1 ? 'bg-green-500/20' : 'bg-blue-500/20'} flex items-center justify-center mr-4`}>
                        <div className={index === 1 ? 'text-green-300' : 'text-blue-300'}>
                          {step.icon}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 font-semibold">Step {step.number}</div>
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
                  
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500/50 to-green-500/50">
                        <ArrowRight className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Diaspora Focus */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
              <Users className="w-3 h-3 mr-2" />
              Diaspora Success Stories
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Kenyans Worldwide
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 text-lg italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center mb-4">
                    
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${testimonial.accent}`}>
                    {testimonial.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - Land Verification Focus */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            className="w-full h-full object-cover"
            alt="Kenyan landscape"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-green-900/60 mix-blend-multiply"></div>
        </div>
        
        <div className="container relative z-10 px-4 mx-auto max-w-4xl text-center">
          <ShieldCheck className="w-16 h-16 text-green-300 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Secure Your Piece of Kenya?
          </h2>
          <p className="text-xl text-blue-100 mb-10 font-light max-w-2xl mx-auto">
            Get a free land verification report and consultation. No obligation, just transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
            <a
              href="tel:+254711387303"
              className="px-10 py-4 bg-blue-700/50 border border-blue-400/30 hover:bg-blue-700 hover:border-blue-400 text-white font-bold rounded-xl backdrop-blur-sm transition-all duration-300 text-lg flex items-center justify-center group"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:text-green-300 transition-colors" />
              Call Our Diaspora Desk
            </a>
          </div>
          
          {/* Trust Signals */}
          <div className="mt-12 pt-8 border-t border-blue-700/30">
            <div className="flex flex-wrap justify-center gap-8 text-blue-200 text-sm">
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-300" />
                <span>No Upfront Fees for Verification</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-300" />
                <span>24-48 Hour Initial Report</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-300" />
                <span>Dedicated Account Manager</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING VERIFICATION BUTTON */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
        <a
          href="/verify-now"
          className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
        >
          <ShieldCheck className="w-5 h-5" />
          <span className="hidden sm:inline">Verify Land Now</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Logo size="md" variant="dark" />
                <div>
                  <div className="text-xl font-bold">BlueVision Realtors</div>
                  <div className="text-sm text-green-300 font-semibold">Land Acquisition Specialists</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Kenya's trusted partner for diaspora land investment. 
                Specializing in verified, scam-proof property acquisition with full transparency.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com/bluevisionrealtors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-[#1877F2] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://wa.me/254711387303" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-[#25D366] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://youtube.com/@bluevisionrealtors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-[#e21212] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white flex items-center">
                <ChevronRight className="w-4 h-4 mr-2 text-green-300" />
                Quick Links
              </h3>
              <ul className="space-y-4">
                {['Verified Lands', 'Diaspora Process', 'Legal Services', 'Development Partners'].map((item) => (
                  <li key={item}>
                    <a href={`/${item.toLowerCase().replace(/ /g, '-')}`} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Land Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white flex items-center">
                <LandPlot className="w-4 h-4 mr-2 text-green-300" />
                Land Services
              </h3>
              <ul className="space-y-4">
                {['Plot Verification', 'Title Search', 'Boundary Survey', 'Development Planning'].map((item) => (
                  <li key={item}>
                    <a href="/services" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white flex items-center">
                <Phone className="w-4 h-4 mr-2 text-green-300" />
                Contact Us
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">Equity Bank Building, Kilimani<br/>Nairobi, Kenya</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <div>
                    <a href="tel:+254711387303" className="text-gray-400 hover:text-white transition-colors block">
                      +254 711 387 303 (KE)
                    </a>
                    <a href="tel:+447397549590" className="text-gray-400 hover:text-white transition-colors block text-sm">
                      +44 7397 549590 (UK)
                    </a>
                  </div>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <a href="mailto:sales@bluevisionrealtors.com" className="text-gray-400 hover:text-white transition-colors">
                    sales@bluevisionrealtors.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} BlueVision Realtors Limited. 
              <span className="text-green-400 font-semibold ml-2">Verified Land Acquisition Specialists</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;