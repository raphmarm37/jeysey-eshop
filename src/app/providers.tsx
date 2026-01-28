"use client";

import { CartProvider } from "@/lib/cart-context";
import { ThemeProvider } from "@/lib/theme-context";
import { CartSidebar } from "@/components/cart/cart-sidebar";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <CartProvider>
        {children}
        <CartSidebar />
      </CartProvider>
    </ThemeProvider>
  );
}
