import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Plane, User, ShoppingBag, CreditCard, CheckCircle, Calendar, Edit2 } from 'lucide-react';

export function Book() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchData = location.state || {};

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDepartFlight, setSelectedDepartFlight] = useState<any>(null);
  const [selectedReturnFlight, setSelectedReturnFlight] = useState<any>(null);
  const [selectedBundle, setSelectedBundle] = useState('basic');
  const [guestDetails, setGuestDetails] = useState<any>({});
  const [bookingRef, setBookingRef] = useState('');

  const steps = [
    { number: 1, label: 'Select Flight', icon: Plane },
    { number: 2, label: 'Guest Details', icon: User },
    { number: 3, label: 'Add-ons', icon: ShoppingBag },
    { number: 4, label: 'Payment', icon: CreditCard },
    { number: 5, label: 'Confirmation', icon: CheckCircle },
  ];

  const mockFlights = [
    { id: 1, number: '4R 511', depart: '10:25 AM', arrive: '11:50 AM', duration: '1h 25m', price: 2450, seatsLeft: 5 },
    { id: 2, number: '4R 513', depart: '02:15 PM', arrive: '03:40 PM', duration: '1h 25m', price: 2650, seatsLeft: 12 },
    { id: 3, number: '4R 515', depart: '06:30 PM', arrive: '07:55 PM', duration: '1h 25m', price: 2350, seatsLeft: 3 },
  ];

  const bundles = [
    {
      id: 'basic',
      name: 'GO Basic',
      description: 'Fare-only. Buy add-ons later at regular price.',
      price: 0,
      cta: "I'm okay with fare only",
      features: ['Base fare', 'Standard baggage', 'Online check-in']
    },
    {
      id: 'easy',
      name: 'GO Easy',
      description: 'Discounts on baggage and seat selection.',
      price: 1456,
      recommended: true,
      cta: 'I want cheaper bags & seats',
      features: ['All Basic features', '15kg baggage included', 'Seat selection discount']
    },
    {
      id: 'flexi',
      name: 'GO Flexi',
      description: 'Free rebooking when plans change.',
      price: 2500,
      cta: 'I need flexible travel plans',
      features: ['All Easy features', 'Free rebooking', 'Priority boarding']
    }
  ];

  const handleSelectDepartFlight = (flight: any) => {
    setSelectedDepartFlight(flight);
    if (!searchData.returnDate || selectedReturnFlight) {
      setCurrentStep(2);
    }
  };

  const handleSelectReturnFlight = (flight: any) => {
    setSelectedReturnFlight(flight);
    setCurrentStep(2);
  };

  const handleSelectBundle = (bundleId: string) => {
    setSelectedBundle(bundleId);
  };

  const handleContinueToGuestDetails = () => {
    setCurrentStep(3);
  };

  const handleSubmitGuestDetails = (details: any) => {
    setGuestDetails(details);
    setCurrentStep(4);
  };

  const handlePayment = () => {
    const ref = 'AC' + Math.random().toString(36).substring(2, 8).toUpperCase();
    setBookingRef(ref);
    setCurrentStep(5);
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-[#F7F8FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Route Summary */}
        {searchData.from && (
          <div className="bg-white rounded-[10px] px-6 py-3 mb-6 flex items-center justify-between" style={{ boxShadow: 'var(--shadow-card)' }}>
            <div className="flex items-center gap-4 text-sm">
              <span className="font-medium text-[#1A2C6E]">
                {searchData.from} → {searchData.to}
              </span>
              <span className="text-[#6B7280]">|</span>
              <span className="text-[#6B7280]">{searchData.departDate}{searchData.returnDate && ` – ${searchData.returnDate}`}</span>
              <span className="text-[#6B7280]">|</span>
              <span className="text-[#6B7280]">{searchData.guests?.adults || 1} Adult</span>
            </div>
            <button className="text-[#1A2C6E] hover:underline flex items-center gap-1">
              <Edit2 className="w-4 h-4" />
              Edit
            </button>
          </div>
        )}

        {/* Step Indicator */}
        <div className="bg-white rounded-[16px] px-6 py-8 mb-8" style={{ boxShadow: 'var(--shadow-card)' }}>
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = step.number === currentStep;
              const isCompleted = step.number < currentStep;

              return (
                <div key={step.number} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        isCompleted
                          ? 'bg-[#16A34A] text-white'
                          : isActive
                          ? 'bg-[#1A2C6E] text-white'
                          : 'bg-[#E5E7EB] text-[#6B7280]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`mt-2 text-xs font-medium hidden md:block ${isActive ? 'text-[#1A2C6E]' : 'text-[#6B7280]'}`}>
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 md:w-24 h-0.5 mx-2 ${isCompleted ? 'bg-[#16A34A]' : 'bg-[#E5E7EB]'}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        {currentStep === 1 && <FlightSelection
          flights={mockFlights}
          searchData={searchData}
          selectedDepartFlight={selectedDepartFlight}
          selectedReturnFlight={selectedReturnFlight}
          onSelectDepartFlight={handleSelectDepartFlight}
          onSelectReturnFlight={handleSelectReturnFlight}
        />}

        {currentStep === 2 && <BundleSelection
          bundles={bundles}
          selectedBundle={selectedBundle}
          onSelectBundle={handleSelectBundle}
          onContinue={handleContinueToGuestDetails}
        />}

        {currentStep === 3 && <GuestDetailsForm
          guests={searchData.guests || { adults: 1, children: 0, infants: 0 }}
          onSubmit={handleSubmitGuestDetails}
        />}

        {currentStep === 4 && <PaymentScreen
          selectedDepartFlight={selectedDepartFlight}
          selectedReturnFlight={selectedReturnFlight}
          selectedBundle={bundles.find(b => b.id === selectedBundle)}
          onPayment={handlePayment}
        />}

        {currentStep === 5 && <ConfirmationScreen
          bookingRef={bookingRef}
          guestDetails={guestDetails}
          selectedDepartFlight={selectedDepartFlight}
          selectedReturnFlight={selectedReturnFlight}
          searchData={searchData}
        />}
      </div>
    </div>
  );
}

// Flight Selection Component
function FlightSelection({ flights, searchData, selectedDepartFlight, selectedReturnFlight, onSelectDepartFlight, onSelectReturnFlight }: any) {
  const dates = ['Apr 16', 'Apr 17', 'Apr 18', 'Apr 19', 'Apr 20'];

  return (
    <div className="space-y-8">
      {/* Departing Flight */}
      <div className="bg-white rounded-[16px] p-6" style={{ boxShadow: 'var(--shadow-card)' }}>
        <h2 className="text-2xl font-semibold text-[#1A2C6E] mb-2 flex items-center gap-2">
          <Plane className="w-6 h-6" />
          {searchData.from || 'Manila MNL'} → {searchData.to || 'Iloilo ILO'}
        </h2>
        <p className="text-[#6B7280] mb-6">Select your departing flight</p>

        {/* Date Strip */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
          {dates.map((date, i) => (
            <button
              key={date}
              className={`flex-shrink-0 px-6 py-3 rounded-[10px] transition-all ${
                i === 2
                  ? 'bg-[#F5A623] text-[#1A2C6E] font-semibold'
                  : 'bg-[#F7F8FC] text-[#6B7280] hover:bg-[#FDE9B8]'
              }`}
            >
              <div className="text-sm">{date}</div>
              <div className="text-xs mt-1">PHP 2,450</div>
            </button>
          ))}
        </div>

        {/* Flight Cards */}
        <div className="space-y-4">
          {flights.map((flight: any) => (
            <button
              key={flight.id}
              onClick={() => onSelectDepartFlight(flight)}
              className={`w-full p-6 border-2 rounded-[16px] text-left transition-all hover:border-[#1A2C6E] hover:shadow-md ${
                selectedDepartFlight?.id === flight.id
                  ? 'border-[#1A2C6E] bg-[#FDE9B8]'
                  : 'border-[#E5E7EB] bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-8 mb-2">
                    <div>
                      <div className="text-2xl font-bold text-[#1A2C6E]">{flight.depart}</div>
                      <div className="text-sm text-[#6B7280]">{searchData.from || 'MNL'}</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <Plane className="w-5 h-5 text-[#6B7280] transform rotate-90 mb-1" />
                      <div className="text-xs text-[#6B7280]">{flight.duration}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#1A2C6E]">{flight.arrive}</div>
                      <div className="text-sm text-[#6B7280]">{searchData.to || 'ILO'}</div>
                    </div>
                  </div>
                  <div className="text-sm text-[#6B7280]">Flight {flight.number}</div>
                </div>

                <div className="text-right ml-8">
                  <div className="text-xs text-[#6B7280] mb-1">All-in Fare/guest</div>
                  <div className="text-2xl font-bold text-[#1A2C6E]">PHP {flight.price}</div>
                  {flight.seatsLeft < 10 && (
                    <div className="mt-2 px-3 py-1 bg-[#F5A623] text-[#1A2C6E] rounded-[99px] text-xs font-medium inline-block">
                      {flight.seatsLeft} seats left
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Return Flight (if round-trip) */}
      {searchData.returnDate && (
        <div className="bg-white rounded-[16px] p-6" style={{ boxShadow: 'var(--shadow-card)' }}>
          <h2 className="text-2xl font-semibold text-[#1A2C6E] mb-2 flex items-center gap-2">
            <Plane className="w-6 h-6 transform rotate-180" />
            {searchData.to || 'Iloilo ILO'} → {searchData.from || 'Manila MNL'}
          </h2>
          <p className="text-[#6B7280] mb-6">Select your return flight</p>

          {/* Date Strip */}
          <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
            {dates.map((date, i) => (
              <button
                key={date}
                className={`flex-shrink-0 px-6 py-3 rounded-[10px] transition-all ${
                  i === 3
                    ? 'bg-[#F5A623] text-[#1A2C6E] font-semibold'
                    : 'bg-[#F7F8FC] text-[#6B7280] hover:bg-[#FDE9B8]'
                }`}
              >
                <div className="text-sm">{date}</div>
                <div className="text-xs mt-1">PHP 2,550</div>
              </button>
            ))}
          </div>

          {/* Flight Cards */}
          <div className="space-y-4">
            {flights.map((flight: any) => (
              <button
                key={flight.id}
                onClick={() => onSelectReturnFlight(flight)}
                className={`w-full p-6 border-2 rounded-[16px] text-left transition-all hover:border-[#1A2C6E] hover:shadow-md ${
                  selectedReturnFlight?.id === flight.id
                    ? 'border-[#1A2C6E] bg-[#FDE9B8]'
                    : 'border-[#E5E7EB] bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-8 mb-2">
                      <div>
                        <div className="text-2xl font-bold text-[#1A2C6E]">{flight.depart}</div>
                        <div className="text-sm text-[#6B7280]">{searchData.to || 'ILO'}</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <Plane className="w-5 h-5 text-[#6B7280] transform rotate-90 mb-1" />
                        <div className="text-xs text-[#6B7280]">{flight.duration}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#1A2C6E]">{flight.arrive}</div>
                        <div className="text-sm text-[#6B7280]">{searchData.from || 'MNL'}</div>
                      </div>
                    </div>
                    <div className="text-sm text-[#6B7280]">Flight {flight.number}</div>
                  </div>

                  <div className="text-right ml-8">
                    <div className="text-xs text-[#6B7280] mb-1">All-in Fare/guest</div>
                    <div className="text-2xl font-bold text-[#1A2C6E]">PHP {flight.price}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Bundle Selection Component
function BundleSelection({ bundles, selectedBundle, onSelectBundle, onContinue }: any) {
  return (
    <div className="bg-white rounded-[16px] p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
      <h2 className="text-3xl font-semibold text-[#1A2C6E] mb-4">Select a bundle for all flights</h2>

      <div className="bg-[#FDE9B8] border-l-4 border-[#F5A623] p-4 rounded-lg mb-8">
        <p className="text-[#1A2C6E] flex items-start gap-2">
          <span className="text-xl">💡</span>
          <span><strong>Tip:</strong> Avoid airport fees and long lines. Buy your add-ons ahead of time!</span>
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {bundles.map((bundle: any) => (
          <button
            key={bundle.id}
            onClick={() => onSelectBundle(bundle.id)}
            className={`p-6 border-2 rounded-[16px] text-left transition-all hover:border-[#1A2C6E] hover:shadow-md ${
              selectedBundle === bundle.id
                ? 'border-[#1A2C6E] bg-[#FDE9B8]'
                : 'border-[#E5E7EB] bg-white'
            }`}
          >
            {bundle.recommended && (
              <div className="inline-block px-3 py-1 bg-[#F5A623] text-[#1A2C6E] rounded-[99px] text-xs font-medium mb-3">
                RECOMMENDED
              </div>
            )}
            <h3 className="text-xl font-semibold text-[#1A2C6E] mb-2">{bundle.name}</h3>
            <p className="text-[#6B7280] text-sm mb-4">{bundle.description}</p>

            <div className="mb-4">
              <ul className="space-y-2 text-sm text-[#6B7280]">
                {bundle.features.map((feature: string) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#16A34A] mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-2xl font-bold text-[#1A2C6E] mb-3">
              {bundle.price === 0 ? 'Included' : `+ PHP ${bundle.price}/guest`}
            </div>

            <div className="text-sm text-[#1A2C6E] font-medium">{bundle.cta}</div>
          </button>
        ))}
      </div>

      <button
        onClick={onContinue}
        className="w-full py-4 bg-[#F5A623] text-[#1A2C6E] rounded-[10px] font-semibold hover:shadow-[0_4px_20px_rgba(245,166,35,0.35)] transition-all"
      >
        Continue to Guest Details
      </button>
    </div>
  );
}

// Guest Details Form Component
function GuestDetailsForm({ guests, onSubmit }: any) {
  const [formData, setFormData] = useState({
    title: 'Mr',
    firstName: '',
    lastName: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    nationality: 'Philippines',
    email: '',
    emailConfirm: '',
    phone: '',
    agreePolicy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white rounded-[16px] p-8 max-w-3xl mx-auto" style={{ boxShadow: 'var(--shadow-card)' }}>
      <h2 className="text-3xl font-semibold text-[#1A2C6E] mb-8">Guest Details</h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Adult 1 Section */}
        <div>
          <h3 className="text-xl font-semibold text-[#1A2C6E] mb-4 pb-2 border-b-2 border-[#F5A623]">
            Adult 1
          </h3>

          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 bg-[#FDE9B8] text-[#1A2C6E] rounded-[99px] text-xs font-medium">
              MNL–ILO: GO Basic ✈
            </span>
            <span className="px-3 py-1 bg-[#FDE9B8] text-[#1A2C6E] rounded-[99px] text-xs font-medium">
              ILO–MNL: GO Basic ✈
            </span>
          </div>

          <p className="text-sm text-[#6B7280] mb-4">
            Please make sure that you enter your name exactly as it is shown on your Valid ID
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-[#1A2C6E] mb-2">Title *</label>
              <select
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[8px] focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]"
                required
              >
                <option>Mr</option>
                <option>Ms</option>
                <option>Mrs</option>
                <option>Dr</option>
              </select>
            </div>
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-[#1A2C6E] mb-2">First Name *</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[8px] focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-[#1A2C6E] mb-2">Last Name *</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[8px] focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-[#1A2C6E] mb-2">Date of Birth *</label>
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="DD"
                value={formData.dobDay}
                onChange={(e) => setFormData({ ...formData, dobDay: e.target.value })}
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[8px] focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]"
                maxLength={2}
                required
              />
              <select
                value={formData.dobMonth}
                onChange={(e) => setFormData({ ...formData, dobMonth: e.target.value })}
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[8px] focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]"
                required
              >
                <option value="">Month</option>
                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(m => (
                  <option key={m}>{m}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="YYYY"
                value={formData.dobYear}
                onChange={(e) => setFormData({ ...formData, dobYear: e.target.value })}
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[8px] focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]"
                maxLength={4}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-[#1A2C6E] mb-2">Nationality *</label>
            <select
              value={formData.nationality}
              onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
              className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[8px] focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]"
              required
            >
              <option>Philippines</option>
              <option>United States</option>
              <option>Singapore</option>
              <option>Japan</option>
            </select>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold text-[#1A2C6E] mb-4">Contact Information</h3>
          <p className="text-sm text-[#6B7280] mb-6">
            Let us know how we may reach you if there are changes or questions related to your booking and payment.
            We will also be sending your itinerary to the below email.
          </p>

          <div className="mb-4">
            <label className="block text-sm font-medium text-[#1A2C6E] mb-2">Contact Number *</label>
            <div className="flex gap-2">
              <select className="px-4 py-3 border border-[#E5E7EB] rounded-[8px] focus:border-[#1A2C6E]">
                <option>+63</option>
                <option>+1</option>
              </select>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="flex-1 px-4 py-3 border border-[#E5E7EB] rounded-[8px] focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-[#1A2C6E] mb-2">Email *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[8px] focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-[#1A2C6E] mb-2">Retype Email *</label>
            <input
              type="email"
              value={formData.emailConfirm}
              onChange={(e) => setFormData({ ...formData, emailConfirm: e.target.value })}
              className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[8px] focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]"
              required
            />
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.agreePolicy}
              onChange={(e) => setFormData({ ...formData, agreePolicy: e.target.checked })}
              className="mt-1 w-5 h-5 text-[#1A2C6E] border-[#E5E7EB] rounded focus:ring-[#1A2C6E]"
              required
            />
            <span className="text-sm text-[#6B7280]">
              I confirm that I have read, understood, and agree to the updated{' '}
              <a href="#" className="text-[#1A2C6E] underline">Airchipelago Airlines Privacy Policy</a>
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-[#F5A623] text-[#1A2C6E] rounded-[10px] font-semibold hover:shadow-[0_4px_20px_rgba(245,166,35,0.35)] transition-all"
        >
          Continue to Payment
        </button>
      </form>
    </div>
  );
}

// Payment Screen Component
function PaymentScreen({ selectedDepartFlight, selectedReturnFlight, selectedBundle, onPayment }: any) {
  const [paymentMethod, setPaymentMethod] = useState('bank');

  const totalFare = (selectedDepartFlight?.price || 0) + (selectedReturnFlight?.price || 0) + (selectedBundle?.price || 0);

  return (
    <div className="grid lg:grid-cols-[1fr,400px] gap-8">
      {/* Payment Method */}
      <div className="bg-white rounded-[16px] p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
        <h2 className="text-3xl font-semibold text-[#1A2C6E] mb-8">Payment Method</h2>

        <div className="space-y-4">
          <button
            onClick={() => setPaymentMethod('bank')}
            className={`w-full p-6 border-2 rounded-[16px] text-left transition-all ${
              paymentMethod === 'bank'
                ? 'border-[#1A2C6E] bg-[#FDE9B8]'
                : 'border-[#E5E7EB] hover:border-[#1A2C6E]'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1A2C6E] rounded-lg flex items-center justify-center text-white text-xl">
                🏛
              </div>
              <div>
                <div className="font-semibold text-[#1A2C6E]">Bank Payment</div>
                <div className="text-sm text-[#6B7280]">Internet banking / OTC</div>
              </div>
            </div>
          </button>

          <button
            onClick={() => setPaymentMethod('ewallet')}
            className={`w-full p-6 border-2 rounded-[16px] text-left transition-all ${
              paymentMethod === 'ewallet'
                ? 'border-[#1A2C6E] bg-[#FDE9B8]'
                : 'border-[#E5E7EB] hover:border-[#1A2C6E]'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1A2C6E] rounded-lg flex items-center justify-center text-white text-xl">
                📱
              </div>
              <div>
                <div className="font-semibold text-[#1A2C6E]">E-Wallet Payment</div>
                <div className="text-sm text-[#6B7280]">GCash, PayMaya, and other e-wallets</div>
              </div>
            </div>
          </button>

          <button
            onClick={() => setPaymentMethod('qr')}
            className={`w-full p-6 border-2 rounded-[16px] text-left transition-all ${
              paymentMethod === 'qr'
                ? 'border-[#1A2C6E] bg-[#FDE9B8]'
                : 'border-[#E5E7EB] hover:border-[#1A2C6E]'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1A2C6E] rounded-lg flex items-center justify-center text-white text-xl">
                📱
              </div>
              <div>
                <div className="font-semibold text-[#1A2C6E]">QR Ph</div>
                <div className="text-sm text-[#6B7280]">Scan to pay via any QR Ph-enabled app</div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Booking Summary */}
      <div className="bg-white rounded-[16px] p-6 h-fit" style={{ boxShadow: 'var(--shadow-card)' }}>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-[#1A2C6E] rounded-full flex items-center justify-center">
            <Plane className="w-5 h-5 text-white transform -rotate-45" />
          </div>
          <span className="font-bold text-lg text-[#1A2C6E]">Airchipelago</span>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <div className="font-semibold text-[#1A2C6E] mb-1">Departing Flight</div>
            <div className="text-sm text-[#6B7280]">MNL → ILO | Flight {selectedDepartFlight?.number}</div>
            <div className="text-sm text-[#6B7280]">{selectedDepartFlight?.depart} → {selectedDepartFlight?.arrive} | {selectedDepartFlight?.duration}</div>
            <div className="text-sm font-medium text-[#1A2C6E] mt-1">PHP {selectedDepartFlight?.price}</div>
          </div>

          {selectedReturnFlight && (
            <div>
              <div className="font-semibold text-[#1A2C6E] mb-1">Returning Flight</div>
              <div className="text-sm text-[#6B7280]">ILO → MNL | Flight {selectedReturnFlight?.number}</div>
              <div className="text-sm text-[#6B7280]">{selectedReturnFlight?.depart} → {selectedReturnFlight?.arrive} | {selectedReturnFlight?.duration}</div>
              <div className="text-sm font-medium text-[#1A2C6E] mt-1">PHP {selectedReturnFlight?.price}</div>
            </div>
          )}
        </div>

        <div className="border-t border-[#E5E7EB] pt-4 mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-[#6B7280]">Baggage</span>
            <span className="text-[#1A2C6E]">10 kg included</span>
          </div>
          {selectedBundle && selectedBundle.price > 0 && (
            <div className="flex justify-between text-sm mb-2">
              <span className="text-[#6B7280]">{selectedBundle.name}</span>
              <span className="text-[#1A2C6E]">PHP {selectedBundle.price}</span>
            </div>
          )}
        </div>

        <div className="border-t border-[#E5E7EB] pt-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-lg text-[#1A2C6E]">Total to be paid</span>
            <span className="font-bold text-2xl text-[#1A2C6E]">PHP {totalFare}</span>
          </div>
        </div>

        <button
          onClick={onPayment}
          className="w-full py-4 bg-[#F5A623] text-[#1A2C6E] rounded-[10px] font-semibold hover:shadow-[0_4px_20px_rgba(245,166,35,0.35)] transition-all"
        >
          Pay Now
        </button>

        <p className="text-xs text-[#6B7280] text-center mt-4">
          By proceeding, you agree to our Terms and Conditions.
        </p>
      </div>
    </div>
  );
}

// Confirmation Screen Component
function ConfirmationScreen({ bookingRef, guestDetails, selectedDepartFlight, selectedReturnFlight, searchData }: any) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Success Banner */}
      <div className="bg-white rounded-[16px] p-12 text-center mb-8" style={{ boxShadow: 'var(--shadow-card)' }}>
        <div className="w-24 h-24 bg-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-[#1A2C6E] mb-4">Booking Confirmed! 🎉</h1>
        <p className="text-lg text-[#6B7280]">
          Your itinerary has been sent to {guestDetails.email}
        </p>
      </div>

      {/* Booking Details Card */}
      <div className="bg-white rounded-[16px] p-8 mb-8 border-2 border-dashed border-[#E5E7EB]" style={{ boxShadow: 'var(--shadow-card)' }}>
        <div className="flex items-start justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#1A2C6E] rounded-full flex items-center justify-center">
                <Plane className="w-6 h-6 text-white transform -rotate-45" />
              </div>
              <span className="font-bold text-xl text-[#1A2C6E]">Airchipelago</span>
            </div>
            <div className="font-mono text-2xl font-bold text-[#1A2C6E] mb-2">
              Booking Reference: {bookingRef}
            </div>
            <div className="text-[#6B7280]">{guestDetails.title} {guestDetails.firstName} {guestDetails.lastName}</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="text-sm text-[#6B7280] mb-1">Departing Flight</div>
            <div className="font-semibold text-[#1A2C6E]">{searchData.from} → {searchData.to}</div>
            <div className="text-sm text-[#6B7280]">{searchData.departDate}</div>
            <div className="text-sm text-[#6B7280]">{selectedDepartFlight?.depart} → {selectedDepartFlight?.arrive}</div>
            <div className="text-sm text-[#6B7280]">Flight {selectedDepartFlight?.number}</div>
          </div>

          {selectedReturnFlight && (
            <div>
              <div className="text-sm text-[#6B7280] mb-1">Returning Flight</div>
              <div className="font-semibold text-[#1A2C6E]">{searchData.to} → {searchData.from}</div>
              <div className="text-sm text-[#6B7280]">{searchData.returnDate}</div>
              <div className="text-sm text-[#6B7280]">{selectedReturnFlight?.depart} → {selectedReturnFlight?.arrive}</div>
              <div className="text-sm text-[#6B7280]">Flight {selectedReturnFlight?.number}</div>
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md h-16 bg-[#E5E7EB] rounded-lg flex items-center justify-center">
            <div className="font-mono text-xs text-[#6B7280]">BARCODE / QR CODE PLACEHOLDER</div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <button className="px-6 py-3 border-2 border-[#1A2C6E] text-[#1A2C6E] rounded-[10px] hover:bg-[#FDE9B8] transition-colors font-medium">
          📥 Download Itinerary (PDF)
        </button>
        <button className="px-6 py-3 border-2 border-[#1A2C6E] text-[#1A2C6E] rounded-[10px] hover:bg-[#FDE9B8] transition-colors font-medium">
          📧 Resend to Email
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="px-6 py-3 bg-[#F5A623] text-[#1A2C6E] rounded-[10px] hover:shadow-[0_4px_20px_rgba(245,166,35,0.35)] transition-all font-medium"
        >
          🏠 Return to Home
        </button>
      </div>

      {/* What's Next */}
      <div className="bg-white rounded-[16px] p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
        <h3 className="text-2xl font-semibold text-[#1A2C6E] mb-6">What's Next</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-[#FDE9B8] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xl">✅</span>
            </div>
            <div>
              <div className="font-semibold text-[#1A2C6E] mb-1">Check in online</div>
              <div className="text-sm text-[#6B7280]">2 hours before departure</div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-[#FDE9B8] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xl">🆔</span>
            </div>
            <div>
              <div className="font-semibold text-[#1A2C6E] mb-1">Bring a valid ID</div>
              <div className="text-sm text-[#6B7280]">Government-issued ID required</div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-[#FDE9B8] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xl">⏰</span>
            </div>
            <div>
              <div className="font-semibold text-[#1A2C6E] mb-1">Arrive early</div>
              <div className="text-sm text-[#6B7280]">1.5 hours before your flight</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
