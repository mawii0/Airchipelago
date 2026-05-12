import { useState } from 'react';
import { AlertCircle } from 'lucide-react';

export function CheckIn() {
  const [activeTab, setActiveTab] = useState<'booking' | 'eticket' | 'frequent'>('booking');
  const [bookingRef, setBookingRef] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');

  const handleCheckIn = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!bookingRef || !lastName) {
      setError('Please fill in all required fields.');
      return;
    }

    setError("We couldn't find a booking with these details. Please double-check and try again.");
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1A2C6E] to-[#2A3C7E] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Online Check-in</h1>
          <p className="text-xl text-white/90">
            Save time at the airport — check in here
          </p>
        </div>
      </section>

      {/* Check-in Form */}
      <section className="py-16 bg-[#F7F8FC]">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[16px] p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
            {/* Tabs */}
            <div className="flex border-b border-[#E5E7EB] mb-8">
              <button
                onClick={() => setActiveTab('booking')}
                className={`flex-1 pb-4 font-medium transition-colors ${
                  activeTab === 'booking'
                    ? 'text-[#1A2C6E] border-b-2 border-[#F5A623]'
                    : 'text-[#6B7280]'
                }`}
              >
                Booking Reference
              </button>
              <button
                onClick={() => setActiveTab('eticket')}
                className={`flex-1 pb-4 font-medium transition-colors ${
                  activeTab === 'eticket'
                    ? 'text-[#1A2C6E] border-b-2 border-[#F5A623]'
                    : 'text-[#6B7280]'
                }`}
              >
                E-ticket Number
              </button>
              <button
                onClick={() => setActiveTab('frequent')}
                className={`flex-1 pb-4 font-medium transition-colors ${
                  activeTab === 'frequent'
                    ? 'text-[#1A2C6E] border-b-2 border-[#F5A623]'
                    : 'text-[#6B7280]'
                }`}
              >
                Frequent Flyer
              </button>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-[#FEE2E2] border-l-4 border-[#DC2626] rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#DC2626] mt-0.5 flex-shrink-0" />
                <p className="text-[#DC2626] text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleCheckIn} className="space-y-6">
              {activeTab === 'booking' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-[#1A2C6E] mb-2">
                      Booking Reference *
                    </label>
                    <input
                      type="text"
                      value={bookingRef}
                      onChange={(e) => setBookingRef(e.target.value.toUpperCase())}
                      placeholder="e.g., AC12AB34"
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[8px] bg-white focus:outline-none focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E] uppercase"
                      maxLength={8}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A2C6E] mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="As shown on your booking"
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[8px] bg-white focus:outline-none focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]"
                    />
                  </div>
                </>
              )}

              {activeTab === 'eticket' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-[#1A2C6E] mb-2">
                      E-ticket Number *
                    </label>
                    <input
                      type="text"
                      placeholder="13-digit number"
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[8px] bg-white focus:outline-none focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]"
                      maxLength={13}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A2C6E] mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      placeholder="As shown on your booking"
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[8px] bg-white focus:outline-none focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]"
                    />
                  </div>
                </>
              )}

              {activeTab === 'frequent' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-[#1A2C6E] mb-2">
                      Frequent Flyer Number *
                    </label>
                    <input
                      type="text"
                      placeholder="Your Island Miles number"
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[8px] bg-white focus:outline-none focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A2C6E] mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      placeholder="As shown on your account"
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[8px] bg-white focus:outline-none focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]"
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                className="w-full py-4 bg-[#F5A623] text-[#1A2C6E] rounded-[10px] font-semibold hover:shadow-[0_4px_20px_rgba(245,166,35,0.35)] transition-all"
              >
                Proceed to Check-in
              </button>
            </form>

            <div className="mt-6 p-4 bg-[#FDE9B8] rounded-lg">
              <p className="text-sm text-[#1A2C6E]">
                <strong>Note:</strong> Online check-in opens 2 hours before your scheduled departure time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-[#1A2C6E] text-center mb-12">Need Help?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-semibold text-[#1A2C6E] mb-2">Email Support</h3>
              <p className="text-sm text-[#6B7280]">support@airchipelago.com</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-semibold text-[#1A2C6E] mb-2">Call Us</h3>
              <p className="text-sm text-[#6B7280]">+1 (800) 555-CHECK</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-semibold text-[#1A2C6E] mb-2">Live Chat</h3>
              <p className="text-sm text-[#6B7280]">Available 24/7</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
