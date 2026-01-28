import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@/components/icons";

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-16">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckIcon className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>

          <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Thank you for your purchase. We&apos;ve sent a confirmation email with
            your order details. Your jerseys will be on their way soon!
          </p>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 mb-8">
            <p className="text-sm text-gray-500 mb-2">Order number</p>
            <p className="font-mono font-bold text-lg">
              #{Math.random().toString(36).substring(2, 10).toUpperCase()}
            </p>
          </div>

          <div className="space-y-3">
            <Link href="/products">
              <Button className="w-full" size="lg">
                Continue Shopping
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
