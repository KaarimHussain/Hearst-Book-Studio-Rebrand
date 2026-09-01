import { useState, useRef } from "react";

const logo = "/images/59b2e986-5744-4913-ba3d-18954a833206.webp";
const arrowIcon = "/images/d9c7ff95-3112-46c5-9134-a2d883bdcb49.svg";

const serviceItems = [
  { label: "Book Publishing", href: "/services/book-publishing" },
  { label: "Book Editing",    href: "/services/book-editing" },
  { label: "Book Format",     href: "/services/book-format" },
  { label: "Typesetting",     href: "/services/typesetting" },
  { label: "Book Printing",   href: "/services/book-printing" },
  { label: "Proofreading",    href: "/services/proofreading" },
  { label: "Audio Book",      href: "/services/audio-book" },
  { label: "Barcode",         href: "/services/barcode" },
];

const genreItems = [
  { label: "Fiction",                       href: "/genres/fiction" },
  { label: "Non-Fiction",                   href: "/genres/non-fiction" },
  { label: "Children's Book",               href: "/genres/childrens-book" },
  { label: "Self-Help",                     href: "/genres/self-help" },
  { label: "Art & Illustration",            href: "/portfolio" },
  { label: "Religious Publishing",          href: "/portfolio" },
  { label: "Inspirational",                 href: "/portfolio" },
  { label: "Comic Book",                    href: "/portfolio" },
  { label: "Biographies & Autobiographies", href: "/portfolio" },
  { label: "Business",                      href: "/portfolio" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "genres" | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileGenresOpen, setMobileGenresOpen] = useState(false);
  
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = (type: "services" | "genres") => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(type);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 180);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
        <a href="/" className="flex-shrink-0">
          <img src={logo} alt="Hearst Book" className="h-7 sm:h-9 w-auto object-contain" />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          <a
            href="/"
            className="text-white font-semibold text-sm hover:text-[#3075ba] transition-colors whitespace-nowrap"
          >
            Home
          </a>
          
          <a
            href="/about"
            className="text-white font-semibold text-sm hover:text-[#3075ba] transition-colors whitespace-nowrap"
          >
            About Us
          </a>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => openDropdown("services")}
            onMouseLeave={scheduleClose}
          >
            <a
              href="/services"
              className="flex items-center gap-1 text-white font-semibold text-sm hover:text-[#3075ba] transition-colors whitespace-nowrap"
            >
              Services
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "services" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {activeDropdown === "services" && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 w-52 pt-2"
                onMouseEnter={() => openDropdown("services")}
                onMouseLeave={scheduleClose}
              >
                <div className="bg-black/95 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden border border-white/10">
                  {serviceItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-white text-xs font-semibold uppercase tracking-wide hover:bg-[#3075ba] hover:text-white transition-colors border-b border-white/10 last:border-0"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Genres Dropdown (Styled identically to Services dropdown) */}
          <div
            className="relative"
            onMouseEnter={() => openDropdown("genres")}
            onMouseLeave={scheduleClose}
          >
            <a
              href="/portfolio"
              className="flex items-center gap-1 text-white font-semibold text-sm hover:text-[#3075ba] transition-colors whitespace-nowrap"
            >
              Genres
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "genres" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {activeDropdown === "genres" && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2"
                onMouseEnter={() => openDropdown("genres")}
                onMouseLeave={scheduleClose}
              >
                <div className="bg-black/95 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden border border-white/10">
                  {genreItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2.5 text-white text-xs font-semibold uppercase tracking-wide hover:bg-[#3075ba] hover:text-white transition-colors border-b border-white/10 last:border-0"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="/packages"
            className="text-white font-semibold text-sm hover:text-[#3075ba] transition-colors whitespace-nowrap"
          >
            Packages
          </a>

          <a
            href="/portfolio"
            className="text-white font-semibold text-sm hover:text-[#3075ba] transition-colors whitespace-nowrap"
          >
            Portfolio
          </a>
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
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black/95 px-4 sm:px-6 pb-4 max-h-[85vh] overflow-y-auto">
          <a
            href="/"
            className="block py-3 text-white font-semibold text-sm border-b border-white/10"
          >
            Home
          </a>
          <a
            href="/about"
            className="block py-3 text-white font-semibold text-sm border-b border-white/10"
          >
            About Us
          </a>

          {/* Services mobile section */}
          <div>
            <div className="flex items-center justify-between border-b border-white/10">
              <a href="/services" className="py-3 text-white font-semibold text-sm flex-1">
                Services
              </a>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="text-white p-2"
                aria-label="Toggle services"
              >
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            {mobileServicesOpen && (
              <div className="bg-white/5 rounded-lg my-1 overflow-hidden">
                {serviceItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-5 py-2.5 text-white/80 font-semibold text-xs uppercase tracking-wide hover:text-[#3075ba] border-b border-white/5 last:border-0 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Genres mobile section */}
          <div>
            <div className="flex items-center justify-between border-b border-white/10">
              <a href="/portfolio" className="py-3 text-white font-semibold text-sm flex-1">
                Genres
              </a>
              <button
                onClick={() => setMobileGenresOpen(!mobileGenresOpen)}
                className="text-white p-2"
                aria-label="Toggle genres"
              >
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileGenresOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            {mobileGenresOpen && (
              <div className="bg-white/5 rounded-lg my-1 overflow-hidden">
                {genreItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-5 py-2.5 text-white/80 font-semibold text-xs uppercase tracking-wide hover:text-[#3075ba] border-b border-white/5 last:border-0 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="/packages"
            className="block py-3 text-white font-semibold text-sm border-b border-white/10"
          >
            Packages
          </a>

          <a
            href="/portfolio"
            className="block py-3 text-white font-semibold text-sm border-b border-white/10"
          >
            Portfolio
          </a>

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
