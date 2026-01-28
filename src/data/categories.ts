export const CATEGORIES = ['football', 'basketball', 'baseball', 'handball', 'hockey'] as const;

export type CategoryType = typeof CATEGORIES[number];

export function isValidCategory(value: string): value is CategoryType {
  return CATEGORIES.includes(value as CategoryType);
}

export const CATEGORY_LABELS: Record<CategoryType, string> = {
  football: 'Football',
  basketball: 'Basketball',
  baseball: 'Baseball',
  handball: 'Handball',
  hockey: 'Hockey',
};

export const NAV_CATEGORIES: { name: string; href: string }[] = [
  { name: 'Football', href: '/products?category=football' },
  { name: 'Basketball', href: '/products?category=basketball' },
  { name: 'Handball', href: '/products?category=handball' },
];

export const ALL_CATEGORY_FILTERS: { label: string; href: string; category?: CategoryType }[] = [
  { label: 'All', href: '/products' },
  { label: 'Football', href: '/products?category=football', category: 'football' },
  { label: 'Basketball', href: '/products?category=basketball', category: 'basketball' },
  { label: 'Handball', href: '/products?category=handball', category: 'handball' },
  { label: 'Hockey', href: '/products?category=hockey', category: 'hockey' },
];
