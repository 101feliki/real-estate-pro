import React from 'react';
import NewNavbar from '@/components/layout/NewNavbar';
import Logo from '@/components/layout/Logo';
import { 
  Home,
  MessageCircle,
  Facebook,
  Twitter, 
  Youtube,
  TrendingUp, 
  Shield, 
  BarChart, 
  CheckCircle,
  DollarSign,
  FileText,
  Users,
  Clock,
  ArrowRight,
  Search,
  Target,
  Award,
  Phone,
  Calendar,
  ChevronRight,
  Star,
  Globe,
  LandPlot,
  MapPin,
  ShieldCheck,
  FileSearch,
  Building2,
  Compass,
  Home as HomeIcon,
  Mail,
  Map
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <LandPlot className="w-7 h-7" />,
      title: 'Land Verification & Acquisition',
      description: 'Scam-proof land purchase with comprehensive title search, boundary identification, and seller verification.',
      features: ['Title Deed Verification', 'Physical Site Inspection', 'Fraud Prevention Checks', 'Boundary Survey'],
      
      color: 'from-blue-500 to-blue-600',
      highlight: true,
      badge: 'Diaspora Special'
    },
    {
      icon: <FileSearch className="w-7 h-7" />,
      title: 'Legal Due Diligence',
      description: 'Full legal processing including land rates clearance, transfer documentation, and compliance checks.',
      features: ['Land Board Clearance', 'Stamp Duty Processing', 'Registration Services', 'Legal Documentation'],
     
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      title: 'Development Management',
      description: 'Turnkey construction management with transparent reporting for remote investors.',
      features: ['Architect Selection', 'Contractor Vetting', 'Progress Monitoring', 'Quality Control'],
      price: 'Project-Based Fees',
      color: 'from-blue-700 to-blue-800'
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: 'Diaspora Coordination',
      description: 'Dedicated account management with real-time updates for overseas clients.',
      features: ['Weekly Video Updates', 'Digital Document Portal', '24/7 Support', 'Site Visit Coordination'],
      
      color: 'from-blue-800 to-blue-900'
    },
    {
      icon: <HomeIcon className="w-7 h-7" />,
      title: 'Property Buying',
      description: 'Expert guidance for purchasing residential and commercial properties in Kenya.',
      features: ['Market Analysis', 'Property Viewing', 'Price Negotiation', 'Closing Assistance'],
     
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: 'Title Transfer & Security',
      description: 'Secure title deed transfer and registration with full legal protection.',
      features: ['Title Search', 'Transfer Processing', 'Registration', 'Security Verification'],
      
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Free video consultation to understand your land investment goals',
      icon: <Compass className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      step: '02',
      title: 'Plot Verification',
      description: 'Comprehensive title search and physical site verification',
      icon: <ShieldCheck className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      highlight: true
    },
    {
      step: '03',
      title: 'Acquisition Process',
      description: 'Legal documentation, payment processing, and transfer initiation',
      icon: <FileSearch className="w-6 h-6" />,
      color: 'from-blue-600 to-blue-700'
    },
    {
      step: '04',
      title: 'Development & Handover',
      description: 'Construction oversight and final title deed handover',
      icon: <Building2 className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const benefits = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Diaspora Specialists',
      description: 'Exclusive focus on serving Kenyans living abroad'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Scam-Proof Guarantee',
      description: '100% verified land with fraud prevention protocols'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Time Zone Flexibility',
      description: '24/7 support accommodating all time zones'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Full Transparency',
      description: 'Digital portal with real-time progress tracking'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <NewNavbar />

      {/* HERO SECTION - Land Focused */}
      <section className="relative min-h-[85vh] pt-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Kenyan land development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-blue-800/90 mix-blend-multiply" />
        </div>

        <div className="container relative z-10 px-4 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-8">
              <ShieldCheck className="w-4 h-4 mr-2 text-green-300" />
              <span className="mr-2">Verified Land Acquisition Specialists</span>
              <span className="px-2 py-0.5 bg-orange-500/90 rounded-full text-xs font-bold">DIASPORA FOCUS</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Secure Your Legacy on
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-green-300 to-orange-300">
                Verified Kenyan Land
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive land acquisition and development services designed for the Kenyan diaspora.
              Invest with confidence through our <span className="font-semibold text-green-300">scam-proof verification system</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-base group"
              >
                Explore Land Services <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-orange-400 hover:bg-white/10 text-white font-bold rounded-xl backdrop-blur-sm transition-all duration-300 text-base group"
              >
                <span className="flex items-center justify-center">
                  Free Land Consultation
                  <Phone className="ml-2 w-4 h-4 group-hover:text-orange-300 transition-colors" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - Land Focused */}
      <section id="services" className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-green-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              <LandPlot className="w-3 h-3 mr-2" />
              Specialized Land Services
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              End-to-End Land Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive services designed for secure diaspora land investment in Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`group bg-white rounded-2xl p-8 border ${service.highlight ? 'border-orange-200 shadow-lg' : 'border-gray-100'} shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative overflow-hidden`}
              >
                {/* Service Badge */}
                {service.badge && (
                  <div className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold rounded-full rotate-12 shadow-lg">
                    {service.badge}
                  </div>
                )}
                
                {/* Gradient Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 ${service.highlight ? 'ring-2 ring-orange-200' : ''}`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-sm">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 font-medium text-sm">
                      <div className="p-1 bg-green-100 rounded-lg mr-3">
                        <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION - Land Acquisition Focus */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-50 to-orange-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              <Compass className="w-3 h-3 mr-2" />
              Our Verified Process
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              The BlueVision Land Journey
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              A structured, transparent process that ensures secure land acquisition from anywhere in the world
            </p>
          </div>

          <div className="relative">
            {/* Process Line with gradient */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-orange-200 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className={`bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group text-center h-full ${step.highlight ? 'ring-1 ring-orange-200' : ''}`}>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    
                    <div className="text-4xl font-bold text-gray-200 mb-2 group-hover:text-gray-300 transition-colors">{step.step}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                    
                    {/* Orange accent for highlighted step */}
                    {step.highlight && (
                      <div className="mt-4 inline-flex items-center px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-semibold">
                        <ShieldCheck className="w-3 h-3 mr-1" />
                        Scam-Proof Verification
                      </div>
                    )}
                  </div>
                  
                  {/* Connector Arrows with orange for last */}
                  {index < processSteps.length - 1 && (
                    <>
                      <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                        <ArrowRight className="w-8 h-8 text-blue-300 group-hover:text-orange-400 transition-colors" />
                      </div>
                      <div className="lg:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                        <ArrowRight className="w-8 h-8 text-blue-300 rotate-90" />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION - Diaspora Focus */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-50 to-green-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
                <Award className="w-3 h-3 mr-2 text-orange-500" />
                The BlueVision Advantage
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Why Diaspora Investors
                <span className="block text-blue-600">Choose BlueVision</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                We've built our reputation on making Kenyan land investment accessible, 
                secure, and profitable for clients living abroad.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start group hover:bg-gradient-to-br hover:from-blue-50 hover:to-white rounded-xl p-3 transition-all duration-300">
                    <div className={`p-3 rounded-xl text-blue-600 mr-4 group-hover:scale-110 transition-transform duration-300 ${index === 1 ? 'bg-green-50 group-hover:bg-green-100' : 'bg-blue-50 group-hover:bg-blue-100'}`}>
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Consultation Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-10 shadow-2xl">
                <div className="mb-8">
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                    <Globe className="w-4 h-4 mr-2" />
                    Diaspora Exclusive
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4">Free Land Investment Consultation</h3>
                  <p className="text-blue-100 mb-6 text-lg">
                    Schedule a 45-minute video consultation with our diaspora land specialists.
                    Get personalized advice on secure land investment in Kenya.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                      <span>No obligation or commitment</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                      <span>Initial land verification report</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-orange-300 mr-3 flex-shrink-0" />
                      <span>Customized investment strategy</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <a
                    href="/contact"
                    className="block w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-center rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg group"
                  >
                    <span className="flex items-center justify-center">
                      Book Free Video Consultation
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                  <div className="flex items-center justify-center text-blue-200 text-sm">
                    <Phone className="w-4 h-4 mr-2" />
                    Or call: +254 711 387 303 (KE) | +44 7397 549590 (UK)
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full blur-3xl opacity-20 -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-orange-300 to-orange-200 rounded-full blur-3xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW - Diaspora Focus */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              <Users className="w-3 h-3 mr-2" />
              Diaspora Success Stories
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Kenyans Worldwide
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              Hear from diaspora clients who've successfully invested in Kenyan land with our guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'James Kariuki',
                location: 'London, UK',
                content: 'BlueVision handled my 2-acre plot purchase completely remotely. Their verification system gave me confidence to invest from abroad.',
                rating: 5,
                service: 'Land Acquisition',
                accent: 'bg-green-100 text-green-800'
              },
              {
                name: 'Sarah Mwangi',
                location: 'Dubai, UAE',
                content: 'The development management service transformed my empty plot into a rental property while I was overseas. Monthly video updates were priceless.',
                rating: 5,
                service: 'Development Management',
                accent: 'bg-blue-100 text-blue-800'
              },
              {
                name: 'David Ochieng',
                location: 'Nairobi, Local',
                content: 'As a lawyer, I appreciate their thorough legal due diligence. They make complex land transactions simple for diaspora clients.',
                rating: 5,
                service: 'Legal Services',
                accent: 'bg-orange-100 text-orange-800'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${testimonial.accent}`}>
                    {testimonial.service}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/diaspora-success-stories"
              className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors text-lg group"
            >
              Read More Diaspora Stories
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            className="w-full h-full object-cover"
            alt="Kenyan landscape"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-green-900 mix-blend-multiply"></div>
        </div>
        
        <div className="container relative z-10 px-4 mx-auto max-w-4xl text-center">
          <ShieldCheck className="w-16 h-16 text-green-300 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Secure Land Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-10 font-light max-w-2xl mx-auto">
            Join hundreds of diaspora families investing confidently in verified Kenyan land.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            
            <a
              href="tel:+254711387303"
              className="px-10 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold rounded-xl backdrop-blur-sm transition-all duration-300 text-lg flex items-center justify-center group"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:text-orange-300 transition-colors" />
              Call Diaspora Desk
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER - Maintained from Home Page */}
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
                <LandPlot className="w-4 h-4 mr-2 text-orange-300" />
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
                <Phone className="w-4 h-4 mr-2 text-orange-300" />
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
                  <a href="mailto:info@bluevisionrealtors@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    info@bluevisionrealtors@gmail.com
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

export default ServicesPage;