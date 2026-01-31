const Services = () => {
  const fleet = [
    {
      name: 'Range Rover Vogue (Autobiography)',
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Range Rover Vogue (Long Wheel Base)',
      image: 'https://images.pexels.com/photos/3849343/pexels-photo-3849343.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Mercedes S Class',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Mercedes V Class',
      image: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Rolls Royce Ghost',
      image: 'https://images.pexels.com/photos/5605129/pexels-photo-5605129.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Rolls Royce Cullinan',
      image: 'https://images.pexels.com/photos/10664990/pexels-photo-10664990.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Land Rover Defender',
      image: 'https://images.pexels.com/photos/4338100/pexels-photo-4338100.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'BMW 7 Series',
      image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'BMW 5 Series',
      image: 'https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Mercedes GLS (Maybach)',
      image: 'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Audi RS6',
      image: 'https://images.pexels.com/photos/3874340/pexels-photo-3874340.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Lamborghini Urus',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="text-amber-500">Fleet</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Experience luxury and comfort with our meticulously maintained premium vehicle
            collection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleet.map((vehicle, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-zinc-900 border border-amber-500/20 hover:border-amber-500 transition-all duration-500 cursor-pointer opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-semibold tracking-wide group-hover:text-amber-500 transition-colors duration-300">
                  {vehicle.name}
                </h3>
                <div className="w-12 h-0.5 bg-amber-500 mt-2 group-hover:w-full transition-all duration-500"></div>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-amber-500/20 backdrop-blur-sm rounded-full p-2">
                  <svg
                    className="w-6 h-6 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
