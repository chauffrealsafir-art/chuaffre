import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

type VehicleType = 'all' | 'luxury' | 'sedan' | 'suv';
type VehicleFeature = 'all' | 'leather' | 'wifi' | 'privacy';

const fleet = [
  {
    name: 'BMW 5 Series',
    category: 'Luxury',
    type: 'luxury' as const,
    features: ['leather', 'wifi'] as VehicleFeature[],
    year: 2024,
    seats: 3,
    baggage: 4,
    image: 'https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Mercedes S Class',
    category: 'Sedan',
    type: 'sedan' as const,
    features: ['leather', 'wifi', 'privacy'] as VehicleFeature[],
    year: 2023,
    seats: 3,
    baggage: 3,
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Mercedes E Class',
    category: 'Luxury',
    type: 'luxury' as const,
    features: ['leather', 'wifi'] as VehicleFeature[],
    year: 2022,
    seats: 3,
    baggage: 2,
    image: 'https://images.pexels.com/photos/3722598/pexels-photo-3722598.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Range Rover Vogue (Autobiography)',
    category: 'SUV',
    type: 'suv' as const,
    features: ['leather', 'wifi', 'privacy'] as VehicleFeature[],
    year: 2024,
    seats: 4,
    baggage: 5,
    image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Rolls Royce Ghost',
    category: 'Luxury',
    type: 'luxury' as const,
    features: ['leather', 'wifi', 'privacy'] as VehicleFeature[],
    year: 2023,
    seats: 3,
    baggage: 3,
    image: 'https://images.pexels.com/photos/5605129/pexels-photo-5605129.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'BMW 7 Series',
    category: 'Luxury',
    type: 'luxury' as const,
    features: ['leather', 'wifi'] as VehicleFeature[],
    year: 2023,
    seats: 3,
    baggage: 4,
    image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Mercedes V Class',
    category: 'SUV',
    type: 'suv' as const,
    features: ['leather', 'wifi', 'privacy'] as VehicleFeature[],
    year: 2023,
    seats: 6,
    baggage: 6,
    image: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Land Rover Defender',
    category: 'SUV',
    type: 'suv' as const,
    features: ['leather', 'wifi'] as VehicleFeature[],
    year: 2024,
    seats: 4,
    baggage: 5,
    image: 'https://images.pexels.com/photos/4338100/pexels-photo-4338100.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Audi RS6',
    category: 'Luxury',
    type: 'luxury' as const,
    features: ['leather', 'wifi'] as VehicleFeature[],
    year: 2023,
    seats: 3,
    baggage: 4,
    image: 'https://images.pexels.com/photos/3874340/pexels-photo-3874340.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const typeOptions: { value: VehicleType; label: string }[] = [
  { value: 'all', label: 'All Types' },
  { value: 'luxury', label: 'Luxury' },
  { value: 'sedan', label: 'Sedan' },
  { value: 'suv', label: 'SUV' },
];

const featureOptions: { value: VehicleFeature; label: string }[] = [
  { value: 'all', label: 'All Features' },
  { value: 'leather', label: 'Leather Interior' },
  { value: 'wifi', label: 'WiFi' },
  { value: 'privacy', label: 'Privacy Partition' },
];

const heroImage =
  'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920';

const Services = () => {
  const [selectedType, setSelectedType] = useState<VehicleType>('all');
  const [selectedFeature, setSelectedFeature] = useState<VehicleFeature>('all');
  const [typeOpen, setTypeOpen] = useState(false);
  const [featureOpen, setFeatureOpen] = useState(false);

  useEffect(() => {
    const close = () => { setTypeOpen(false); setFeatureOpen(false); };
    if (typeOpen || featureOpen) {
      document.addEventListener('click', close);
      return () => document.removeEventListener('click', close);
    }
  }, [typeOpen, featureOpen]);

  const filteredFleet = fleet.filter((v) => {
    const matchType = selectedType === 'all' || v.type === selectedType;
    const matchFeature =
      selectedFeature === 'all' || v.features.includes(selectedFeature);
    return matchType && matchFeature;
  });

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[340px] flex items-end pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Fleet
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-xl leading-relaxed">
            Experience luxury and comfort with our meticulously maintained premium vehicle
            collection. From executive sedans to chauffeur-driven SUVs.
          </p>
        </div>
      </section>

      {/* Choose Your Ride + Filters */}
      <section className="border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <h2 className="font-sans text-2xl md:text-3xl font-bold text-white">
              Choose Your Ride
            </h2>
            <div className="flex flex-wrap gap-4">
              <div className="relative">
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setTypeOpen(!typeOpen); setFeatureOpen(false); }}
                  className="btn-animate flex items-center gap-2 bg-black border border-white/30 hover:border-amber-500/50 text-white px-5 py-3 rounded-lg min-w-[160px] justify-between"
                >
                  <span className="text-sm uppercase tracking-wide">
                    {typeOptions.find((o) => o.value === selectedType)?.label ?? 'Select Type'}
                  </span>
                  <ChevronDown size={18} className="shrink-0" />
                </button>
                {typeOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-zinc-900 border border-white/20 rounded-lg py-1 z-20 shadow-xl">
                    {typeOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setSelectedType(opt.value); setTypeOpen(false); }}
                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-amber-500/20 hover:text-amber-500 uppercase tracking-wide"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setFeatureOpen(!featureOpen); setTypeOpen(false); }}
                  className="btn-animate flex items-center gap-2 bg-black border border-white/30 hover:border-amber-500/50 text-white px-5 py-3 rounded-lg min-w-[180px] justify-between"
                >
                  <span className="text-sm uppercase tracking-wide">
                    {featureOptions.find((o) => o.value === selectedFeature)?.label ?? 'Select Feature'}
                  </span>
                  <ChevronDown size={18} className="shrink-0" />
                </button>
                {featureOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-zinc-900 border border-white/20 rounded-lg py-1 z-20 shadow-xl">
                    {featureOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setSelectedFeature(opt.value); setFeatureOpen(false); }}
                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-amber-500/20 hover:text-amber-500 uppercase tracking-wide"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle grid */}
      <section className="bg-zinc-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFleet.map((vehicle, index) => (
              <article
                key={vehicle.name}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-zinc-200/80 opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="p-6 pb-0">
                  <h3 className="font-sans font-bold text-black text-xl md:text-2xl">
                    {vehicle.name}
                  </h3>
                  <p className="font-sans text-zinc-500 text-xs uppercase tracking-logo mt-1">
                    {vehicle.category}
                  </p>
                </div>
                <div className="relative h-56 md:h-64 mt-6 overflow-hidden bg-zinc-100">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-contain object-center"
                  />
                </div>
                <div className="p-6 pt-4">
                  <div className="divide-y divide-zinc-200">
                    <div className="flex justify-between items-center py-3">
                      <span className="text-zinc-500 text-sm">Year</span>
                      <span className="font-sans font-bold text-black">{vehicle.year}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-zinc-500 text-sm">Seats</span>
                      <span className="font-sans font-bold text-black">{vehicle.seats}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-zinc-500 text-sm">Baggage</span>
                      <span className="font-sans font-bold text-black">{vehicle.baggage}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {filteredFleet.length === 0 && (
            <p className="text-center text-zinc-600 py-12">
              No vehicles match the selected filters.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;
