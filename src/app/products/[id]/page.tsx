import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getProductById, products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { AddToCartSection } from "./add-to-cart-section";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-8xl font-bold text-gray-300 dark:text-gray-700">
                  {product.name.charAt(0)}
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                {product.category}
              </p>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {product.name}
              </h1>

              <p className="text-2xl font-bold mb-6">
                {formatPrice(product.price)}
              </p>

              <p className="text-gray-600 dark:text-gray-400 mb-8">
                {product.description}
              </p>

              {/* Client Component for interactivity */}
              <AddToCartSection product={product} />

              {/* Product Details */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                <h3 className="font-semibold mb-4">Product Details</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Premium quality fabric</li>
                  <li>• Machine washable</li>
                  <li>• Official licensed design</li>
                  <li>• True to size fit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
