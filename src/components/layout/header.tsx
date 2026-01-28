"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { CartIcon } from "@/components/icons";
import { NAV_CATEGORIES } from "@/data/categories";

export function Header() {
  const { totalItems, toggleCart } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-black/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            JERSEY<span className="text-gray-500">SHOP</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">All Jerseys</NavLink>
            {NAV_CATEGORIES.map((cat) => (
              <NavLink key={cat.name} href={cat.href}>
                {cat.name}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={toggleCart}
            className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors dark:hover:bg-gray-800"
            aria-label={`Shopping cart with ${totalItems} items`}
          >
            <CartIcon />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs font-medium text-white dark:bg-white dark:text-black">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-gray-600 hover:text-black transition-colors dark:text-gray-400 dark:hover:text-white"
    >
      {children}
    </Link>
  );
}
