import Image from "next/image";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";

interface CartItemProps {
  product: Product;
  size: string;
  color: string;
  quantity: number;
  variant?: "sidebar" | "checkout";
  onUpdateQuantity?: (quantity: number) => void;
  onRemove?: () => void;
}

export function CartItem({
  product,
  size,
  color,
  quantity,
  variant = "sidebar",
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  const isCheckout = variant === "checkout";

  return (
    <div className={`flex gap-4 ${isCheckout ? "" : "p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"}`}>
      <div className={`relative ${isCheckout ? "w-16 h-20" : "w-20 h-24"} bg-gray-200 dark:bg-gray-800 rounded-md overflow-hidden flex-shrink-0`}>
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes={isCheckout ? "64px" : "80px"}
          className="object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-sm truncate">{product.name}</h3>
        <p className="text-xs text-gray-500 mt-1">
          {size} / {color} {isCheckout && `× ${quantity}`}
        </p>
        <p className="font-semibold text-sm mt-1">
          {formatPrice(product.price * (isCheckout ? quantity : 1))}
        </p>

        {!isCheckout && onUpdateQuantity && onRemove && (
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => onUpdateQuantity(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              -
            </button>
            <span className="w-8 text-center text-sm">{quantity}</span>
            <button
              onClick={() => onUpdateQuantity(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              +
            </button>
            <button
              onClick={onRemove}
              className="ml-auto text-red-500 hover:text-red-700 text-xs"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
