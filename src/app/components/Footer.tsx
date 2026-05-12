import { Link } from 'react-router';
import { Facebook, Instagram, Twitter, Plane, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1A2C6E] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#F5A623] rounded-full flex items-center justify-center">
                <Plane className="w-6 h-6 text-[#1A2C6E] transform -rotate-45" />
              </div>
              <span className="font-bold text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
                Airchipelago
              </span>
            </div>
            <p className="text-white/80 text-sm italic mb-2">Travel Every Island with Us</p>
            <p className="text-white/70 text-sm leading-relaxed">
              Connecting every Filipino island through accessible, warm, and culturally inspired air travel.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Book', 'Destinations', 'Fleet', 'Island Miles', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white/70 hover:text-[#F5A623] transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <div className="text-white/70">Customer Support 24/7</div>
                <a href="tel:+18005552477" className="text-white hover:text-[#F5A623] flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +1 (800) 555-2477
                </a>
              </li>
              <li>
                <a href="mailto:support@airchipelago.com" className="text-white/70 hover:text-[#F5A623] flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  support@airchipelago.com
                </a>
              </li>
              <li className="pt-2">
                <div className="text-white/70 mb-1">Reservations</div>
                <a href="tel:+18005552665" className="text-white hover:text-[#F5A623]">
                  +1 (800) 555-BOOK
                </a>
              </li>
              <li>
                <div className="text-white/70 mb-1">Check-in Assistance</div>
                <a href="tel:+18005552432" className="text-white hover:text-[#F5A623]">
                  +1 (800) 555-CHECK
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Socials */}
          <div>
            <h4 className="font-semibold text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#F5A623] rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#F5A623] rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#F5A623] rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="text-sm">
              <p className="text-white/70 mb-2">Download Our App</p>
              <div className="space-y-2">
                <div className="px-4 py-2 bg-white/10 rounded-lg text-center text-xs">App Store</div>
                <div className="px-4 py-2 bg-white/10 rounded-lg text-center text-xs">Google Play</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 text-center text-sm text-white/50">
          <p>
            © 2025 Airchipelago Airlines. All rights reserved. |{' '}
            <Link to="/privacy" className="hover:text-[#F5A623] transition-colors">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link to="/terms" className="hover:text-[#F5A623] transition-colors">
              Terms of Use
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
