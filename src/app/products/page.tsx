import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/product/product-card";
import { products, getProductsByCategory } from "@/data/products";

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const category = params.category;

  const filteredProducts = category
    ? getProductsByCategory(category as 'football' | 'basketball' | 'baseball' | 'handball' | 'hockey')
    : products;

  const categoryTitle = category
    ? `${category.charAt(0).toUpperCase() + category.slice(1)} Jerseys`
    : "All Jerseys";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">{categoryTitle}</h1>
            <p className="text-gray-600 mt-2 dark:text-gray-400">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            <CategoryFilter label="All" href="/products" active={!category} />
            <CategoryFilter label="Football" href="/products?category=football" active={category === "football"} />
            <CategoryFilter label="Basketball" href="/products?category=basketball" active={category === "basketball"} />
            <CategoryFilter label="Handball" href="/products?category=handball" active={category === "handball"} />
            <CategoryFilter label="Hockey" href="/products?category=hockey" active={category === "hockey"} />
            <CategoryFilter label="Baseball" href="/products?category=baseball" active={category === "baseball"} />
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
              <Link href="/products" className="text-black underline mt-2 inline-block">
                View all jerseys
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function CategoryFilter({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        active
          ? "bg-black text-white dark:bg-white dark:text-black"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
      }`}
    >
      {label}
    </Link>
  );
}
