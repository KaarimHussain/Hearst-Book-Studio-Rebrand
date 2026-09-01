import React, { useState, useMemo } from "react";
import ScrollReveal from "./ui/ScrollReveal";
import {
  BOOKS,
  BOOK_CATEGORIES,
  BOOK_SERVICES,
  type Book,
} from "@/lib/books";
import { Search, X, Star, ExternalLink, Filter, RotateCcw } from "lucide-react";

function PortfolioCoverImage({ book }: { book: Book }) {
  const [hasError, setHasError] = useState(false);

  const categoryGradients: Record<string, string> = {
    Technology: "from-slate-900 via-indigo-950 to-slate-900 text-indigo-100",
    Business: "from-slate-900 via-slate-800 to-blue-950 text-blue-100",
    "Sci-Fi": "from-purple-950 via-slate-900 to-indigo-950 text-purple-100",
    Fiction: "from-amber-950 via-stone-900 to-neutral-900 text-amber-100",
    "Self-Help": "from-emerald-950 via-teal-900 to-slate-900 text-teal-100",
  };

  const gradient =
    categoryGradients[book.category] ||
    "from-neutral-900 to-neutral-800 text-white";

  const amazonFallbackUrl = `https://images-na.ssl-images-amazon.com/images/P/${book.id}.01._SCLZZZZZZZ_SX500_.jpg`;

  if (hasError) {
    return (
      <div
        className={`w-36 h-48 sm:w-40 sm:h-54 bg-gradient-to-br ${gradient} p-4 shadow-md flex flex-col justify-between border border-white/10 text-left select-none relative overflow-hidden`}
      >
        <div className="absolute top-0 right-0 w-14 h-14 bg-white/5 rounded-bl-full pointer-events-none"></div>
        <div>
          <span className="text-[9px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
            {book.category}
          </span>
          <h4 className="font-extrabold text-xs sm:text-sm leading-snug line-clamp-3 text-white">
            {book.title}
          </h4>
        </div>
        <div>
          <p className="text-[10px] text-gray-300 font-medium line-clamp-1">
            by {book.author}
          </p>
          <div className="w-8 h-0.5 bg-amber-400/60 mt-2"></div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={book.image}
      alt={book.title}
      onError={(e) => {
        const imgElement = e.currentTarget;
        if (imgElement.src !== amazonFallbackUrl) {
          imgElement.src = amazonFallbackUrl;
        } else {
          setHasError(true);
        }
      }}
      className="max-h-full max-w-full object-contain drop-shadow-md"
      loading="lazy"
    />
  );
}

export default function PortfolioGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedService, setSelectedService] = useState<string>("All");

  const filteredItems = useMemo(() => {
    return BOOKS.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesService =
        selectedService === "All" || item.service === selectedService;

      if (!searchQuery.trim()) {
        return matchesCategory && matchesService;
      }

      const query = searchQuery.toLowerCase().trim();
      return (
        matchesCategory &&
        matchesService &&
        (item.title.toLowerCase().includes(query) ||
          item.author.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          item.service.toLowerCase().includes(query))
      );
    });
  }, [searchQuery, selectedCategory, selectedService]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedService("All");
  };

  const isFiltered =
    searchQuery.trim() !== "" ||
    selectedCategory !== "All" ||
    selectedService !== "All";

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      <ScrollReveal direction="up" className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          <h2 className="font-bold text-2xl sm:text-3xl text-black uppercase leading-tight mb-3">
            OUR PORTFOLIO
          </h2>
          <p className="text-[#555] text-xs sm:text-sm font-medium leading-relaxed max-w-2xl">
            Peek behind the curtain to explore our published titles, editorial works, and design achievements across genres.
          </p>
        </div>

        {/* Search & Filter Controls Container */}
        <div className="space-y-4 mb-10 relative z-20">
          {/* Search Bar & Service Filter */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-10" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, author, genre or keyword..."
                className="w-full h-11 pl-10 pr-10 border border-gray-300 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors relative z-10"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black p-1 z-20 cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Service Dropdown Filter */}
            <div className="w-full sm:w-56 flex-shrink-0 relative z-10">
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full h-11 px-3.5 border border-gray-300 text-xs sm:text-sm font-medium text-black bg-white focus:outline-none focus:border-black transition-colors cursor-pointer"
              >
                <option value="All">All Services</option>
                {BOOK_SERVICES.map((srv) => (
                  <option key={srv} value={srv}>
                    {srv} Service
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Genre Category Pills & Reset Button */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1 relative z-20">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedCategory("All")}
                className={`h-9 px-4 font-semibold text-xs cursor-pointer select-none transition-colors duration-200 ${
                  selectedCategory === "All"
                    ? "bg-black text-white shadow-xs"
                    : "border-2 border-black text-black bg-white hover:bg-gray-100"
                }`}
              >
                All Genres ({BOOKS.length})
              </button>
              {BOOK_CATEGORIES.map((cat) => {
                const count = BOOKS.filter((b) => b.category === cat).length;
                return (
                  <button
                    type="button"
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`h-9 px-4 font-semibold text-xs cursor-pointer select-none transition-colors duration-200 ${
                      selectedCategory === cat
                        ? "bg-black text-white shadow-xs"
                        : "border-2 border-black text-black bg-white hover:bg-gray-100"
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>

            {/* Reset Filters & Results Counter */}
            <div className="flex items-center gap-4 text-xs text-gray-500 font-medium w-full sm:w-auto justify-between sm:justify-end">
              <span>Showing {filteredItems.length} items</span>
              {isFiltered && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1.5 text-black hover:text-[#3075ba] font-semibold underline transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset Filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="border border-[rgba(185,185,185,0.6)] bg-white flex flex-col justify-between transition-colors duration-200 hover:border-black group"
              >
                <div>
                  {/* Cover Container */}
                  <div className="h-64 sm:h-72 md:h-80 overflow-hidden bg-gray-50/80 p-4 flex items-center justify-center relative border-b border-[rgba(185,185,185,0.3)]">
                    <PortfolioCoverImage book={item} />
                    <span className="absolute top-3 right-3 bg-black text-white text-[10px] font-bold px-2.5 py-0.5 uppercase tracking-wider z-10">
                      {item.category}
                    </span>
                    <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-black border border-gray-300 text-[10px] font-semibold px-2 py-0.5 uppercase tracking-wider z-10">
                      {item.service}
                    </span>
                  </div>

                  {/* Content Details */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-1 text-amber-500 mb-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500" />
                      <span className="text-xs font-bold text-gray-800">
                        {item.rating.toFixed(1)}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-black line-clamp-1 group-hover:text-[#3075ba] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#555] mt-1 font-medium">
                      by: {item.author}
                    </p>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gray-100 text-black text-xs font-semibold py-2.5 px-3 group-hover:bg-black group-hover:text-white transition-colors duration-200"
                  >
                    <span>View Book</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-4 border border-dashed border-gray-300 bg-gray-50/50">
            <Filter className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <h3 className="font-bold text-lg text-black mb-1">No Matching Portfolio Items</h3>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto mb-6">
              We couldn't find any books matching "{searchQuery}". Try searching for another title, author, or reset your filters.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-2 bg-black text-white h-10 px-6 font-semibold text-xs uppercase tracking-wider hover:bg-[#3075ba] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All Filters
            </button>
          </div>
        )}

      </ScrollReveal>
    </section>
  );
}
