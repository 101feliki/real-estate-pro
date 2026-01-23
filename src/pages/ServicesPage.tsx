import React from 'react';
import NewNavbar from '@/components/layout/NewNavbar';
import { 
  Home, 
  TrendingUp, 
  Shield, 
  BarChart, 
  CheckCircle,
  DollarSign,
  FileText,
  Users,
  Clock,
  ArrowRight
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Home className="w-5 h-5" />, // Reduced from w-8 h-8
      title: 'Property Buying',
      description: 'Comprehensive support from search to closing',
      features: ['Market Analysis', 'Property Viewing', 'Negotiation', 'Closing Assistance'],
      price: 'From $5,000'
    },
    {
      icon: <TrendingUp className="w-5 h-5" />, // Reduced
      title: 'Property Selling',
      description: 'Maximize your property value with expert marketing',
      features: ['Valuation Services', 'Marketing Strategy', 'Showings', 'Closing Management'],
      price: '3% Commission'
    },
    {
      icon: <Shield className="w-5 h-5" />, // Reduced
      title: 'Property Management',
      description: 'Professional management for rental properties',
      features: ['Tenant Screening', 'Rent Collection', 'Maintenance', 'Financial Reports'],
      price: '8% Monthly'
    },
    {
      icon: <BarChart className="w-5 h-5" />, // Reduced
      title: 'Investment Consultation',
      description: 'Strategic advice for real estate investors',
      features: ['Market Research', 'ROI Analysis', 'Portfolio Strategy', 'Risk Assessment'],
      price: 'From $2,500'
    },
    {
      icon: <DollarSign className="w-5 h-5" />, // Reduced
      title: 'Mortgage Assistance',
      description: 'Connect with the best lenders and rates',
      features: ['Pre-approval', 'Rate Comparison', 'Documentation', 'Closing Support'],
      price: 'Free Service'
    },
    {
      icon: <FileText className="w-5 h-5" />, // Reduced
      title: 'Legal Support',
      description: 'Professional legal guidance for transactions',
      features: ['Contract Review', 'Title Services', 'Closing Docs', 'Legal Consultation'],
      price: 'From $1,500'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Free consultation to understand your needs and goals'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Customized plan tailored to your specific situation'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Expert execution of the agreed-upon strategy'
    },
    {
      step: '04',
      title: 'Closing & Follow-up',
      description: 'Smooth closing process and post-transaction support'
    }
  ];

  return (
    <div className="min-h-screen">
      <NewNavbar />

      {/* Hero Section - SCALED DOWN */}
      <section className="relative py-12 bg-gradient-to-r from-blue-900 to-blue-700 text-white scaled-section"> {/* Reduced padding */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1> {/* Reduced from 5xl/6xl */}
            <p className="text-base text-blue-100 mb-6"> {/* Reduced from xl */}
              Comprehensive real estate solutions designed to meet your unique needs, 
              whether you're buying, selling, or investing in property.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - SCALED DOWN */}
      <section className="py-12 bg-white scaled-section"> {/* Reduced padding */}
        <div className="container">
          <div className="text-center mb-8"> {/* Reduced margin */}
            <h2 className="text-2xl font-bold mb-3">Premium Real Estate Services</h2> {/* Reduced from 4xl */}
            <p className="text-gray-600 max-w-2xl mx-auto text-sm"> {/* Reduced text size */}
              We offer a full suite of services to guide you through every step of your real estate journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Reduced gap */}
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-0.5"> {/* Reduced padding, rounded */}
                <div className="bg-blue-100 w-12 h-12 rounded-md flex items-center justify-center mb-4"> {/* Reduced size */}
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3> {/* Reduced from xl */}
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p> {/* Reduced text */}
                
                <div className="mb-4"> {/* Reduced margin */}
                  <div className="text-xs text-gray-500 mb-2">Includes:</div> {/* Reduced text */}
                  <ul className="space-y-1.5"> {/* Reduced spacing */}
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm"> {/* Reduced text */}
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {/* Reduced icon */}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-blue-600 font-bold text-sm">{service.price}</div> {/* Reduced text */}
                  <button className="text-blue-600 font-semibold text-sm flex items-center hover:text-blue-700"> {/* Reduced text */}
                    Learn More <ArrowRight className="w-3 h-3 ml-1" /> {/* Reduced icon */}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - SCALED DOWN */}
      <section className="py-12 bg-gray-50 scaled-section"> {/* Reduced padding */}
        <div className="container">
          <div className="text-center mb-8"> {/* Reduced margin */}
            <h2 className="text-2xl font-bold mb-3">Our Process</h2> {/* Reduced */}
            <p className="text-gray-600 max-w-2xl mx-auto text-sm"> {/* Reduced */}
              A structured approach that ensures success and satisfaction at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> {/* Reduced gap */}
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-6 text-center h-full"> {/* Reduced padding */}
                  <div className="text-2xl font-bold text-blue-600 mb-3">{step.step}</div> {/* Reduced from 4xl */}
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3> {/* Reduced */}
                  <p className="text-gray-600 text-sm">{step.description}</p> {/* Reduced */}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2"> {/* Adjusted position */}
                    <ArrowRight className="w-6 h-6 text-gray-300" /> {/* Reduced icon */}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - SCALED DOWN */}
      <section className="py-12 bg-white scaled-section"> {/* Reduced padding */}
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"> {/* Reduced gap */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Choose Our Services</h2> {/* Reduced */}
              <p className="text-gray-600 mb-6 text-sm"> {/* Reduced */}
                Our comprehensive approach and attention to detail set us apart from other real estate agencies.
              </p>
              
              <div className="space-y-4"> {/* Reduced spacing */}
                <div className="flex items-start">
                  <Users className="w-5 h-5 text-blue-600 mr-3 mt-0.5" /> {/* Reduced icon */}
                  <div>
                    <h3 className="font-bold text-base mb-1.5">Dedicated Team</h3> {/* Reduced */}
                    <p className="text-gray-600 text-sm">A personal agent and support team for every client.</p> {/* Reduced */}
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-blue-600 mr-3 mt-0.5" /> {/* Reduced */}
                  <div>
                    <h3 className="font-bold text-base mb-1.5">Time Efficiency</h3> {/* Reduced */}
                    <p className="text-gray-600 text-sm">Streamlined processes that save you time and effort.</p> {/* Reduced */}
                  </div>
                </div>
                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-blue-600 mr-3 mt-0.5" /> {/* Reduced */}
                  <div>
                    <h3 className="font-bold text-base mb-1.5">Cost-Effective</h3> {/* Reduced */}
                    <p className="text-gray-600 text-sm">Competitive pricing with transparent fee structures.</p> {/* Reduced */}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 text-white rounded-lg p-6"> {/* Reduced padding */}
              <h3 className="text-xl font-bold mb-4">Get a Free Consultation</h3> {/* Reduced */}
              <p className="mb-4 text-sm"> {/* Reduced */}
                Schedule a 30-minute consultation with one of our experts to discuss your needs 
                and learn how we can help you achieve your real estate goals.
              </p>
              
              <div className="space-y-3 mb-4"> {/* Reduced spacing */}
                <div className="flex items-center text-sm"> {/* Reduced text */}
                  <CheckCircle className="w-4 h-4 mr-2" /> {/* Reduced icon */}
                  <span>No obligation or commitment</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Personalized recommendations</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Customized action plan</span>
                </div>
              </div>

              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-md font-semibold text-sm" /* Reduced */
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - SCALED DOWN */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white scaled-section"> {/* Reduced */}
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2> {/* Reduced */}
          <p className="text-base mb-6 max-w-2xl mx-auto"> {/* Reduced */}
            Contact us today to discuss your real estate needs and discover how our services can help you succeed.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold text-sm" /* Reduced */
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;