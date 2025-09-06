import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simple CSS animation for navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(-20px)';
      item.style.transition = 'all 0.6s ease-out';
      
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 200 + (index * 100));
    });
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'Venue', href: '/venue' },
    { name: 'Tickets', href: '/tickets' },
    { name: 'Past Events', href: '/past-events' },
    { name: 'Schedule', href: '/schedule' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md border-b border-green-500/20 shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="nav-item">
            <a href="/" className="text-xl md:text-2xl font-bold gradient-text">
              OS<span className="text-green-600">D</span>2025
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-item text-black hover:text-green-600 transition-colors duration-200 relative group font-medium"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block nav-item">
            <a
              href="https://konfhub.com/open-source-day-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white px-4 lg:px-6 py-2 rounded-full font-semibold transition-all duration-200 glow-effect hover:scale-105 text-sm lg:text-base"
            >
              Register Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-green-600 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-green-500/20 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-black hover:text-green-600 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://konfhub.com/open-source-day-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-3 mt-4 bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded-full font-semibold text-center transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Register Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;