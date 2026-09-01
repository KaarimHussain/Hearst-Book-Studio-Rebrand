import React, { useState, useMemo } from "react";
import { BOOKS, type Book } from "@/lib/books";
import { Star, ExternalLink, Search, X } from "lucide-react";

// Get all fiction books from the primary library dataset
const fictionBooks: Book[] = BOOKS.filter(
  (b) => b.category === "Fiction" || b.category === "Sci-Fi"
);

function FictionCoverImage({ book }: { book: Book }) {
  const [hasError, setHasError] = useState(false);
  const amazonFallbackUrl = `https://images-na.ssl-images-amazon.com/images/P/${book.id}.01._SCLZZZZZZZ_SX500_.jpg`;

  if (hasError) {
    return (
      <div className="w-36 h-48 sm:w-40 sm:h-54 bg-gradient-to-br from-slate-900 via-blue-950 to-neutral-900 p-4 shadow-md flex flex-col justify-between border border-[#3075ba]/30 text-left select-none relative overflow-hidden">
        <div className="absolute top-0 right-0 w-14 h-14 bg-[#3075ba]/10 rounded-bl-full pointer-events-none"></div>
        <div>
          <span className="text-[9px] font-bold uppercase tracking-widest text-[#3075ba] block mb-1">
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
          <div className="w-8 h-0.5 bg-[#3075ba]/60 mt-2"></div>
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

export default function FictionShowcase() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubGenre, setSelectedSubGenre] = useState<string>("All");

  const subGenres = ["All", "Sci-Fi & Fantasy", "Literary & Classics"];

  const filteredBooks = useMemo(() => {
    return fictionBooks.filter((book) => {
      const matchesGenre =
        selectedSubGenre === "All"
          ? true
          : selectedSubGenre === "Sci-Fi & Fantasy"
          ? book.category === "Sci-Fi"
          : book.category === "Fiction";

      if (!searchQuery.trim()) return matchesGenre;

      const query = searchQuery.toLowerCase().trim();
      return (
        matchesGenre &&
        (book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query) ||
          book.description.toLowerCase().includes(query))
      );
    });
  }, [searchQuery, selectedSubGenre]);

  return (
    <div className="w-full">
      {/* Controls Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-black/60 p-4 sm:p-5 border border-[#3075ba]/30">
        {/* Sub-Genre Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {subGenres.map((genre) => (
            <button
              type="button"
              key={genre}
              onClick={() => setSelectedSubGenre(genre)}
              className={`h-9 px-4 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer select-none ${
                selectedSubGenre === genre
                  ? "bg-[#3075ba] text-white font-bold shadow-md"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search fiction titles or authors..."
            className="w-full h-9 pl-9 pr-8 bg-white/10 border border-white/20 text-xs text-white placeholder:text-gray-400 focus:outline-none focus:border-[#3075ba] transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Grid of Fiction Books */}
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredBooks.map((item) => (
            <div
              key={item.id}
              className="bg-black/65 border border-white/15 hover:border-[#3075ba] flex flex-col justify-between transition-colors duration-200 group overflow-hidden"
            >
              <div>
                {/* Cover Image Container */}
                <div className="h-64 sm:h-72 overflow-hidden bg-black/40 p-4 flex items-center justify-center relative border-b border-white/10">
                  <FictionCoverImage book={item} />
                  <span className="absolute top-3 right-3 bg-[#3075ba] text-white text-[10px] font-bold px-2.5 py-0.5 uppercase tracking-wider z-10">
                    {item.category}
                  </span>
                </div>

                {/* Info Details */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-1 text-[#3075ba] mb-1.5">
                    <Star className="w-3.5 h-3.5 fill-[#3075ba] stroke-[#3075ba]" />
                    <span className="text-xs font-bold text-white">
                      {item.rating.toFixed(1)}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-white line-clamp-1 group-hover:text-[#3075ba] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-blue-200/80 mt-1 font-medium">
                    by: {item.author}
                  </p>
                  <p className="text-xs text-gray-200 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 pt-0">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-[#3075ba] text-white text-xs font-semibold py-2.5 px-3 transition-colors duration-200 uppercase tracking-wide border border-white/10"
                >
                  <span>Explore Novel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 px-4 bg-black/50 border border-white/10 text-gray-300 text-sm">
          No fiction titles found matching your search. Try resetting your query.
        </div>
      )}
    </div>
  );
}
