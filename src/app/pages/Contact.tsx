import { useState } from 'react';
import { Phone, Mail, Clock, CheckCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: 'General', message: '' });
  };

  const contacts = [
    {
      dept: 'Customer Support (24/7)',
      phone: '+1 (800) 555-2477',
      email: 'support@airchipelago.com',
    },
    {
      dept: 'Reservations & Ticketing',
      phone: '+1 (800) 555-BOOK (2665)',
      email: 'reservations@airchipelago.com',
    },
    {
      dept: 'Check-in Assistance',
      phone: '+1 (800) 555-CHECK (2432)',
      email: '',
    },
    {
      dept: 'Baggage Services',
      phone: '+1 (800) 555-BAGS (2247)',
      email: 'baggage@airchipelago.com',
    },
    {
      dept: 'Island Miles Program',
      phone: '',
      email: 'island@airchipelago.com',
    },
    {
      dept: 'General Inquiries',
      phone: '',
      email: 'airchipelago@gmail.com',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="bg-white border-b border-[#E5E7EB] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-semibold text-[#1A2C6E] mb-4">Contact Us</h1>
          <p className="text-xl text-[#6B7280]">
            We're here to help. Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-[#1A2C6E] mb-6">Get in Touch</h2>

              {contacts.map((contact) => (
                <div key={contact.dept} className="bg-white rounded-[16px] p-6" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <h3 className="font-semibold text-[#1A2C6E] mb-4">{contact.dept}</h3>
                  <div className="space-y-2">
                    {contact.phone && (
                      <a
                        href={`tel:${contact.phone.replace(/\D/g, '')}`}
                        className="flex items-center gap-3 text-[#6B7280] hover:text-[#1A2C6E] transition-colors"
                      >
                        <Phone className="w-5 h-5 flex-shrink-0" />
                        <span>{contact.phone}</span>
                      </a>
                    )}
                    {contact.email && (
                      <a
                        href={`mailto:${contact.email}`}
                        className="flex items-center gap-3 text-[#6B7280] hover:text-[#1A2C6E] transition-colors"
                      >
                        <Mail className="w-5 h-5 flex-shrink-0" />
                        <span>{contact.email}</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {/* Office Hours */}
              <div className="bg-[#FDE9B8] rounded-[16px] p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-6 h-6 text-[#1A2C6E]" />
                  <h3 className="font-semibold text-[#1A2C6E]">Office Hours</h3>
                </div>
                <p className="text-[#1A2C6E]">Monday – Sunday, Open 24 hours</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-[16px] p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
                <h2 className="text-3xl font-semibold text-[#1A2C6E] mb-6">Send Us a Message</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-[#DCFCE7] border-l-4 border-[#16A34A] rounded-lg flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                    <p className="text-[#16A34A] text-sm">
                      ✅ Message sent! Our team will get back to you within 24 hours.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1A2C6E] mb-2">Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[8px] bg-white focus:outline-none focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A2C6E] mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[8px] bg-white focus:outline-none focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A2C6E] mb-2">Subject *</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[8px] bg-white focus:outline-none focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E]"
                      required
                    >
                      <option>General</option>
                      <option>Booking</option>
                      <option>Baggage</option>
                      <option>Island Miles</option>
                      <option>Complaint</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A2C6E] mb-2">Message *</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[8px] bg-white focus:outline-none focus:border-[#1A2C6E] focus:ring-1 focus:ring-[#1A2C6E] resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#F5A623] text-[#1A2C6E] rounded-[10px] font-semibold hover:shadow-[0_4px_20px_rgba(245,166,35,0.35)] transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 text-center">
                <p className="text-[#6B7280] mb-4">Follow us on social media</p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1A2C6E] hover:bg-[#F5A623] rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="Facebook"
                  >
                    f
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1A2C6E] hover:bg-[#F5A623] rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <span className="font-bold">IG</span>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1A2C6E] hover:bg-[#F5A623] rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="Twitter"
                  >
                    𝕏
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
