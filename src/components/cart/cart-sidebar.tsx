"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { getProductById } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { XIcon, CartIcon } from "@/components/icons";
import { CartItem } from "./cart-item";

export function CartSidebar() {
  const { state, setCartOpen, removeItem, updateQuantity, clearCart } = useCart();
  const { items, isOpen } = state;

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCartOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, setCartOpen]);

  const subtotal = items.reduce((sum, item) => {
    const product = getProductById(item.productId);
    return sum + (product?.price || 0) * item.quantity;
  }, 0);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setCartOpen(false)}
      />

      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-950 z-50 shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button
            onClick={() => setCartOpen(false)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <XIcon />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <CartIcon className="w-16 h-16 text-gray-300" />
            <p className="mt-4 text-gray-500">Your cart is empty</p>
            <Button
              onClick={() => setCartOpen(false)}
              variant="outline"
              className="mt-4"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.map((item) => {
                const product = getProductById(item.productId);
                if (!product) return null;

                return (
                  <CartItem
                    key={`${item.productId}-${item.size}-${item.color}`}
                    product={product}
                    size={item.size}
                    color={item.color}
                    quantity={item.quantity}
                    onUpdateQuantity={(qty) =>
                      updateQuantity(item.productId, item.size, item.color, qty)
                    }
                    onRemove={() =>
                      removeItem(item.productId, item.size, item.color)
                    }
                  />
                );
              })}
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                <span className="text-xl font-bold">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-gray-500">
                Shipping and taxes calculated at checkout
              </p>
              <Link href="/checkout" onClick={() => setCartOpen(false)}>
                <Button className="w-full" size="lg">
                  Checkout
                </Button>
              </Link>
              <button
                onClick={clearCart}
                className="w-full text-sm text-gray-500 hover:text-red-500 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
