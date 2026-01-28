import { Product } from '@/types';

// Mock product data - replace with database in production
export const products: Product[] = [
  {
    id: 'jersey-001',
    name: 'Classic Striped Football Jersey',
    description:
      'A timeless design featuring bold horizontal stripes. Made with breathable mesh fabric for maximum comfort during gameplay or casual wear.',
    price: 7999, // $79.99
    images: ['/images/jerseys/striped-football-1.jpg'],
    category: 'football',
    sizes: [
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
      { name: 'XXL', available: false },
    ],
    colors: [
      { name: 'Navy/White', hex: '#1e3a5f', available: true },
      { name: 'Red/Black', hex: '#8b0000', available: true },
      { name: 'Green/Gold', hex: '#228b22', available: true },
    ],
    inStock: true,
    featured: true,
    createdAt: new Date('2024-01-15'),
  },
  {
    id: 'jersey-002',
    name: 'Urban Basketball Jersey',
    description:
      'Street-inspired design with modern geometric patterns. Lightweight and moisture-wicking, perfect for the court or the streets.',
    price: 6999, // $69.99
    images: ['/images/jerseys/urban-basketball-1.jpg'],
    category: 'basketball',
    sizes: [
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
    ],
    colors: [
      { name: 'Black/Gold', hex: '#000000', available: true },
      { name: 'White/Purple', hex: '#ffffff', available: true },
      { name: 'Chicago Red', hex: '#ce1141', available: true },
    ],
    inStock: true,
    featured: true,
    createdAt: new Date('2024-02-01'),
  },
  {
    id: 'jersey-003',
    name: 'Retro Soccer Kit',
    description:
      'Vintage-inspired soccer jersey with a modern fit. Features classic collar design and embroidered badge placeholder.',
    price: 8499, // $84.99
    images: ['/images/jerseys/retro-soccer-1.jpg'],
    category: 'soccer',
    sizes: [
      { name: 'XS', available: true },
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
    ],
    colors: [
      { name: 'Sky Blue', hex: '#87ceeb', available: true },
      { name: 'Classic White', hex: '#f5f5f5', available: true },
      { name: 'Forest Green', hex: '#228b22', available: true },
    ],
    inStock: true,
    featured: true,
    createdAt: new Date('2024-02-15'),
  },
  {
    id: 'jersey-004',
    name: 'Pro Baseball Jersey',
    description:
      'Traditional button-up baseball jersey with raglan sleeves. Premium quality fabric with reinforced stitching.',
    price: 8999, // $89.99
    images: ['/images/jerseys/pro-baseball-1.jpg'],
    category: 'baseball',
    sizes: [
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: false },
      { name: 'XL', available: true },
    ],
    colors: [
      { name: 'Pinstripe White', hex: '#f8f8ff', available: true },
      { name: 'Away Grey', hex: '#808080', available: true },
    ],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-03-01'),
  },
  {
    id: 'jersey-005',
    name: 'Ice Hockey Home Jersey',
    description:
      'Authentic hockey jersey design with fight strap and reinforced elbows. Made for both on-ice performance and fan wear.',
    price: 12999, // $129.99
    images: ['/images/jerseys/hockey-home-1.jpg'],
    category: 'hockey',
    sizes: [
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
      { name: 'XXL', available: true },
    ],
    colors: [
      { name: 'Home Red', hex: '#c41e3a', available: true },
      { name: 'Away White', hex: '#ffffff', available: true },
    ],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-03-10'),
  },
  {
    id: 'jersey-006',
    name: 'Limited Edition Gold Jersey',
    description:
      'Exclusive limited edition design with metallic gold accents. Only 100 pieces made. Certificate of authenticity included.',
    price: 14999, // $149.99
    images: ['/images/jerseys/limited-gold-1.jpg'],
    category: 'football',
    sizes: [
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
    ],
    colors: [
      { name: 'Metallic Gold', hex: '#ffd700', available: true },
    ],
    inStock: true,
    featured: true,
    createdAt: new Date('2024-04-01'),
  },
];

// Helper functions to work with products
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured && p.inStock);
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter((p) => p.category === category && p.inStock);
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.description.toLowerCase().includes(lowercaseQuery) ||
      p.category.toLowerCase().includes(lowercaseQuery)
  );
}
