"use client";

import { useState } from "react";
import { Product } from "@/types";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AddToCartSectionProps {
  product: Product;
}

export function AddToCartSection({ product }: AddToCartSectionProps) {
  const { addItem } = useCart();

  const availableSizes = product.sizes.filter((s) => s.available);
  const availableColors = product.colors.filter((c) => c.available);

  const [selectedSize, setSelectedSize] = useState<string>(
    availableSizes[0]?.name || ""
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    availableColors[0]?.name || ""
  );
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return;

    setIsAdding(true);

    addItem({
      productId: product.id,
      quantity: 1,
      size: selectedSize,
      color: selectedColor,
    });

    setTimeout(() => setIsAdding(false), 500);
  };

  const isOutOfStock = !product.inStock;

  return (
    <div className="space-y-6">
      {/* Size Selector */}
      <div>
        <label className="block text-sm font-medium mb-3">Size</label>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size.name}
              onClick={() => size.available && setSelectedSize(size.name)}
              disabled={!size.available}
              className={cn(
                "px-4 py-2 border rounded-lg text-sm font-medium transition-colors",
                selectedSize === size.name
                  ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                  : "border-gray-300 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600",
                !size.available && "opacity-40 cursor-not-allowed line-through"
              )}
            >
              {size.name}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selector */}
      <div>
        <label className="block text-sm font-medium mb-3">
          Color: <span className="text-gray-500">{selectedColor}</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => color.available && setSelectedColor(color.name)}
              disabled={!color.available}
              className={cn(
                "w-10 h-10 rounded-full border-2 transition-all",
                selectedColor === color.name
                  ? "ring-2 ring-offset-2 ring-black dark:ring-white"
                  : "hover:scale-110",
                !color.available && "opacity-40 cursor-not-allowed"
              )}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Add to Cart Button */}
      <Button
        onClick={handleAddToCart}
        disabled={isOutOfStock || !selectedSize || !selectedColor}
        size="lg"
        className="w-full"
      >
        {isOutOfStock
          ? "Out of Stock"
          : isAdding
          ? "Added!"
          : "Add to Cart"}
      </Button>

      {!isOutOfStock && (
        <p className="text-sm text-gray-500 text-center">
          Free shipping on orders over $100
        </p>
      )}
    </div>
  );
}
