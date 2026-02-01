import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import { fleet } from '../data/fleet';
import type { VehicleFeature, VehicleType } from '../data/fleet';

type VehicleTypeFilter = 'all' | VehicleType;
type VehicleFeatureFilter = 'all' | VehicleFeature;


const typeOptions: { value: VehicleTypeFilter; label: string }[] = [
  { value: 'all', label: 'All Types' },
  { value: 'luxury', label: 'Luxury' },
  { value: 'sedan', label: 'Sedan' },
  { value: 'suv', label: 'SUV' },
];

const featureOptions: { value: VehicleFeatureFilter; label: string }[] = [
  { value: 'all', label: 'All Features' },
  { value: 'leather', label: 'Leather Interior' },
  { value: 'wifi', label: 'WiFi' },
  { value: 'privacy', label: 'Privacy Partition' },
];

const Services = () => {
  const [selectedType, setSelectedType] = useState<VehicleTypeFilter>('all');
  const [selectedFeature, setSelectedFeature] = useState<VehicleFeatureFilter>('all');
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
      selectedFeature === 'all' || v.features.includes(selectedFeature as VehicleFeature);
    return matchType && matchFeature;
  });

  return (
    <>
      <PageMeta
        title="Our Services & Fleet - Al Safir Chauffeurs"
        description="Browse our premium fleet: luxury sedans, executive SUVs, and people carriers. Airport transfers, corporate travel, special events, and private hire across London."
      />
      <div className="min-h-screen bg-black pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Page title - same pattern as About, Contact, Book */}
        <div className="text-center mb-16 opacity-0 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="text-amber-500">Services</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Experience luxury and comfort with our meticulously maintained premium vehicle
            collection. From executive sedans to chauffeur-driven SUVs.
          </p>
        </div>

        {/* Choose Your Ride + Filters - dark card */}
        <section className="mb-12 opacity-0 animate-fadeIn animation-delay-200">
          <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-6 md:p-8 hover:border-amber-500/30 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">
                Choose Your Ride
              </h2>
              <div className="flex flex-wrap gap-4">
                <div className="relative">
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setTypeOpen(!typeOpen); setFeatureOpen(false); }}
                    className="btn-animate flex items-center gap-2 bg-black/50 border border-amber-500/30 hover:border-amber-500 text-white px-5 py-3 rounded-lg min-w-[160px] justify-between"
                  >
                    <span className="text-sm uppercase tracking-wide">
                      {typeOptions.find((o) => o.value === selectedType)?.label ?? 'Select Type'}
                    </span>
                    <ChevronDown size={18} className="shrink-0" />
                  </button>
                  {typeOpen && (
                    <div className="absolute top-full left-0 mt-1 w-full bg-zinc-900 border border-amber-500/20 rounded-lg py-1 z-20 shadow-xl">
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
                    className="btn-animate flex items-center gap-2 bg-black/50 border border-amber-500/30 hover:border-amber-500 text-white px-5 py-3 rounded-lg min-w-[180px] justify-between"
                  >
                    <span className="text-sm uppercase tracking-wide">
                      {featureOptions.find((o) => o.value === selectedFeature)?.label ?? 'Select Feature'}
                    </span>
                    <ChevronDown size={18} className="shrink-0" />
                  </button>
                  {featureOpen && (
                    <div className="absolute top-full left-0 mt-1 w-full bg-zinc-900 border border-amber-500/20 rounded-lg py-1 z-20 shadow-xl">
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

        {/* Vehicle grid - dark theme */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFleet.map((vehicle, index) => (
              <article
                key={vehicle.name}
                className="bg-zinc-900/50 border border-amber-500/20 rounded-lg overflow-hidden hover:border-amber-500/30 transition-all duration-300 opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="p-6 pb-0">
                  <h3 className="font-serif font-bold text-white text-xl md:text-2xl">
                    {vehicle.name}
                  </h3>
                  <p className="font-sans text-amber-500 text-xs uppercase tracking-logo mt-1">
                    {vehicle.category}
                  </p>
                </div>
                <div className="relative h-56 md:h-64 mt-6 overflow-hidden bg-black/30">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-contain object-center"
                  />
                </div>
                <div className="p-6 pt-4">
                  <div className="divide-y divide-white/10">
                    <div className="flex justify-between items-center py-3">
                      <span className="text-white/60 text-sm">Year</span>
                      <span className="font-serif font-bold text-amber-500">{vehicle.year}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-white/60 text-sm">Seats</span>
                      <span className="font-serif font-bold text-amber-500">{vehicle.seats}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-white/60 text-sm">Baggage</span>
                      <span className="font-serif font-bold text-amber-500">{vehicle.baggage}</span>
                    </div>
                  </div>
                  <Link
                    to={`/book?vehicle=${encodeURIComponent(vehicle.name)}`}
                    className="btn-animate mt-4 flex items-center justify-center gap-2 w-full border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black py-3 rounded-lg text-sm font-medium uppercase tracking-logo transition-colors"
                  >
                    Request a quote
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          {filteredFleet.length === 0 && (
            <p className="text-center text-white/60 py-12 opacity-0 animate-fadeIn">
              No vehicles match the selected filters.
            </p>
          )}
        </section>
      </div>
    </div>
    </>
  );
};

export default Services;
