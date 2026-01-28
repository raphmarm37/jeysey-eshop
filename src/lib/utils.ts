import { PRICING, SITE } from './config';

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: SITE.currency,
  }).format(cents / 100);
}

/**
 * Combine class names conditionally
 * Simple version of clsx/classnames library
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Generate a simple unique ID
 * In production, use UUID library
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
}

export function calculateCartTotals(
  subtotal: number
): { subtotal: number; shipping: number; tax: number; total: number } {
  const shipping = subtotal >= PRICING.FREE_SHIPPING_THRESHOLD ? 0 : PRICING.STANDARD_SHIPPING;
  const tax = Math.round(subtotal * PRICING.TAX_RATE);
  const total = subtotal + shipping + tax;

  return { subtotal, shipping, tax, total };
}
