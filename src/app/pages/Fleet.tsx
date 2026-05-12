import atrImage from '@/assets/ATR.jpeg'
import q400Image from '@/assets/Q400.jpeg'

export function Fleet() {

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
