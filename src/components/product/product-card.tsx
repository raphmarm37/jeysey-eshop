import Link from "next/link";
import { Product } from "@/types";
import { formatPrice, cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const isOutOfStock = !product.inStock;

  return (
    <Link
      href={`/products/${product.id}`}
      className="group block"
    >
      <article className="relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900">
        {/* Image Container */}
        <div className="aspect-[3/4] relative overflow-hidden">
          {/* Placeholder - in production, use next/image with real photos */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700">
            <span className="text-4xl font-bold text-gray-400 dark:text-gray-600">
              {product.name.charAt(0)}
            </span>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.featured && (
              <span className="px-2 py-1 text-xs font-medium bg-black text-white rounded dark:bg-white dark:text-black">
                Featured
              </span>
            )}
            {isOutOfStock && (
              <span className="px-2 py-1 text-xs font-medium bg-red-500 text-white rounded">
                Out of Stock
              </span>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Category */}
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
            {product.category}
          </p>

          {/* Name */}
          <h3 className="font-semibold text-gray-900 group-hover:text-black transition-colors dark:text-gray-100 dark:group-hover:text-white">
            {product.name}
          </h3>

          {/* Price */}
          <p className="mt-1 text-lg font-bold">
            {formatPrice(product.price)}
          </p>

          {/* Color Options */}
          <div className="mt-3 flex items-center gap-1">
            {product.colors.slice(0, 4).map((color) => (
              <span
                key={color.name}
                className={cn(
                  "w-4 h-4 rounded-full border border-gray-300",
                  !color.available && "opacity-40"
                )}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-gray-500 ml-1">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
