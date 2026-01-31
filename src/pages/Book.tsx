import { useState } from 'react';

const Book = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    pickupAddress: '',
    pickupPostcode: '',
    dropoffAddress: '',
    dropoffPostcode: '',
    dateTime: '',
    passengers: '1',
    luggage: '1',
    flightNumber: '',
    vehiclePreference: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.contactNumber.trim())
      newErrors.contactNumber = 'Contact number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid';
    if (!formData.pickupAddress.trim())
      newErrors.pickupAddress = 'Pickup address is required';
    if (!formData.pickupPostcode.trim())
      newErrors.pickupPostcode = 'Pickup postcode is required';
    if (!formData.dropoffAddress.trim())
      newErrors.dropoffAddress = 'Drop-off address is required';
    if (!formData.dropoffPostcode.trim())
      newErrors.dropoffPostcode = 'Drop-off postcode is required';
    if (!formData.dateTime) newErrors.dateTime = 'Date and time is required';
    if (!formData.vehiclePreference)
      newErrors.vehiclePreference = 'Vehicle preference is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: '',
          contactNumber: '',
          email: '',
          pickupAddress: '',
          pickupPostcode: '',
          dropoffAddress: '',
          dropoffPostcode: '',
          dateTime: '',
          passengers: '1',
          luggage: '1',
          flightNumber: '',
          vehiclePreference: '',
        });
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 opacity-0 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            <span className="text-white">Book Your </span>
            <span className="text-amber-500">Journey</span>
          </h1>
          <p className="text-amber-500/80 text-sm bg-zinc-900/50 border border-amber-500/30 rounded-lg p-4 max-w-2xl mx-auto">
            Advance booking is recommended to guarantee availability.
          </p>
        </div>

        {submitted ? (
          <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border-2 border-amber-500 rounded-lg p-8 text-center opacity-0 animate-fadeIn">
            <div className="text-6xl mb-4">✓</div>
            <h2 className="text-2xl font-bold text-amber-500 mb-2">Booking Submitted!</h2>
            <p className="text-white/80">
              Thank you for your booking request. We will contact you shortly to confirm your
              reservation.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-8 md:p-12 shadow-2xl opacity-0 animate-fadeIn animation-delay-200"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black/50 border ${
                    errors.fullName ? 'border-red-500' : 'border-amber-500/30'
                  } rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors`}
                  placeholder="John Smith"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black/50 border ${
                    errors.contactNumber ? 'border-red-500' : 'border-amber-500/30'
                  } rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors`}
                  placeholder="+44 7XXX XXXXXX"
                />
                {errors.contactNumber && (
                  <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-white/90 text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black/50 border ${
                    errors.email ? 'border-red-500' : 'border-amber-500/30'
                  } rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Pickup Address *
                </label>
                <input
                  type="text"
                  name="pickupAddress"
                  value={formData.pickupAddress}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black/50 border ${
                    errors.pickupAddress ? 'border-red-500' : 'border-amber-500/30'
                  } rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors`}
                  placeholder="123 Main Street, London"
                />
                {errors.pickupAddress && (
                  <p className="text-red-500 text-xs mt-1">{errors.pickupAddress}</p>
                )}
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Pickup Postcode *
                </label>
                <input
                  type="text"
                  name="pickupPostcode"
                  value={formData.pickupPostcode}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black/50 border ${
                    errors.pickupPostcode ? 'border-red-500' : 'border-amber-500/30'
                  } rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors`}
                  placeholder="SW1A 1AA"
                />
                {errors.pickupPostcode && (
                  <p className="text-red-500 text-xs mt-1">{errors.pickupPostcode}</p>
                )}
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Drop-off Address *
                </label>
                <input
                  type="text"
                  name="dropoffAddress"
                  value={formData.dropoffAddress}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black/50 border ${
                    errors.dropoffAddress ? 'border-red-500' : 'border-amber-500/30'
                  } rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors`}
                  placeholder="Heathrow Airport"
                />
                {errors.dropoffAddress && (
                  <p className="text-red-500 text-xs mt-1">{errors.dropoffAddress}</p>
                )}
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Drop-off Postcode *
                </label>
                <input
                  type="text"
                  name="dropoffPostcode"
                  value={formData.dropoffPostcode}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black/50 border ${
                    errors.dropoffPostcode ? 'border-red-500' : 'border-amber-500/30'
                  } rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors`}
                  placeholder="TW6 1AP"
                />
                {errors.dropoffPostcode && (
                  <p className="text-red-500 text-xs mt-1">{errors.dropoffPostcode}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Date & Time *
                </label>
                <input
                  type="datetime-local"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black/50 border ${
                    errors.dateTime ? 'border-red-500' : 'border-amber-500/30'
                  } rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors`}
                />
                {errors.dateTime && (
                  <p className="text-red-500 text-xs mt-1">{errors.dateTime}</p>
                )}
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Number of Passengers *
                </label>
                <select
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-amber-500/30 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Passenger' : 'Passengers'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Number of Luggage Items *
                </label>
                <select
                  name="luggage"
                  value={formData.luggage}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-amber-500/30 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Item' : 'Items'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Flight Number (Optional)
                </label>
                <input
                  type="text"
                  name="flightNumber"
                  value={formData.flightNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-amber-500/30 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="BA123"
                />
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Vehicle Preference *
                </label>
                <select
                  name="vehiclePreference"
                  value={formData.vehiclePreference}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black/50 border ${
                    errors.vehiclePreference ? 'border-red-500' : 'border-amber-500/30'
                  } rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors`}
                >
                  <option value="">Select a vehicle</option>
                  <option value="S-Class">S-Class</option>
                  <option value="Range Rover">Range Rover</option>
                  <option value="V-Class">V-Class</option>
                </select>
                {errors.vehiclePreference && (
                  <p className="text-red-500 text-xs mt-1">{errors.vehiclePreference}</p>
                )}
              </div>
            </div>

            <div className="mt-8 bg-black/50 border border-amber-500/20 rounded-lg p-6">
              <h3 className="text-amber-500 font-semibold mb-3 text-lg">Payment Information</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Payment is accepted via bank transfer or card. A deposit may be required for
                long-distance and full-day bookings.
              </p>
            </div>

            <button
              type="submit"
              className="btn-animate w-full mt-8 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-brand-dark font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-amber-500/50"
            >
              Submit Booking Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Book;
