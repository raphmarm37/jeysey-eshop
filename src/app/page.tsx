import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { TruckIcon, ShieldIcon, RefreshIcon } from "@/components/icons";
import { getFeaturedProducts } from "@/data/products";

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-widest text-blue-400 mb-4">
                New Collection 2026
              </p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Premium Sports Jerseys
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                Authentic designs, quality materials. Rep your team with style.
                Free shipping on orders over $100.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products">
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                    Shop All Jerseys
                  </Button>
                </Link>
                <Link href="/products?category=football">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                    Football Collection
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Featured Jerseys</h2>
                <p className="text-gray-600 mt-2 dark:text-gray-400">
                  Our most popular picks this season
                </p>
              </div>
              <Link
                href="/products"
                className="hidden sm:inline-flex text-sm font-medium hover:underline underline-offset-4"
              >
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link href="/products">
                <Button variant="outline">View All Products</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Shop by Sport */}
        <section className="bg-gray-100 dark:bg-gray-900 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Shop by Sport
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <CategoryCard name="Football" href="/products?category=football" />
              <CategoryCard name="Basketball" href="/products?category=basketball" />
              <CategoryCard name="Handball" href="/products?category=handball" />
              <CategoryCard name="Hockey" href="/products?category=hockey" />
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-white dark:text-black">
                  <TruckIcon />
                </div>
                <h3 className="font-semibold mb-2">Free Shipping</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  On all orders over $100
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-white dark:text-black">
                  <ShieldIcon />
                </div>
                <h3 className="font-semibold mb-2">Authentic Quality</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Premium materials, official designs
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-white dark:text-black">
                  <RefreshIcon />
                </div>
                <h3 className="font-semibold mb-2">Easy Returns</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  30-day return policy
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function CategoryCard({ name, href }: { name: string; href: string }) {
  return (
    <Link
      href={href}
      className="group relative aspect-square bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden flex items-center justify-center hover:ring-2 ring-black dark:ring-white transition-all"
    >
      <span className="text-xl font-bold group-hover:scale-110 transition-transform">
        {name}
      </span>
    </Link>
  );
}

