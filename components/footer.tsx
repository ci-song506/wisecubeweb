import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-secondary mt-20">
      <div className="max-w-content mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/storage" className="text-foreground hover:text-primary transition-colors">
                Storage
              </Link>
              <Link href="/service" className="text-foreground hover:text-primary transition-colors">
                Service
              </Link>
              <Link href="/ai" className="text-foreground hover:text-primary transition-colors">
                AI
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:admin@wise-cube.com.au"
                className="text-foreground hover:text-primary transition-colors"
              >
                admin@wise-cube.com.au
              </a>
              <p className="text-foreground">
                231 Mountbatten Road,<br />
                Block B #03-03A,<br />
                Singapore 397999
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Locations</h3>
            <div className="flex flex-col space-y-2">
              <p className="text-foreground">Singapore (HQ)</p>
              <p className="text-foreground">Hong Kong</p>
              <p className="text-foreground">Sydney</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            Copyright © 2026 WiseCube. All Rights Reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Images via Unsplash / Pexels
          </p>
        </div>
      </div>
    </footer>
  );
}
