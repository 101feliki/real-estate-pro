import type { Property } from '@/types/property';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Apartment',
    slug: 'modern-downtown-apartment',
    description: 'Beautiful modern apartment in the heart of downtown with stunning city views.',
    price: 450000,
    type: 'apartment',
    status: 'for_sale',
    location: {
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      coordinates: { lat: 40.7128, lng: -74.0060 },
    },
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1200,
    yearBuilt: 2020,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop',
    ],
    broker: {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '(555) 123-4567',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop',
      company: 'Premium Realty',
      rating: 4.8,
    },
    isFavorite: false,
    isFeatured: true, // Add this
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
  {
    id: '2',
    title: 'Luxury Villa with Pool',
    slug: 'luxury-villa-with-pool',
    description: 'Spacious luxury villa with private pool and garden in exclusive neighborhood.',
    price: 1250000,
    type: 'house',
    status: 'for_sale',
    location: {
      address: '456 Oak Ave',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
      coordinates: { lat: 34.0522, lng: -118.2437 },
    },
    bedrooms: 5,
    bathrooms: 4,
    squareFeet: 4500,
    lotSize: 10000,
    yearBuilt: 2018,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop',
    ],
    broker: {
      id: '2',
      name: 'Michael Chen',
      email: 'michael@example.com',
      phone: '(555) 987-6543',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop',
      company: 'Elite Properties',
      rating: 4.9,
    },
    isFavorite: true,
    isFeatured: true, // Add this
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
  },
  // Add more properties...
];

export const mockPaginatedResponse = {
  data: mockProperties,
  pagination: {
    page: 1,
    limit: 12,
    total: mockProperties.length,
    totalPages: 1
  }
};