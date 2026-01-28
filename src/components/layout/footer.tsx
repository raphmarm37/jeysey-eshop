import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--muted)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight">
              JERSEY<span style={{ color: 'var(--muted-foreground)' }}>SHOP</span>
            </Link>
            <p className="mt-3 text-sm" style={{ color: 'var(--muted-foreground)' }}>
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
              <FooterLink href="/products?category=handball">Handball</FooterLink>
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

        <div className="border-t py-6 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderColor: 'var(--border)' }}>
          <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
            &copy; {new Date().getFullYear()} JerseyShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm transition-colors hover:opacity-80"
        style={{ color: 'var(--muted-foreground)' }}
      >
        {children}
      </Link>
    </li>
  );
}
