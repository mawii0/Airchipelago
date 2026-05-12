import { Link } from 'react-router';
import { Star, Check, X } from 'lucide-react';

export function IslandMiles() {
  const tierComparison = [
    { feature: 'How to join', suki: 'Free', bossing: '5 domestic RT or 2 intl per year' },
    { feature: 'Extra baggage', suki: '+5 kg for pasalubong', bossing: 'Standard allowance' },
    { feature: 'Promo access', suki: '12-hr early Piso Fare access', bossing: '24-hr early access' },
    { feature: 'Points rate', suki: 'PHP 100 = 1 point', bossing: 'PHP 100 = 1.5 points' },
    { feature: 'Point expiry', suki: 'Active every 24 months', bossing: 'Never expires' },
    { feature: 'Family pooling', suki: false, bossing: 'Up to 4 members' },
    { feature: 'Free rebooking', suki: false, bossing: '1 per year' },
    { feature: 'Priority services', suki: false, bossing: '✅ Check-in, boarding, baggage' },
    { feature: 'Onboard snack', suki: false, bossing: '✅ Free drink + snack' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-[#1A2C6E] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border-2 border-[#F5A623] rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border-2 border-[#F5A623] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#F5A623] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Island Miles
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Earn rewards every time you fly. The more islands you explore, the more you gain.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/sign-up"
              className="px-8 py-4 bg-[#F5A623] text-[#1A2C6E] rounded-[10px] font-semibold hover:shadow-[0_4px_20px_rgba(245,166,35,0.35)] transition-all"
            >
              Join Free (Suki)
            </Link>
            <a
              href="#how-it-works"
              className="px-8 py-4 border-2 border-white text-white rounded-[10px] font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-[#1A2C6E] text-center mb-16">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white rounded-[16px] p-8 text-center" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="w-20 h-20 bg-[#FDE9B8] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📋</span>
              </div>
              <div className="text-2xl font-bold text-[#1A2C6E] mb-3">1. Sign Up Free</div>
              <p className="text-[#6B7280]">
                Create your Island Miles account in minutes. No fees, no hassle.
              </p>
            </div>

            <div className="bg-white rounded-[16px] p-8 text-center" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="w-20 h-20 bg-[#FDE9B8] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">✈️</span>
              </div>
              <div className="text-2xl font-bold text-[#1A2C6E] mb-3">2. Fly & Earn</div>
              <p className="text-[#6B7280]">
                Earn 1 Island Mile point for every PHP 100 spent on flights.
              </p>
            </div>

            <div className="bg-white rounded-[16px] p-8 text-center" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="w-20 h-20 bg-[#FDE9B8] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎁</span>
              </div>
              <div className="text-2xl font-bold text-[#1A2C6E] mb-3">3. Redeem</div>
              <p className="text-[#6B7280]">
                Use points for flights, upgrades, extra baggage, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tier Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-[#1A2C6E] text-center mb-4">Choose Your Tier</h2>
          <p className="text-lg text-[#6B7280] text-center mb-12">
            Start with Suki for free, or unlock Bossing benefits as you fly more
          </p>

          <div className="bg-white rounded-[16px] overflow-hidden border border-[#E5E7EB]" style={{ boxShadow: 'var(--shadow-card)' }}>
            <table className="w-full">
              <thead className="bg-[#1A2C6E]">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-[#F5A623] font-semibold text-lg">
                      <span className="text-2xl">🌴</span>
                      Suki (Free)
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-[#F5A623] font-semibold text-lg">
                      <span className="text-2xl">🏆</span>
                      Bossing (Frequent)
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tierComparison.map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? 'bg-[#F7F8FC]' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-[#1A2C6E]">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-[#6B7280]">
                      {typeof row.suki === 'boolean' ? (
                        row.suki ? <Check className="w-5 h-5 text-[#16A34A] mx-auto" /> : <X className="w-5 h-5 text-[#6B7280] mx-auto" />
                      ) : (
                        row.suki
                      )}
                    </td>
                    <td className="px-6 py-4 text-center text-[#6B7280]">
                      {typeof row.bossing === 'boolean' ? (
                        row.bossing ? <Check className="w-5 h-5 text-[#16A34A] mx-auto" /> : <X className="w-5 h-5 text-[#6B7280] mx-auto" />
                      ) : (
                        row.bossing
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Callout Section */}
      <section className="py-16 bg-[#FDE9B8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6">💛</div>
          <h3 className="text-2xl font-semibold text-[#1A2C6E] mb-4">Designed for Filipinos</h3>
          <p className="text-lg text-[#1A2C6E]">
            From pasalubong baggage to family pooling, Island Miles is built around how you actually travel.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="w-16 h-16 text-[#F5A623] mx-auto mb-6" />
          <h2 className="text-4xl font-semibold text-[#1A2C6E] mb-4">Ready to start earning?</h2>
          <p className="text-lg text-[#6B7280] mb-8">
            Join Island Miles today and start earning points on your next flight
          </p>
          <Link
            to="/sign-up"
            className="inline-block px-8 py-4 bg-[#F5A623] text-[#1A2C6E] rounded-[10px] font-semibold hover:shadow-[0_4px_20px_rgba(245,166,35,0.35)] transition-all"
          >
            Join Island Miles Free →
          </Link>
        </div>
      </section>
    </div>
  );
}
