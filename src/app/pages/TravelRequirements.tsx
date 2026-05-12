import { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

export function TravelRequirements() {
  const [openSections, setOpenSections] = useState<string[]>(['domestic']);

  const toggleSection = (section: string) => {
    setOpenSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const validIds = [
    { name: 'Philippine Passport', icon: '🛂' },
    { name: 'PhilSys National ID', icon: '🆔' },
    { name: 'Driver\'s License', icon: '🚗' },
    { name: 'UMID', icon: '💳' },
    { name: 'PRC ID', icon: '📋' },
    { name: 'Voter\'s ID', icon: '🗳️' },
    { name: 'Senior Citizen ID', icon: '👴' },
    { name: 'PWD ID', icon: '♿' },
    { name: 'OFW ID', icon: '✈️' },
    { name: 'School/Student ID', icon: '🎓' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="bg-white border-b border-[#E5E7EB] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-semibold text-[#1A2C6E] mb-4">Travel Requirements</h1>
          <p className="text-xl text-[#6B7280]">
            Be ready for your trip — check the latest guidelines, documents, and health protocols before you fly.
          </p>
        </div>
      </section>

      {/* Alert */}
      <section className="py-8 bg-[#F7F8FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#DCFCE7] border-l-4 border-[#16A34A] p-6 rounded-lg flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-[#16A34A] mt-1 flex-shrink-0" />
            <div>
              <p className="text-[#1A2C6E] leading-relaxed">
                <strong>Important:</strong> Airchipelago Airlines adheres to all governmental travel, health, and safety protocols.
                Before departure, please review the latest travel rules for your destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Sections */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Domestic Flights */}
          <div className="border border-[#E5E7EB] rounded-[16px] overflow-hidden">
            <button
              onClick={() => toggleSection('domestic')}
              className="w-full px-6 py-5 bg-white hover:bg-[#F7F8FC] flex items-center justify-between transition-colors"
            >
              <h2 className="text-xl font-semibold text-[#1A2C6E] text-left">Domestic Flights</h2>
              {openSections.includes('domestic') ? (
                <ChevronUp className="w-6 h-6 text-[#1A2C6E]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-[#1A2C6E]" />
              )}
            </button>

            {openSections.includes('domestic') && (
              <div className="px-6 py-6 bg-[#F7F8FC] border-t border-[#E5E7EB]">
                <p className="text-[#1A2C6E] mb-6">
                  Valid government-issued ID is required for all Filipino and foreign passengers on domestic flights.
                </p>

                <h3 className="font-semibold text-[#1A2C6E] mb-4">Accepted IDs:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {validIds.map((id) => (
                    <div key={id.name} className="flex items-center gap-3 bg-white p-3 rounded-[10px]">
                      <span className="text-2xl">{id.icon}</span>
                      <span className="text-sm text-[#1A2C6E]">{id.name}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#FDE9B8] border-l-4 border-[#F5A623] p-4 rounded-lg">
                  <p className="text-sm text-[#1A2C6E]">
                    <strong>Note:</strong> IDs must be original and government-issued. Student IDs are only accepted for minors.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Baggage Guidelines */}
          <div className="border border-[#E5E7EB] rounded-[16px] overflow-hidden">
            <button
              onClick={() => toggleSection('baggage')}
              className="w-full px-6 py-5 bg-white hover:bg-[#F7F8FC] flex items-center justify-between transition-colors"
            >
              <h2 className="text-xl font-semibold text-[#1A2C6E] text-left">Baggage Guidelines</h2>
              {openSections.includes('baggage') ? (
                <ChevronUp className="w-6 h-6 text-[#1A2C6E]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-[#1A2C6E]" />
              )}
            </button>

            {openSections.includes('baggage') && (
              <div className="px-6 py-6 bg-[#F7F8FC] border-t border-[#E5E7EB]">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-[#1A2C6E] mb-3">Carry-on Baggage</h3>
                    <ul className="space-y-2 text-[#6B7280]">
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>Maximum weight: 7 kg</span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>Maximum dimensions: 56cm x 36cm x 23cm</span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>One personal item allowed (purse, laptop bag, small backpack)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#1A2C6E] mb-3">Checked Baggage</h3>
                    <ul className="space-y-2 text-[#6B7280]">
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>Allowance based on selected bundle or add-on</span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>GO Basic: 10 kg included</span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>Additional baggage available for purchase</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#1A2C6E] mb-3">Prohibited Items</h3>
                    <p className="text-[#6B7280] mb-2">The following items are not allowed in carry-on or checked baggage:</p>
                    <ul className="space-y-2 text-[#6B7280]">
                      <li className="flex gap-2"><span>•</span><span>Explosives and flammable materials</span></li>
                      <li className="flex gap-2"><span>•</span><span>Sharp objects (in carry-on)</span></li>
                      <li className="flex gap-2"><span>•</span><span>Liquids over 100ml (in carry-on)</span></li>
                      <li className="flex gap-2"><span>•</span><span>Compressed gases</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Special Travel Needs */}
          <div className="border border-[#E5E7EB] rounded-[16px] overflow-hidden">
            <button
              onClick={() => toggleSection('special')}
              className="w-full px-6 py-5 bg-white hover:bg-[#F7F8FC] flex items-center justify-between transition-colors"
            >
              <h2 className="text-xl font-semibold text-[#1A2C6E] text-left">Special Travel Needs</h2>
              {openSections.includes('special') ? (
                <ChevronUp className="w-6 h-6 text-[#1A2C6E]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-[#1A2C6E]" />
              )}
            </button>

            {openSections.includes('special') && (
              <div className="px-6 py-6 bg-[#F7F8FC] border-t border-[#E5E7EB]">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-[#1A2C6E] mb-3">PWD and Senior Citizen Passengers</h3>
                    <p className="text-[#6B7280] mb-3">
                      Airchipelago provides priority services including boarding, baggage handling, and dedicated assistance.
                      Valid PWD or Senior Citizen ID required.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#1A2C6E] mb-3">Unaccompanied Minors</h3>
                    <p className="text-[#6B7280] mb-3">
                      Children aged 5-11 traveling alone require special assistance. Please contact our reservations team at least 48 hours before departure.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#1A2C6E] mb-3">Medical Equipment</h3>
                    <p className="text-[#6B7280] mb-3">
                      Wheelchairs, walkers, and medical devices are allowed onboard. Please notify us during booking for proper accommodation.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#1A2C6E] mb-3">Traveling with Pets</h3>
                    <p className="text-[#6B7280] mb-3">
                      Pets are accepted as checked baggage in cargo hold only. Proper carrier and health certificates required.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Health Protocols */}
          <div className="border border-[#E5E7EB] rounded-[16px] overflow-hidden">
            <button
              onClick={() => toggleSection('health')}
              className="w-full px-6 py-5 bg-white hover:bg-[#F7F8FC] flex items-center justify-between transition-colors"
            >
              <h2 className="text-xl font-semibold text-[#1A2C6E] text-left">Health Protocols</h2>
              {openSections.includes('health') ? (
                <ChevronUp className="w-6 h-6 text-[#1A2C6E]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-[#1A2C6E]" />
              )}
            </button>

            {openSections.includes('health') && (
              <div className="px-6 py-6 bg-[#F7F8FC] border-t border-[#E5E7EB]">
                <p className="text-[#6B7280] mb-4">
                  Health requirements may vary by destination. Please check local government guidelines before traveling.
                </p>
                <ul className="space-y-2 text-[#6B7280]">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Contact tracing forms may be required</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Temperature screening conducted at airports</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Follow all posted health and safety protocols</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-[#F7F8FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-[#6B7280] italic">
            Travel requirements are set by government authorities and may change without prior notice.
            Ensure you have verified all required documents before your flight.
          </p>
        </div>
      </section>
    </div>
  );
}
