import { useState } from 'react';
import { Link } from 'react-router';

export function Destinations() {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  const destinations = [
    {
      name: 'Camiguin',
      tagline: 'The Island Born of Fire',
      region: 'Mindanao',
      price: 'PHP 2,000–4,000',
      airport: 'Mambajao Airport (CGY)',
      duration: '2h from Manila',
      description: 'Home to seven volcanoes, Camiguin offers pristine beaches, hot springs, and cascading waterfalls.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop'
    },
    {
      name: 'Palawan',
      tagline: "Nature's Masterpiece",
      region: 'Luzon',
      price: 'PHP 2,500–5,000',
      airport: 'Puerto Princesa International Airport (PPS)',
      duration: '1h 30m from Manila',
      description: 'Crystal-clear waters, limestone cliffs, and the world-famous Underground River.',
      image: 'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=800&h=600&fit=crop'
    },
    {
      name: 'Hundred Islands',
      tagline: '123 Mini Getaways',
      region: 'Luzon',
      price: 'PHP 2,500–6,000',
      airport: 'Lingayen Airport (LGY)',
      duration: '1h from Manila',
      description: 'A protected national park featuring 123 islands and islets scattered across Lingayen Gulf.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop'
    },
    {
      name: 'Bantayan',
      tagline: 'Where Time Slows Down',
      region: 'Visayas',
      price: 'PHP 3,500–7,000',
      airport: 'Bantayan Airport (BXI)',
      duration: '1h 30m from Manila',
      description: 'White sand beaches, turquoise waters, and a laid-back island vibe perfect for relaxation.',
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&h=600&fit=crop'
    },
    {
      name: 'Boracay',
      tagline: 'World-Famous White Beach',
      region: 'Visayas',
      price: 'PHP 3,500–8,000',
      airport: 'Caticlan Airport (MPH)',
      duration: '1h from Manila',
      description: 'Powder-fine white sand, vibrant nightlife, and world-class water sports.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop'
    },
    {
      name: 'Siargao',
      tagline: 'Surfing Capital of the Philippines',
      region: 'Mindanao',
      price: 'PHP 3,500–7,500',
      airport: 'Sayak Airport (IAO)',
      duration: '2h from Manila',
      description: 'World-renowned surf breaks, coconut palm-lined roads, and a thriving island culture.',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop'
    },
    {
      name: 'Bohol',
      tagline: 'Home of the Chocolate Hills',
      region: 'Visayas',
      price: 'PHP 2,000–4,500',
      airport: 'Tagbilaran Airport (TAG)',
      duration: '1h 20m from Manila',
      description: 'Famous for its unique Chocolate Hills, tiny tarsiers, and pristine dive sites.',
      image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&h=600&fit=crop'
    },
  ];

  const filteredDestinations = selectedRegion === 'All'
    ? destinations
    : destinations.filter(d => d.region === selectedRegion);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Header */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop"
            alt="Philippine Islands"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,44,110,0.8)] to-[rgba(26,44,110,0.6)]" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Where Would You Like to Go?
          </h1>
          <p className="text-xl text-white/90">
            Explore all Airchipelago island destinations
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-20 bg-white border-b border-[#E5E7EB] py-4 z-40" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2 flex-wrap">
            {['All', 'Luzon', 'Visayas', 'Mindanao'].map(region => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-[99px] font-medium transition-all ${
                  selectedRegion === region
                    ? 'bg-[#F5A623] text-[#1A2C6E]'
                    : 'bg-[#F7F8FC] text-[#6B7280] hover:bg-[#FDE9B8]'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-[#E5E7EB] rounded-[8px] bg-white text-[#1A2C6E] focus:outline-none focus:border-[#1A2C6E]"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <section className="py-16 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <DestinationCard key={dest.name} destination={dest} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function DestinationCard({ destination }: any) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="group text-left overflow-hidden rounded-[16px] transition-all hover:scale-105"
        style={{ boxShadow: 'var(--shadow-card)' }}
      >
        <div className="relative h-80">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,44,110,0.9)] via-[rgba(26,44,110,0.4)] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
            <p className="text-white/80 italic text-sm mb-3">{destination.tagline}</p>
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-[#F5A623] text-[#1A2C6E] rounded-[99px] text-sm font-medium">
                From {destination.price.split('–')[0]}
              </span>
              <span className="text-sm font-medium group-hover:underline">
                View Details →
              </span>
            </div>
          </div>
        </div>
      </button>

      {/* Destination Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(26,44,110,0.85)]"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-[20px] max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            style={{ boxShadow: 'var(--shadow-modal)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-72 object-cover rounded-t-[20px]"
            />

            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-3xl font-bold text-[#1A2C6E]">{destination.name}</h2>
                <span className="px-3 py-1 bg-[#FDE9B8] text-[#1A2C6E] rounded-[99px] text-xs font-medium uppercase" style={{ fontFamily: 'var(--font-mono)' }}>
                  {destination.region}
                </span>
              </div>

              <p className="text-lg text-[#6B7280] italic mb-6">{destination.tagline}</p>

              <p className="text-[#1A2C6E] mb-6 leading-relaxed">{destination.description}</p>

              <div className="grid md:grid-cols-2 gap-4 mb-8 p-4 bg-[#F7F8FC] rounded-[10px]">
                <div>
                  <div className="text-sm text-[#6B7280] mb-1">Nearest Airport</div>
                  <div className="font-medium text-[#1A2C6E]">{destination.airport}</div>
                </div>
                <div>
                  <div className="text-sm text-[#6B7280] mb-1">Flight Duration</div>
                  <div className="font-medium text-[#1A2C6E]">{destination.duration}</div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-sm text-[#6B7280] mb-2">Price Range</div>
                <div className="text-2xl font-bold text-[#1A2C6E]">{destination.price}</div>
              </div>

              <div className="flex gap-4">
                <Link
                  to="/book"
                  className="flex-1 px-6 py-3 bg-[#F5A623] text-[#1A2C6E] rounded-[10px] text-center font-semibold hover:shadow-[0_4px_20px_rgba(245,166,35,0.35)] transition-all"
                >
                  Book a Flight →
                </Link>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 border-2 border-[#E5E7EB] text-[#6B7280] rounded-[10px] font-medium hover:bg-[#F7F8FC]"
                >
                  ✕ Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
