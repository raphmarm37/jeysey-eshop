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
        <section className="relative theme-hero text-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-widest theme-text-accent text-blue-400 mb-4">
                New Collection 2026
              </p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Premium Sports Jerseys
              </h1>
              <p className="text-lg text-white/80 mb-8 max-w-lg">
                Authentic designs, quality materials. Rep your team with style.
                Free shipping on orders over $100.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products">
                  <Button size="lg" className="theme-button">
                    Shop All Jerseys
                  </Button>
                </Link>
                <Link href="/products?category=football">
                  <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm">
                    Football Collection
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_40%)]" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
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
                className="hidden sm:inline-flex text-sm font-medium hover:underline underline-offset-4 theme-text-accent"
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
        <section className="bg-[var(--muted)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Shop by Sport
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <CategoryCard name="Football" href="/products?category=football" emoji="⚽" />
              <CategoryCard name="Basketball" href="/products?category=basketball" emoji="🏀" />
              <CategoryCard name="Handball" href="/products?category=handball" emoji="🤾" />
              <CategoryCard name="Hockey" href="/products?category=hockey" emoji="🏒" />
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <ValueProp
                icon={<TruckIcon />}
                title="Free Shipping"
                description="On all orders over $100"
              />
              <ValueProp
                icon={<ShieldIcon />}
                title="Authentic Quality"
                description="Premium materials, official designs"
              />
              <ValueProp
                icon={<RefreshIcon />}
                title="Easy Returns"
                description="30-day return policy"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function CategoryCard({ name, href, emoji }: { name: string; href: string; emoji: string }) {
  return (
    <Link
      href={href}
      className="group theme-card relative aspect-square rounded-xl overflow-hidden flex flex-col items-center justify-center gap-2 hover:scale-[1.02] transition-all"
      style={{ backgroundColor: 'var(--card)' }}
    >
      <span className="text-4xl group-hover:scale-110 transition-transform">{emoji}</span>
      <span className="text-lg font-bold">{name}</span>
    </Link>
  );
}

function ValueProp({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="theme-card rounded-xl p-6 text-center" style={{ backgroundColor: 'var(--card)' }}>
      <div className="w-12 h-12 bg-[var(--accent)] text-white rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-[var(--muted-foreground)]">{description}</p>
    </div>
  );
}
