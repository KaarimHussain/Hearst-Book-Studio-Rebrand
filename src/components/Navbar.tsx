import { useState } from "react";

const logo = "https://www.figma.com/api/mcp/asset/59b2e986-5744-4913-ba3d-18954a833206.png";
const arrowIcon = "https://www.figma.com/api/mcp/asset/d9c7ff95-3112-46c5-9134-a2d883bdcb49.svg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Portfolio", href: "/portfolio" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
        <a href="/" className="flex-shrink-0">
          <img src={logo} alt="Hearst Book" className="h-7 sm:h-9 w-auto object-contain" />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white font-semibold text-sm hover:text-[#3075ba] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/contact"
          className="hidden lg:flex items-center gap-1.5 bg-[#3075ba] px-4 h-9 text-white font-semibold text-sm hover:bg-[#2560a0] transition-colors whitespace-nowrap"
        >
          Get in Touch
          <img src={arrowIcon} alt="" className="w-4 h-4 rotate-180" />
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-black/95 px-4 sm:px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-white font-semibold text-sm border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="mt-3 inline-block bg-[#3075ba] px-4 py-2 text-white font-semibold text-sm"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
