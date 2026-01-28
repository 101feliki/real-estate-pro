import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const NewNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Detect if it's mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Listings', path: '/listings' },
   
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Handle navigation click
  const handleNavClick = (path: string) => {
    navigate(path);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  // Handle mobile navigation item click
  const handleMobileNavClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar with contact info */}
      <div className="bg-primary text-white py-2 text-xs">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-1 md:mb-0">
            <div className="flex items-center">
              <Phone className="w-3 h-3 mr-1 text-accent" />
              <span>+254 711-387-303</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-3 h-3 mr-1 text-accent" />
              <span> info.bluevisionrealtors@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <MapPin className="w-3 h-3 mr-1 text-accent" />
              <span>Equity Bank Building  | 1st Floor  | Kilimani</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="py-2 bg-white">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <Logo size="md" variant="dark" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`px-3 py-1.5 rounded-lg transition-colors hover:text-accent`} 
                  style={{
                    backgroundColor: isActive(item.path) ? 'rgba(var(--accent), 0.1)' : 'transparent',
                    color: isActive(item.path) ? 'var(--accent)' : 'rgb(55, 65, 81)',
                    fontWeight: isActive(item.path) ? '500' : '400'
                  }}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/contact"
              onClick={() => handleNavClick('/contact')}
              className="px-4 py-2 bg-accent hover:bg-accent-dark text-white rounded-lg font-medium transition-colors" 
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-neutral-light transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden container mt-2 pb-4 border-t border-neutral pt-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleMobileNavClick(item.path)}
                  className="block w-full px-4 py-3 text-gray-700 hover:text-accent hover:bg-neutral-light rounded-lg transition-colors text-left"
                  style={{
                    backgroundColor: isActive(item.path) ? 'rgba(var(--accent), 0.1)' : 'transparent',
                    color: isActive(item.path) ? 'var(--accent)' : 'rgb(55, 65, 81)',
                    fontWeight: isActive(item.path) ? '500' : '400'
                  }}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => handleMobileNavClick('/contact')}
                className="block w-full px-4 py-3 bg-accent hover:bg-accent-dark text-white rounded-lg font-medium transition-colors text-center mt-4"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NewNavbar;