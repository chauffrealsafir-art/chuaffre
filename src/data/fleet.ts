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
    name: 'Range Rover Vogue (Autobiography)',
    category: 'SUV',
    type: 'suv',
    features: ['leather', 'wifi', 'privacy'],
    year: 2024,
    seats: 4,
    baggage: 5,
    image: '/banners/Fleet - ASC/Rover Auto.png',
  },
  {
    name: 'Range Rover Vogue (Long Wheel Base)',
    category: 'SUV',
    type: 'suv',
    features: ['leather', 'wifi', 'privacy'],
    year: 2024,
    seats: 4,
    baggage: 5,
    image: '/banners/Fleet - ASC/Rover LongWheel.png',
  },
  {
    name: 'Mercedes S Class',
    category: 'Sedan',
    type: 'sedan',
    features: ['leather', 'wifi', 'privacy'],
    year: 2023,
    seats: 3,
    baggage: 3,
    image: '/banners/Fleet - ASC/S Class.png',
  },
  {
    name: 'Mercedes V Class',
    category: 'SUV',
    type: 'suv',
    features: ['leather', 'wifi', 'privacy'],
    year: 2023,
    seats: 6,
    baggage: 6,
    image: '/banners/Fleet - ASC/V Class.png',
  },
  {
    name: 'Rolls Royce Ghost',
    category: 'Luxury',
    type: 'luxury',
    features: ['leather', 'wifi', 'privacy'],
    year: 2023,
    seats: 3,
    baggage: 3,
    image: '/banners/Fleet - ASC/Ghost.png',
  },
  {
    name: 'Rolls Royce Cullinan',
    category: 'Luxury',
    type: 'luxury',
    features: ['leather', 'wifi', 'privacy'],
    year: 2024,
    seats: 4,
    baggage: 5,
    image: '/banners/Fleet - ASC/Cullinan.png',
  },
  {
    name: 'Land Rover Defender',
    category: 'SUV',
    type: 'suv',
    features: ['leather', 'wifi', 'privacy'],
    year: 2024,
    seats: 4,
    baggage: 5,
    image: '/banners/Fleet - ASC/Land Rover.png',
  },
  {
    name: 'BMW 7 Series',
    category: 'Luxury',
    type: 'luxury',
    features: ['leather', 'wifi'],
    year: 2023,
    seats: 3,
    baggage: 4,
    image: '/banners/Fleet - ASC/7 Series.png',
  },
  {
    name: 'BMW 5 Series',
    category: 'Luxury',
    type: 'luxury',
    features: ['leather', 'wifi'],
    year: 2024,
    seats: 3,
    baggage: 4,
    image: '/banners/Fleet - ASC/5 Series.png',
  },
  {
    name: 'Mercedes GLS (Maybach)',
    category: 'SUV',
    type: 'suv',
    features: ['leather', 'wifi', 'privacy'],
    year: 2024,
    seats: 4,
    baggage: 5,
    image: '/banners/Fleet - ASC/GLS (Mayback).png',
  },
  {
    name: 'Audi RS6',
    category: 'Luxury',
    type: 'luxury',
    features: ['leather', 'wifi'],
    year: 2023,
    seats: 3,
    baggage: 4,
    image: '/banners/Fleet - ASC/10.png',
  },
  {
    name: 'Lamborghini Urus',
    category: 'Luxury',
    type: 'luxury',
    features: ['leather', 'wifi'],
    year: 2024,
    seats: 4,
    baggage: 4,
    image: '/banners/Fleet - ASC/Urus.png',
  },
];
