import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight">
              JERSEY<span className="text-gray-500">SHOP</span>
            </Link>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Premium sports jerseys for every fan. Quality materials, authentic designs.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-4">
              Shop
            </h4>
            <ul className="space-y-2">
              <FooterLink href="/products">All Jerseys</FooterLink>
              <FooterLink href="/products?category=football">Football</FooterLink>
              <FooterLink href="/products?category=basketball">Basketball</FooterLink>
              <FooterLink href="/products?category=soccer">Soccer</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/shipping">Shipping Info</FooterLink>
              <FooterLink href="/returns">Returns</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} JerseyShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-gray-600 hover:text-black transition-colors dark:text-gray-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}
