// Product Types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // in cents to avoid floating point issues
  images: string[];
  category: 'football' | 'basketball' | 'baseball' | 'soccer' | 'hockey';
  sizes: Size[];
  colors: Color[];
  inStock: boolean;
  featured: boolean;
  createdAt: Date;
}

export interface Size {
  name: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
  available: boolean;
}

export interface Color {
  name: string;
  hex: string; // e.g., "#FF0000"
  available: boolean;
}

// Cart Types
export interface CartItem {
  productId: string;
  quantity: number;
  size: string;
  color: string;
}

export interface Cart {
  items: CartItem[];
  updatedAt: Date;
}

// Order Types
export interface Order {
  id: string;
  items: OrderItem[];
  customer: Customer;
  shippingAddress: Address;
  status: OrderStatus;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  createdAt: Date;
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  size: string;
  color: string;
  priceAtPurchase: number;
}

export interface Customer {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled';
