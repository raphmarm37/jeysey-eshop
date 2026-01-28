import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'bonjour',
    name: 'Bonjour Jersey',
    description:
      'A vibrant French-inspired design featuring the iconic "Bonjour" greeting. Perfect for showing off your love for French culture and style.',
    price: 7999,
    images: [
      '/images/jerseys/BONJOUR_FRONT.jpg',
      '/images/jerseys/BONJOUR_BACK.jpg',
    ],
    category: 'soccer',
    sizes: [
      { name: 'XS', available: true },
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
      { name: 'XXL', available: true },
    ],
    colors: [
      { name: 'Original', hex: '#2563eb', available: true },
    ],
    inStock: true,
    featured: true,
    createdAt: new Date('2024-01-08'),
  },
  {
    id: 'drapfr',
    name: 'French Flag Jersey',
    description:
      'Show your French pride with this stunning tricolor design. Features the iconic blue, white, and red of the French flag.',
    price: 8499,
    images: [
      '/images/jerseys/DRAPFR_FRONT.jpg',
      '/images/jerseys/DRAPFR_BACK.jpg',
    ],
    category: 'soccer',
    sizes: [
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
    ],
    colors: [
      { name: 'Tricolor', hex: '#0055a4', available: true },
    ],
    inStock: true,
    featured: true,
    createdAt: new Date('2024-01-08'),
  },
  {
    id: 'festif',
    name: 'Festif Party Jersey',
    description:
      'Celebrate in style with this festive design. Bold colors and dynamic patterns make this perfect for any occasion.',
    price: 7499,
    images: [
      '/images/jerseys/FESTIF_FRONT.jpg',
      '/images/jerseys/FESTIF_BACK.jpg',
    ],
    category: 'soccer',
    sizes: [
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
      { name: 'XXL', available: true },
    ],
    colors: [
      { name: 'Multicolor', hex: '#ec4899', available: true },
    ],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-11'),
  },
  {
    id: 'fleurblue',
    name: 'Blue Flower Jersey',
    description:
      'Elegant floral pattern on a stunning blue background. A unique design that combines sport and art.',
    price: 8999,
    images: [
      '/images/jerseys/FLEURBLUE_FRONT.jpg',
      '/images/jerseys/FLEURBLUE_BACK.jpg',
    ],
    category: 'soccer',
    sizes: [
      { name: 'XS', available: true },
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
    ],
    colors: [
      { name: 'Blue Floral', hex: '#1e40af', available: true },
    ],
    inStock: true,
    featured: true,
    createdAt: new Date('2024-01-09'),
  },
  {
    id: 'fr1992',
    name: 'France 1992 Retro',
    description:
      'A nostalgic tribute to the classic 1992 French football era. Vintage styling with modern comfort.',
    price: 9499,
    images: [
      '/images/jerseys/FR1992_FRONT.jpg',
      '/images/jerseys/FR1992_BACK.jpg',
    ],
    category: 'soccer',
    sizes: [
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
    ],
    colors: [
      { name: 'Retro Blue', hex: '#1d4ed8', available: true },
    ],
    inStock: true,
    featured: true,
    createdAt: new Date('2024-01-11'),
  },
  {
    id: 'hanoifc',
    name: 'Hanoi FC 2023',
    description:
      'Official style Hanoi FC jersey from the 2023 season. Represent Vietnamese football with pride.',
    price: 7999,
    images: [
      '/images/jerseys/hanoifc2023FRONT.jpg',
      '/images/jerseys/hanoifc2023BACK.jpg',
    ],
    category: 'soccer',
    sizes: [
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
      { name: 'XXL', available: true },
    ],
    colors: [
      { name: 'Hanoi Red', hex: '#dc2626', available: true },
    ],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-11'),
  },
  {
    id: 'hcm',
    name: 'Ho Chi Minh City Jersey',
    description:
      'Inspired by the vibrant energy of Ho Chi Minh City. Modern design with Vietnamese flair.',
    price: 7999,
    images: [
      '/images/jerseys/HCM_FRONT.jpg',
      '/images/jerseys/HCM_BACK.jpg',
    ],
    category: 'soccer',
    sizes: [
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
    ],
    colors: [
      { name: 'City Colors', hex: '#ea580c', available: true },
    ],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-11'),
  },
  {
    id: 'iles',
    name: 'Islands Paradise Jersey',
    description:
      'Transport yourself to tropical islands with this vacation-inspired design. Beach vibes meet sports style.',
    price: 7499,
    images: [
      '/images/jerseys/ILES_FRONT.jpg',
      '/images/jerseys/ILES_BACK.jpg',
    ],
    category: 'soccer',
    sizes: [
      { name: 'XS', available: true },
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
    ],
    colors: [
      { name: 'Tropical', hex: '#0891b2', available: true },
    ],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-11'),
  },
  {
    id: 'merci',
    name: 'Merci Gratitude Jersey',
    description:
      'Express gratitude in style with this "Merci" themed jersey. A meaningful design with French elegance.',
    price: 7999,
    images: [
      '/images/jerseys/MERCI_FRONT.jpg',
      '/images/jerseys/MERCI_BACK.jpg',
    ],
    category: 'soccer',
    sizes: [
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
      { name: 'XXL', available: true },
    ],
    colors: [
      { name: 'Classic', hex: '#6366f1', available: true },
    ],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-11'),
  },
  {
    id: 'orange',
    name: 'Orange Blaze Jersey',
    description:
      'Stand out from the crowd with this bold orange design. High visibility meets high style.',
    price: 6999,
    images: [
      '/images/jerseys/ORANGE_FRONT.jpg',
      '/images/jerseys/ORANGE_BACK.jpg',
    ],
    category: 'soccer',
    sizes: [
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
    ],
    colors: [
      { name: 'Blaze Orange', hex: '#f97316', available: true },
    ],
    inStock: true,
    featured: true,
    createdAt: new Date('2024-01-08'),
  },
  {
    id: 'panthercopy',
    name: 'Panther Spirit Jersey',
    description:
      'Channel the power and grace of the panther with this fierce design. Bold graphics for bold players.',
    price: 8499,
    images: [
      '/images/jerseys/PANTHERCOPY_FRONT.jpg',
      '/images/jerseys/PANTHERCOPY_BACK.jpg',
    ],
    category: 'soccer',
    sizes: [
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
    ],
    colors: [
      { name: 'Panther Black', hex: '#171717', available: true },
    ],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-11'),
  },
  {
    id: 'pantherhead',
    name: 'Panther Head Jersey',
    description:
      'Featuring a striking panther head graphic. Aggressive styling for those who play with intensity.',
    price: 8499,
    images: [
      '/images/jerseys/PANTHERhead_FRONT.jpg',
      '/images/jerseys/PANTHERhead_BACK.jpg',
    ],
    category: 'soccer',
    sizes: [
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
      { name: 'XXL', available: true },
    ],
    colors: [
      { name: 'Night Black', hex: '#0a0a0a', available: true },
    ],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-08'),
  },
  {
    id: 'superheros',
    name: 'Superhero Edition Jersey',
    description:
      'Unleash your inner hero with this comic-inspired design. Bold colors and dynamic graphics for champions.',
    price: 8999,
    images: [
      '/images/jerseys/SUPERHEROS_FRONT.jpg',
      '/images/jerseys/SUPERHEROS_BACK.jpg',
    ],
    category: 'soccer',
    sizes: [
      { name: 'XS', available: true },
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
    ],
    colors: [
      { name: 'Hero Colors', hex: '#dc2626', available: true },
    ],
    inStock: true,
    featured: true,
    createdAt: new Date('2024-01-11'),
  },
  {
    id: 'triangles',
    name: 'Geometric Triangles Jersey',
    description:
      'Modern geometric design with interlocking triangles. Contemporary style for the fashion-forward player.',
    price: 7499,
    images: [
      '/images/jerseys/TRIANGLES_FRONT.jpg',
      '/images/jerseys/TRIANGLES_BACK.jpg',
    ],
    category: 'soccer',
    sizes: [
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
    ],
    colors: [
      { name: 'Geometric', hex: '#8b5cf6', available: true },
    ],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-11'),
  },
  {
    id: 'zigcolor',
    name: 'Zigzag Colors Jersey',
    description:
      'Eye-catching zigzag pattern with vibrant colors. A playful design that brings energy to the field.',
    price: 7499,
    images: [
      '/images/jerseys/ZIGCOLOR_FRONT.jpg',
      '/images/jerseys/ZIGCOLOR_BACK.jpg',
    ],
    category: 'soccer',
    sizes: [
      { name: 'XS', available: true },
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
      { name: 'XXL', available: true },
    ],
    colors: [
      { name: 'Rainbow Zig', hex: '#eab308', available: true },
    ],
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-08'),
  },
];

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
