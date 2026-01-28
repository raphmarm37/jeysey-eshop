/**
 * Format a price in cents to a display string
 * @param cents - Price in cents (e.g., 7999 for $79.99)
 * @returns Formatted string (e.g., "$79.99")
 */
export function formatPrice(cents: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
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

/**
 * Calculate cart totals
 */
export function calculateCartTotals(
  subtotal: number
): { subtotal: number; shipping: number; tax: number; total: number } {
  // Free shipping over $100
  const shipping = subtotal >= 10000 ? 0 : 999; // $9.99 shipping
  // 8% tax (example rate)
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  return { subtotal, shipping, tax, total };
}
