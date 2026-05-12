export function Fleet() {
  const aircraft = [
    {
      name: 'ATR 72-600',
      badge: 'SHORT-HAUL SPECIALIST',
      description: 'The ATR 72-600 is perfect for short runways and smaller island airports like Camiguin and Siargao. It is fuel-efficient, reliable, and ideal for scenic low-altitude flights.',
      specs: {
        capacity: '70 passengers',
        range: '1,528 km',
        speed: '510 km/h',
        routes: 'Camiguin, Siargao, Bantayan, Hundred Islands'
      },
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=800&fit=crop'
    },
    {
      name: 'De Havilland Canada Dash 8 Q400',
      badge: 'LONG-HAUL REGIONAL',
      description: 'For longer routes such as Palawan and Boracay, we operate the Dash 8 Q400. It cruises faster while maintaining turboprop efficiency, making it perfect for regional island connections.',
      specs: {
        capacity: '78 passengers',
        range: '2,040 km',
        speed: '667 km/h',
        routes: 'Palawan, Boracay, Bohol'
      },
      image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1200&h=800&fit=crop'
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Page Header */}
      <div className="bg-white border-b border-[#E5E7EB] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-semibold text-[#1A2C6E] mb-4">Our Fleet</h1>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Modern, efficient aircraft designed to connect the islands of the Philippines
          </p>
        </div>
      </div>

      {/* Aircraft Cards */}
      <section className="py-16 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {aircraft.map((plane, index) => (
            <div
              key={plane.name}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <img
                  src={plane.image}
                  alt={plane.name}
                  className="w-full h-96 object-cover rounded-[16px]"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                />
              </div>

              <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                <div className="inline-block px-4 py-2 bg-[#FDE9B8] text-[#1A2C6E] rounded-[99px] text-xs font-medium uppercase mb-4" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
                  {plane.badge}
                </div>

                <h2 className="text-3xl font-semibold text-[#1A2C6E] mb-4">{plane.name}</h2>

                <p className="text-[#6B7280] mb-8 text-lg leading-relaxed">{plane.description}</p>

                <div className="bg-white rounded-[16px] p-6" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <h3 className="font-semibold text-[#1A2C6E] mb-4">Specifications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-[#6B7280] mb-1">Capacity</div>
                      <div className="font-medium text-[#1A2C6E]">{plane.specs.capacity}</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#6B7280] mb-1">Range</div>
                      <div className="font-medium text-[#1A2C6E]">{plane.specs.range}</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#6B7280] mb-1">Cruise Speed</div>
                      <div className="font-medium text-[#1A2C6E]">{plane.specs.speed}</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-sm text-[#6B7280] mb-1">Primary Routes</div>
                      <div className="font-medium text-[#1A2C6E]">{plane.specs.routes}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-[#1A2C6E] text-center mb-12">Why Our Fleet Stands Out</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FDE9B8] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2C6E] mb-2">Fuel Efficient</h3>
              <p className="text-[#6B7280]">
                Turboprop engines provide excellent fuel economy while maintaining reliable performance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FDE9B8] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛬</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2C6E] mb-2">Short Runway Ready</h3>
              <p className="text-[#6B7280]">
                Designed to operate from small island airports with limited runway lengths
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FDE9B8] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2C6E] mb-2">Modern & Comfortable</h3>
              <p className="text-[#6B7280]">
                Contemporary interiors with comfortable seating and climate control systems
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
