import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Plane } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/book', label: 'Book' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/fleet', label: 'Fleet' },
    { path: '/island-miles', label: 'Island Miles' },
    { path: '/about', label: 'About' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#1A2C6E] rounded-full flex items-center justify-center">
              <Plane className="w-6 h-6 text-white transform -rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-[#1A2C6E] leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
                Airchipelago
              </span>
              <span className="text-xs text-[#6B7280] italic leading-none">Travel Every Island with Us</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#1A2C6E] border-b-2 border-[#F5A623]'
                    : 'text-[#6B7280] hover:text-[#1A2C6E]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/check-in"
              className="text-[#1A2C6E] hover:underline font-medium"
            >
              Check-in
            </Link>
            <button className="px-4 py-2 border-2 border-[#1A2C6E] text-[#1A2C6E] rounded-[10px] hover:bg-[#FDE9B8] transition-colors font-medium">
              Log In
            </button>
            <button className="px-6 py-2 bg-[#F5A623] text-[#1A2C6E] rounded-[10px] hover:shadow-[0_4px_20px_rgba(245,166,35,0.35)] transition-all font-medium">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#1A2C6E]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E5E7EB]">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-[#1A2C6E] font-semibold'
                    : 'text-[#6B7280]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-[#E5E7EB]">
              <Link
                to="/check-in"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-[#1A2C6E] font-medium"
              >
                Check-in
              </Link>
              <button className="w-full px-4 py-2 border-2 border-[#1A2C6E] text-[#1A2C6E] rounded-[10px] font-medium">
                Log In
              </button>
              <button className="w-full px-6 py-3 bg-[#F5A623] text-[#1A2C6E] rounded-[10px] font-medium">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
