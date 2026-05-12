import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeftRight, Calendar, Users } from 'lucide-react';

export function SearchWidget() {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState<'round-trip' | 'one-way'>('round-trip');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [guests, setGuests] = useState({ adults: 1, children: 0, infants: 0 });
  const [promoCode, setPromoCode] = useState('');
  const [showGuestPicker, setShowGuestPicker] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const airports = [
    { code: 'MNL', city: 'Manila' },
    { code: 'ILO', city: 'Iloilo' },
    { code: 'CGY', city: 'Camiguin' },
    { code: 'PPS', city: 'Puerto Princesa (Palawan)' },
    { code: 'MPH', city: 'Caticlan (Boracay)' },
    { code: 'IAO', city: 'Siargao' },
    { code: 'TAG', city: 'Bohol (Tagbilaran)' },
  ];

  const swapAirports = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleSearch = () => {
    const newErrors: Record<string, string> = {};

    if (!from) newErrors.from = 'Please select a departure city.';
    if (!to) newErrors.to = 'Please select a destination city.';
    if (!departDate) newErrors.departDate = 'Please select a departure date.';
    if (tripType === 'round-trip' && !returnDate) {
      newErrors.returnDate = 'Please select a return date.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    navigate('/book', {
      state: { from, to, departDate, returnDate, guests, tripType, promoCode }
    });
  };

  return (
    <div className="bg-white rounded-[16px] p-6 md:p-8 max-w-4xl mx-auto" style={{ boxShadow: 'var(--shadow-card)' }}>
      {/* Trip Type Tabs */}
      <div className="flex gap-4 mb-6 border-b border-[#E5E7EB]">
        <button
          onClick={() => setTripType('round-trip')}
          className={`pb-3 px-2 font-medium transition-colors ${
            tripType === 'round-trip'
              ? 'text-[#1A2C6E] border-b-2 border-[#F5A623]'
              : 'text-[#6B7280]'
          }`}
        >
          Round-trip
        </button>
        <button
          onClick={() => setTripType('one-way')}
          className={`pb-3 px-2 font-medium transition-colors ${
            tripType === 'one-way'
              ? 'text-[#1A2C6E] border-b-2 border-[#F5A623]'
              : 'text-[#6B7280]'
          }`}
        >
          One-way
        </button>
      </div>

      {/* From/To Row */}
      <div className="grid md:grid-cols-[1fr,auto,1fr] gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-[#1A2C6E] mb-2">From</label>
          <select
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
              setErrors({ ...errors, from: '' });
            }}
            className={`w-full px-4 py-3 border rounded-[8px] bg-white ${
              errors.from ? 'border-[#DC2626]' : 'border-[#E5E7EB]'
            } focus:outline-none focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]`}
          >
            <option value="">Select departure</option>
            {airports.map((airport) => (
              <option key={airport.code} value={airport.code}>
                {airport.city} ({airport.code})
              </option>
            ))}
          </select>
          {errors.from && <p className="text-[#DC2626] text-xs mt-1">{errors.from}</p>}
        </div>

        <button
          onClick={swapAirports}
          className="self-end mb-2 w-10 h-10 rounded-full bg-[#F7F8FC] hover:bg-[#FDE9B8] flex items-center justify-center transition-colors"
          aria-label="Swap airports"
        >
          <ArrowLeftRight className="w-5 h-5 text-[#1A2C6E]" />
        </button>

        <div>
          <label className="block text-sm font-medium text-[#1A2C6E] mb-2">To</label>
          <select
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
              setErrors({ ...errors, to: '' });
            }}
            className={`w-full px-4 py-3 border rounded-[8px] bg-white ${
              errors.to ? 'border-[#DC2626]' : 'border-[#E5E7EB]'
            } focus:outline-none focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]`}
          >
            <option value="">Select destination</option>
            {airports.map((airport) => (
              <option key={airport.code} value={airport.code}>
                {airport.city} ({airport.code})
              </option>
            ))}
          </select>
          {errors.to && <p className="text-[#DC2626] text-xs mt-1">{errors.to}</p>}
        </div>
      </div>

      {/* Date Row */}
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-[#1A2C6E] mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Depart
          </label>
          <input
            type="date"
            value={departDate}
            onChange={(e) => {
              setDepartDate(e.target.value);
              setErrors({ ...errors, departDate: '' });
            }}
            min={new Date().toISOString().split('T')[0]}
            className={`w-full px-4 py-3 border rounded-[8px] bg-white ${
              errors.departDate ? 'border-[#DC2626]' : 'border-[#E5E7EB]'
            } focus:outline-none focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]`}
          />
          {errors.departDate && <p className="text-[#DC2626] text-xs mt-1">{errors.departDate}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-[#1A2C6E] mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Return
          </label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => {
              setReturnDate(e.target.value);
              setErrors({ ...errors, returnDate: '' });
            }}
            min={departDate || new Date().toISOString().split('T')[0]}
            disabled={tripType === 'one-way'}
            className={`w-full px-4 py-3 border rounded-[8px] ${
              tripType === 'one-way' ? 'bg-[#F7F8FC] text-[#6B7280]' : 'bg-white'
            } ${errors.returnDate ? 'border-[#DC2626]' : 'border-[#E5E7EB]'} focus:outline-none focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]`}
          />
          {errors.returnDate && <p className="text-[#DC2626] text-xs mt-1">{errors.returnDate}</p>}
        </div>
      </div>

      {/* Guests and Promo Row */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="relative">
          <label className="block text-sm font-medium text-[#1A2C6E] mb-2 flex items-center gap-2">
            <Users className="w-4 h-4" />
            Guests
          </label>
          <button
            type="button"
            onClick={() => setShowGuestPicker(!showGuestPicker)}
            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[8px] bg-white text-left focus:outline-none focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]"
          >
            {guests.adults} Adult{guests.adults !== 1 ? 's' : ''}
            {guests.children > 0 && `, ${guests.children} Child${guests.children !== 1 ? 'ren' : ''}`}
            {guests.infants > 0 && `, ${guests.infants} Infant${guests.infants !== 1 ? 's' : ''}`}
          </button>

          {showGuestPicker && (
            <div className="absolute z-10 mt-2 w-full bg-white border border-[#E5E7EB] rounded-[8px] p-4 space-y-4" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Adults</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setGuests({ ...guests, adults: Math.max(1, guests.adults - 1) })}
                    className="w-8 h-8 border border-[#E5E7EB] rounded-full hover:bg-[#F7F8FC]"
                  >
                    −
                  </button>
                  <span className="w-8 text-center">{guests.adults}</span>
                  <button
                    onClick={() => setGuests({ ...guests, adults: guests.adults + 1 })}
                    className="w-8 h-8 border border-[#E5E7EB] rounded-full hover:bg-[#F7F8FC]"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Children</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setGuests({ ...guests, children: Math.max(0, guests.children - 1) })}
                    className="w-8 h-8 border border-[#E5E7EB] rounded-full hover:bg-[#F7F8FC]"
                  >
                    −
                  </button>
                  <span className="w-8 text-center">{guests.children}</span>
                  <button
                    onClick={() => setGuests({ ...guests, children: guests.children + 1 })}
                    className="w-8 h-8 border border-[#E5E7EB] rounded-full hover:bg-[#F7F8FC]"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Infants</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setGuests({ ...guests, infants: Math.max(0, guests.infants - 1) })}
                    className="w-8 h-8 border border-[#E5E7EB] rounded-full hover:bg-[#F7F8FC]"
                  >
                    −
                  </button>
                  <span className="w-8 text-center">{guests.infants}</span>
                  <button
                    onClick={() => setGuests({ ...guests, infants: guests.infants + 1 })}
                    className="w-8 h-8 border border-[#E5E7EB] rounded-full hover:bg-[#F7F8FC]"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-[#1A2C6E] mb-2">Promo Code (Optional)</label>
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter promo code"
            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[8px] bg-white focus:outline-none focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]"
          />
        </div>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="w-full py-4 bg-[#F5A623] text-[#1A2C6E] rounded-[10px] font-semibold hover:shadow-[0_4px_20px_rgba(245,166,35,0.35)] transition-all"
      >
        Search Flights
      </button>
    </div>
  );
}
