import { Heart, MapPin, Users, Sparkles } from 'lucide-react';
import lombosMap from '@/assets/lombos-map.jpg';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Filipino Hospitality',
      description: 'We bring the warmth and care of Filipino culture to every flight, treating every passenger like family.'
    },
    {
      icon: MapPin,
      title: 'Accessibility',
      description: 'Connecting remote islands and making air travel affordable for all Filipinos, from bustling cities to quiet coastal towns.'
    },
    {
      icon: Users,
      title: 'Family & Community',
      description: 'We understand Filipino travel culture — from pasalubong-heavy luggage to multi-generational trips.'
    },
    {
      icon: Sparkles,
      title: 'Culture & Comfort',
      description: 'Modern comfort meets local culture, with crews who speak your language and understand your needs.'
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop"
            alt="Philippines"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,44,110,0.85)] to-[rgba(26,44,110,0.7)]" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            About Airchipelago
          </h1>
          <p className="text-xl text-white/90">
            More than an airline — your bridge across islands
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-[#1A2C6E] mb-6">Our Story</h2>
              <div className="space-y-4 text-[#6B7280] leading-relaxed">
                <p>
                  Airchipelago Airlines was founded with a simple yet powerful vision: to connect every Filipino island,
                  culture, and community through accessible and reliable air travel.
                </p>
                <p>
                  Starting as a regional carrier serving smaller island communities, we've grown to connect major tourism
                  hubs and cities across Luzon, Visayas, and Mindanao. Our fleet of modern turboprop aircraft is
                  perfectly suited for the Philippines' unique geography, operating from both major airports and small
                  island runways.
                </p>
                <p>
                  We understand that Filipino travel is about more than just getting from point A to point B — it's about
                  bringing pasalubong home, reuniting with family, and exploring the incredible diversity of our nation's
                  7,641 islands.
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop"
                alt="Airchipelago Aircraft"
                className="w-full h-96 object-cover rounded-[16px]"
                style={{ boxShadow: 'var(--shadow-card)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-[#1A2C6E] text-center mb-4">What We Stand For</h2>
          <p className="text-lg text-[#6B7280] text-center mb-16 max-w-2xl mx-auto">
            Our values guide everything we do, from our flight operations to customer service
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white rounded-[16px] p-6 text-center" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <div className="w-16 h-16 bg-[#FDE9B8] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#1A2C6E]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A2C6E] mb-3">{value.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-[#1A2C6E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-[#F5A623] mb-8">Our Mission</h2>
          <blockquote className="text-3xl md:text-4xl text-white leading-relaxed italic" style={{ fontFamily: 'var(--font-display)' }}>
            "To connect every Filipino island, culture, and community through accessible, reliable, and warmly human air travel."
          </blockquote>
        </div>
      </section>

      {/* Office & Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-[#1A2C6E] text-center mb-12">Visit Us</h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-[#1A2C6E] mb-4">Airchipelago Airlines Headquarters</h3>
              <p className="text-[#6B7280] mb-6">
                Lombos St. San Isidro<br />
                Parañaque City, Metro Manila<br />
                Philippines
              </p>

              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-[#1A2C6E] mb-1">General Inquiries</div>
                  <a href="mailto:airchipelago@gmail.com" className="text-[#6B7280] hover:text-[#1A2C6E]">
                    airchipelago@gmail.com
                  </a>
                </div>

                <div>
                  <div className="font-semibold text-[#1A2C6E] mb-1">Customer Support (24/7)</div>
                  <a href="tel:+18005552477" className="text-[#6B7280] hover:text-[#1A2C6E]">
                    +1 (800) 555-2477
                  </a>
                </div>

                <div>
                  <div className="font-semibold text-[#1A2C6E] mb-1">Office Hours</div>
                  <p className="text-[#6B7280]">Monday – Sunday, 24 hours</p>
                </div>
              </div>
            </div>

            <div className="rounded-[16px] h-96 overflow-hidden" style={{ boxShadow: 'var(--shadow-card)' }}>
              <img
                src={lombosMap}
                alt="Map showing Lombos St. San Isidro, Parañaque City"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
