export type VehicleFeature = 'leather' | 'wifi' | 'privacy';
export type VehicleType = 'luxury' | 'sedan' | 'suv';

export type FleetVehicle = {
  name: string;
  category: string;
  type: VehicleType;
  features: VehicleFeature[];
  year: number;
  seats: number;
  baggage: number;
  image: string;
};

export const fleet: FleetVehicle[] = [
  {
    name: 'BMW 5 Series',
    category: 'Luxury',
    type: 'luxury',
    features: ['leather', 'wifi'],
    year: 2024,
    seats: 3,
    baggage: 4,
    image: 'https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Mercedes S Class',
    category: 'Sedan',
    type: 'sedan',
    features: ['leather', 'wifi', 'privacy'],
    year: 2023,
    seats: 3,
    baggage: 3,
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Mercedes E Class',
    category: 'Luxury',
    type: 'luxury',
    features: ['leather', 'wifi'],
    year: 2022,
    seats: 3,
    baggage: 2,
    image: 'https://images.pexels.com/photos/3722598/pexels-photo-3722598.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Range Rover Vogue (Autobiography)',
    category: 'SUV',
    type: 'suv',
    features: ['leather', 'wifi', 'privacy'],
    year: 2024,
    seats: 4,
    baggage: 5,
    image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Rolls Royce Ghost',
    category: 'Luxury',
    type: 'luxury',
    features: ['leather', 'wifi', 'privacy'],
    year: 2023,
    seats: 3,
    baggage: 3,
    image: 'https://images.pexels.com/photos/5605129/pexels-photo-5605129.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'BMW 7 Series',
    category: 'Luxury',
    type: 'luxury',
    features: ['leather', 'wifi'],
    year: 2023,
    seats: 3,
    baggage: 4,
    image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Mercedes V Class',
    category: 'SUV',
    type: 'suv',
    features: ['leather', 'wifi', 'privacy'],
    year: 2023,
    seats: 6,
    baggage: 6,
    image: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Land Rover Defender',
    category: 'SUV',
    type: 'suv',
    features: ['leather', 'wifi', 'privacy'],
    year: 2024,
    seats: 4,
    baggage: 5,
    image: 'https://images.pexels.com/photos/4338100/pexels-photo-4338100.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Audi RS6',
    category: 'Luxury',
    type: 'luxury',
    features: ['leather', 'wifi'],
    year: 2023,
    seats: 3,
    baggage: 4,
    image: 'https://images.pexels.com/photos/3874340/pexels-photo-3874340.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];
