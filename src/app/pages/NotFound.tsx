import { Link } from 'react-router';
import { MapPin } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-[#F7F8FC]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <MapPin className="w-24 h-24 text-[#F5A623] mx-auto mb-6" />
          <h1 className="text-6xl font-bold text-[#1A2C6E] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            404
          </h1>
          <h2 className="text-3xl font-semibold text-[#1A2C6E] mb-4">
            Island Not Found
          </h2>
          <p className="text-xl text-[#6B7280] mb-8">
            Looks like this island doesn't exist on our map.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-4 bg-[#F5A623] text-[#1A2C6E] rounded-[10px] font-semibold hover:shadow-[0_4px_20px_rgba(245,166,35,0.35)] transition-all"
          >
            Return to Home
          </Link>
          <Link
            to="/book"
            className="px-8 py-4 border-2 border-[#1A2C6E] text-[#1A2C6E] rounded-[10px] font-semibold hover:bg-[#FDE9B8] transition-colors"
          >
            Book a Flight
          </Link>
        </div>
      </div>
    </div>
  );
}
