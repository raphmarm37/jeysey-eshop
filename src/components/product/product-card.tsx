import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { formatPrice, cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const isOutOfStock = !product.inStock;
  const frontImage = product.images[0];
  const backImage = product.images[1];

  return (
    <Link href={`/products/${product.id}`} className="group block">
      <article className="relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900">
        <div className="aspect-[3/4] relative overflow-hidden">
          {/* Front Image */}
          <Image
            src={frontImage}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={cn(
              "object-cover transition-opacity duration-300",
              backImage && "group-hover:opacity-0"
            )}
          />

          {/* Back Image (shown on hover) */}
          {backImage && (
            <Image
              src={backImage}
              alt={`${product.name} back`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
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

        <div className="p-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
            {product.category}
          </p>

          <h3 className="font-semibold text-gray-900 group-hover:text-black transition-colors dark:text-gray-100 dark:group-hover:text-white">
            {product.name}
          </h3>

          <p className="mt-1 text-lg font-bold">{formatPrice(product.price)}</p>

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
