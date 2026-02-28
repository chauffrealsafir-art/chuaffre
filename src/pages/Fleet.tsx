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

const Fleet = () => {
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
        title="Our Fleet - Al Safir Chauffeurs"
        description="Browse our premium fleet: luxury sedans, executive SUVs, and people carriers. Airport transfers, corporate travel, special events, and private hire across London."
      />
      <div className="min-h-screen bg-black pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Page title - same pattern as About, Contact, Book */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 opacity-0 animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 sm:mb-4">
            <span className="text-white">Our </span>
            <span className="text-amber-500">Fleet</span>
          </h1>
          <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Experience luxury and comfort with our meticulously maintained premium vehicle
            collection. From executive sedans to chauffeur-driven SUVs.
          </p>
        </div>

        {/* Choose Your Ride + Filters - dark card */}
        <section className="mb-8 sm:mb-10 md:mb-12 opacity-0 animate-fadeIn animation-delay-200">
          <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-4 sm:p-6 md:p-8 hover:border-amber-500/30 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white">
                Choose Your Ride
              </h2>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full sm:w-auto">
                <div className="relative">
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setTypeOpen(!typeOpen); setFeatureOpen(false); }}
                    className="btn-animate flex items-center gap-2 bg-black/50 border border-amber-500/30 hover:border-amber-500 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg w-full sm:min-w-[160px] justify-between text-sm"
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
                    className="btn-animate flex items-center gap-2 bg-black/50 border border-amber-500/30 hover:border-amber-500 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg w-full sm:min-w-[180px] justify-between text-sm"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredFleet.map((vehicle, index) => (
              <article
                key={vehicle.name}
                className="bg-[#F7F2E7] border border-amber-700/30 rounded-lg overflow-hidden hover:border-amber-600/50 transition-all duration-300 opacity-0 animate-fadeIn flex flex-col"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="p-4 sm:p-5 md:p-6 pb-0 h-[90px] sm:h-[100px] md:h-[110px] flex flex-col justify-start">
                  <h3 className="font-serif font-bold text-black text-lg sm:text-xl md:text-2xl leading-tight">
                    {vehicle.name.includes(' (Long') ? (
                      <>
                        {vehicle.name.split(' (Long')[0]}
                        <br />
                        {' (Long' + vehicle.name.split(' (Long')[1]}
                      </>
                    ) : (
                      vehicle.name
                    )}
                  </h3>
                  <p className="font-sans text-black/80 text-xs uppercase tracking-logo mt-1">
                    {vehicle.category}
                  </p>
                </div>
                <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 mt-4 overflow-hidden bg-[#F7F2E7] flex-shrink-0">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-contain object-center"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6 pt-3 sm:pt-4">
                  <Link
                    to={`/book?vehicle=${encodeURIComponent(vehicle.name)}`}
                    className="btn-animate flex items-center justify-center gap-2 w-full bg-black border-2 border-black text-white hover:bg-amber-500 hover:text-black hover:border-amber-500 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium uppercase tracking-logo transition-colors"
                  >
                    Request a quote
                    <ArrowRight size={14} className="sm:w-4 sm:h-4" />
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

export default Fleet;
