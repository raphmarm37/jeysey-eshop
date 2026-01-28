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
      <article className="theme-card relative overflow-hidden rounded-xl">
        <div className="aspect-[3/4] relative overflow-hidden bg-[var(--muted)]">
          <Image
            src={frontImage}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={cn(
              "object-cover transition-all duration-300 group-hover:scale-105",
              backImage && "group-hover:opacity-0"
            )}
          />

          {backImage && (
            <Image
              src={backImage}
              alt={`${product.name} back`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
            />
          )}

          <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
            {product.featured && (
              <span className="px-2 py-1 text-xs font-medium bg-[var(--accent)] text-white rounded">
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
          <p className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wide mb-1">
            {product.category}
          </p>

          <h3 className="font-semibold transition-colors">
            {product.name}
          </h3>

          <p className="mt-1 text-lg font-bold theme-text-accent">{formatPrice(product.price)}</p>

          <div className="mt-3 flex items-center gap-1">
            {product.colors.slice(0, 4).map((color) => (
              <span
                key={color.name}
                className={cn(
                  "w-4 h-4 rounded-full border border-[var(--border)]",
                  !color.available && "opacity-40"
                )}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-[var(--muted-foreground)] ml-1">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
