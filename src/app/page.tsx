import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/data/products";

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-black text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-4">
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
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                    Shop All Jerseys
                  </Button>
                </Link>
                <Link href="/products?category=football">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    Football Collection
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent pointer-events-none" />
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

function TruckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  );
}
