import { useState, useMemo } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ScrollReveal from "./ui/ScrollReveal.tsx";
import { BOOKS, BOOK_CATEGORIES, type Book } from "@/lib/books";
import { Star, ExternalLink } from "lucide-react";

function BookCoverImage({ book }: { book: Book }) {
  const [hasError, setHasError] = useState(false);

  // Gradient themes for fallback covers by genre
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

  // Fallback to Amazon Image URL if OpenLibrary fails
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
        // Try Amazon cover service URL first, then fallback to styled card
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

export default function BooksSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const displayedBooks = useMemo(() => {
    if (selectedCategory === "All") {
      return BOOKS;
    }
    return BOOKS.filter((book) => book.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <ScrollReveal direction="up" className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-black uppercase leading-tight mb-3">
            Book Publishing Showcase
          </h2>
          <p className="text-[#555] text-xs sm:text-sm font-medium leading-relaxed">
            Explore our curated catalogue of published titles crafted with industry-leading editorial standards and design precision.
          </p>
        </div>

        {/* Top Category Filter Button Bar */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-8 sm:mb-10 relative z-20">
          <button
            type="button"
            onClick={() => setSelectedCategory("All")}
            className={`h-9 px-4 sm:px-6 font-semibold text-xs sm:text-sm cursor-pointer select-none transition-colors duration-200 ${selectedCategory === "All"
                ? "bg-black text-white shadow-xs"
                : "border-2 border-black text-black bg-white hover:bg-gray-100"
              }`}
          >
            All Books ({BOOKS.length})
          </button>
          {BOOK_CATEGORIES.map((cat) => {
            const count = BOOKS.filter((b) => b.category === cat).length;
            return (
              <button
                type="button"
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`h-9 px-4 sm:px-6 font-semibold text-xs sm:text-sm cursor-pointer select-none transition-colors duration-200 ${selectedCategory === cat
                    ? "bg-black text-white shadow-xs"
                    : "border-2 border-black text-black bg-white hover:bg-gray-100"
                  }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Book Carousel Slider */}
        <div className="relative px-2 sm:px-8">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-3 sm:-ml-4">
              {displayedBooks.map((book) => (
                <CarouselItem
                  key={book.id}
                  className="pl-3 sm:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="border border-[rgba(185,185,185,0.6)] overflow-hidden h-full bg-white flex flex-col justify-between transition-colors duration-200 hover:border-black group">
                    <div>
                      {/* Book Cover Image Container */}
                      <div className="h-60 sm:h-72 md:h-80 overflow-hidden bg-gray-50/80 p-4 flex items-center justify-center relative border-b border-[rgba(185,185,185,0.3)]">
                        <BookCoverImage book={book} />
                        <span className="absolute top-3 right-3 bg-black text-white text-[10px] font-bold px-2.5 py-0.5 uppercase tracking-wider z-10">
                          {book.category}
                        </span>
                      </div>

                      {/* Info Details */}
                      <div className="p-4 sm:p-5">
                        <div className="flex items-center gap-1 text-amber-500 mb-1">
                          <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500" />
                          <span className="text-xs font-bold text-gray-800">
                            {book.rating.toFixed(1)}
                          </span>
                        </div>
                        <h3 className="font-bold text-sm sm:text-base text-black line-clamp-1 group-hover:text-[#3075ba] transition-colors">
                          {book.title}
                        </h3>
                        <p className="text-xs text-[#555] mt-1 font-medium">
                          by: {book.author}
                        </p>
                        <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                          {book.description}
                        </p>
                      </div>
                    </div>

                    {/* Amazon / View Link Footer */}
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
                      <a
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-gray-100 text-black text-xs font-semibold py-2.5 px-3 group-hover:bg-black group-hover:text-white transition-colors duration-200"
                      >
                        <span>View Book</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Circular Carousel Navigation Arrows */}
            <CarouselPrevious className="hidden sm:flex -left-4 sm:-left-6 bg-black text-white hover:bg-[#3075ba] hover:text-white border-none w-10 h-10 shadow-md rounded-full" />
            <CarouselNext className="hidden sm:flex -right-4 sm:-right-6 bg-black text-white hover:bg-[#3075ba] hover:text-white border-none w-10 h-10 shadow-md rounded-full" />
          </Carousel>
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center mt-8 sm:mt-10">
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-black h-11 px-7 text-white font-semibold text-sm hover:bg-[#3075ba] transition-colors shadow-xs"
          >
            <span>View Portfolio in Detailed</span>
            <img
              src="/images/d9c7ff95-3112-46c5-9134-a2d883bdcb49.svg"
              alt=""
              className="w-4 h-4 rotate-180"
            />
          </a>
        </div>

      </ScrollReveal>
    </section>
  );
}
