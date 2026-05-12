import { Link } from 'react-router';
import { Plane, MapPin, Heart, DollarSign, Star } from 'lucide-react';
import { SearchWidget } from '../components/SearchWidget';
import atrImage from '@/assets/ATR.jpeg';
import q400Image from '@/assets/Q400.jpeg';

export function Home() {
  const destinations = [
    {
      name: 'Camiguin',
      tagline: 'The Island Born of Fire',
      price: 'From PHP 2,000',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop'
    },
    {
      name: 'Palawan',
      tagline: "Nature's Masterpiece",
      price: 'From PHP 2,500',
      image: 'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=800&h=600&fit=crop'
    },
    {
      name: 'Hundred Islands',
      tagline: '123 Mini Getaways',
      price: 'From PHP 2,500',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop'
    },
    {
      name: 'Bantayan',
      tagline: 'Where Time Slows Down',
      price: 'From PHP 3,500',
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&h=600&fit=crop'
    },
    {
      name: 'Boracay',
      tagline: 'World-Famous White Beach',
      price: 'From PHP 3,500',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop'
    },
    {
      name: 'Siargao',
      tagline: 'Surfing Capital of the Philippines',
      price: 'From PHP 3,500',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop'
    },
    {
      name: 'Bohol',
      tagline: 'Home of the Chocolate Hills',
      price: 'From PHP 2,000',
      image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&h=600&fit=crop'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop"
            alt="Philippine Islands"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,44,110,0.85)] via-[rgba(26,44,110,0.4)] to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#F5A623] text-[#1A2C6E] px-4 py-2 rounded-[99px] mb-6 text-sm font-medium uppercase tracking-wider" style={{ fontFamily: 'var(--font-mono)' }}>
            <Plane className="w-4 h-4" />
            BOOK YOUR FLIGHT
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Travel Every Island with Us
          </h1>

          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Discover the Philippines' finest islands — fast, easy, and affordable.
          </p>

          <SearchWidget />
        </div>
      </section>

      {/* Announcement Banner */}
      <div className="bg-[#1A2C6E] text-[#F5A623] py-3 px-4 text-center relative">
        <div className="flex items-center justify-center gap-2">
          <Star className="w-5 h-5" />
          <span className="font-medium">
            Don't miss out on great deals this summer — Check our Island Miles Promo Fares!
          </span>
        </div>
      </div>

      {/* Destinations Section */}
      <section className="py-20 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#1A2C6E] mb-4">
              Where Island to Fly Next?
            </h2>
            <p className="text-lg text-[#6B7280]">
              Let our flight destinations inspire you to choose your next trip
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {destinations.map((dest) => (
              <Link
                key={dest.name}
                to="/book"
                className="group relative overflow-hidden rounded-[16px] h-80 transition-transform hover:scale-105"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,44,110,0.9)] via-[rgba(26,44,110,0.4)] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{dest.name}</h3>
                  <p className="text-white/80 italic text-sm mb-3">{dest.tagline}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-[#F5A623] text-[#1A2C6E] rounded-[99px] text-sm font-medium">
                      {dest.price}
                    </span>
                    <span className="text-sm font-medium group-hover:underline">
                      Book Now →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/destinations"
              className="inline-block px-8 py-3 bg-[#1A2C6E] text-white rounded-[10px] hover:bg-[#2A3C7E] transition-colors font-medium"
            >
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Why Fly Airchipelago Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-[#1A2C6E] text-center mb-16">
            Why Fly Airchipelago
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FDE9B8] rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-[#1A2C6E]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A2C6E] mb-3">Island Connectivity</h3>
              <p className="text-[#6B7280]">
                Serving 7,641 islands across Luzon, Visayas, and Mindanao
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FDE9B8] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-[#1A2C6E]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A2C6E] mb-3">Filipino Hospitality</h3>
              <p className="text-[#6B7280]">
                Every flight brings the warmth of Filipino culture onboard
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FDE9B8] rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-[#1A2C6E]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A2C6E] mb-3">Affordable Fares</h3>
              <p className="text-[#6B7280]">
                Transparent pricing with no hidden fees
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Preview Section */}
      <section className="py-20 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-[#1A2C6E] mb-12">Our Fleet</h2>

          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img
                src={atrImage}
                alt="ATR 72-600"
                className="w-full h-80 object-cover rounded-[16px]"
                style={{ boxShadow: 'var(--shadow-card)' }}
              />
              <div>
                <h3 className="text-2xl font-semibold text-[#1A2C6E] mb-4">ATR 72-600</h3>
                <p className="text-[#6B7280] mb-4">
                  Perfect for short-runway island airports
                </p>
                <p className="text-[#6B7280]">
                  The ATR 72-600 is ideal for scenic low-altitude flights to destinations like Camiguin and Siargao.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <img
                  src={q400Image}
                  alt="Dash 8 Q400"
                  className="w-full h-80 object-cover rounded-[16px]"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                />
              </div>
              <div className="md:order-1">
                <h3 className="text-2xl font-semibold text-[#1A2C6E] mb-4">De Havilland Canada Dash 8 Q400</h3>
                <p className="text-[#6B7280] mb-4">
                  Ideal for longer routes like Palawan and Boracay
                </p>
                <p className="text-[#6B7280]">
                  For extended regional flights, the Dash 8 Q400 provides speed and efficiency perfect for island connections.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/fleet"
              className="inline-flex items-center gap-2 text-[#1A2C6E] font-medium hover:underline"
            >
              View Full Fleet →
            </Link>
          </div>
        </div>
      </section>

      {/* Island Miles Teaser */}
      <section className="py-20 bg-[#1A2C6E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Join Island Miles
              </h2>
              <p className="text-white/80 mb-6 text-lg">
                Earn rewards every time you fly. The more islands you explore, the more you gain.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-[#F5A623]" />
                  <span className="font-medium">Suki Tier — Free membership with exclusive perks</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-[#F5A623]" />
                  <span className="font-medium">Bossing Tier — Priority services and family pooling</span>
                </div>
              </div>
              <Link
                to="/island-miles"
                className="inline-block px-8 py-3 bg-[#F5A623] text-[#1A2C6E] rounded-[10px] font-medium hover:shadow-[0_4px_20px_rgba(245,166,35,0.35)] transition-all"
              >
                Join Free →
              </Link>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-md h-64 bg-[#F5A623] rounded-[16px] flex items-center justify-center relative overflow-hidden" style={{ boxShadow: 'var(--shadow-card)' }}>
                <div className="text-[#1A2C6E] text-center">
                  <Star className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-2xl font-bold">Island Miles</p>
                  <p className="text-sm">Loyalty Card</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Requirements Banner */}
      <section className="py-20 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[16px] p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center" style={{ boxShadow: 'var(--shadow-card)' }}>
            <img
              src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&h=600&fit=crop"
              alt="Travel Documents"
              className="w-full h-64 object-cover rounded-[16px]"
            />
            <div>
              <h3 className="text-3xl font-semibold text-[#1A2C6E] mb-4">Travel Requirements</h3>
              <p className="text-[#6B7280] mb-6">
                Be ready for your trip — check the latest guidelines, documents, and health protocols before you fly.
              </p>
              <Link
                to="/travel-requirements"
                className="inline-block px-6 py-3 border-2 border-[#1A2C6E] text-[#1A2C6E] rounded-[10px] hover:bg-[#FDE9B8] transition-colors font-medium"
              >
                Check Travel Requirements →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
