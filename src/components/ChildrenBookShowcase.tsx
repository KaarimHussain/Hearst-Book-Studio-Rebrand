import React, { useState, useMemo } from "react";
import { BOOKS, type Book } from "@/lib/books";
import { Star, ExternalLink, Search, X } from "lucide-react";

export interface ChildrenBookItem extends Book {
  subCategory: "Picture Books" | "Graphic Novels" | "Activity & Learning";
}

// Children's books with explicit sub-categories for responsive filtering
const childrenItems: ChildrenBookItem[] = [
  {
    id: "p-35",
    image: "/images/image%2035.png",
    title: "Zootopia: Judy Hopps & The Missing Jumbo-Pop",
    author: "Suzanne Francis",
    category: "Fiction",
    subCategory: "Picture Books",
    service: "Design",
    rating: 4.7,
    description: "A vibrant illustrated mystery book for kids.",
    link: "#",
  },
  {
    id: "p-36",
    image: "/images/image%2036.png",
    title: "Dog Man: Big Jim Believes",
    author: "Dav Pilkey",
    category: "Fiction",
    subCategory: "Graphic Novels",
    service: "Writing",
    rating: 4.9,
    description: "International bestseller graphic novel for young audiences.",
    link: "#",
  },
  {
    id: "p-38",
    image: "/images/image%2038.png",
    title: "Big Book of Colouring Animals",
    author: "Hearst Studio",
    category: "Fiction",
    subCategory: "Activity & Learning",
    service: "Design",
    rating: 4.6,
    description: "Interactive animal activity and colouring book.",
    link: "#",
  },
  {
    id: "p-39",
    image: "/images/image%2039.png",
    title: "How to Draw Anything for Kids",
    author: "Stephanie A.",
    category: "Fiction",
    subCategory: "Activity & Learning",
    service: "Design",
    rating: 4.9,
    description: "Step-by-step drawing instructions for creative minds.",
    link: "#",
  },
  {
    id: "p-40",
    image: "/images/image%2040.png",
    title: "Dog Man: A Sprinkle in Time",
    author: "Dav Pilkey",
    category: "Fiction",
    subCategory: "Graphic Novels",
    service: "Publishing",
    rating: 4.9,
    description: "Bestselling graphic novel full of humor and adventure.",
    link: "#",
  },
  ...BOOKS.filter((b) => b.category === "Fiction").slice(0, 4).map((b) => ({
    ...b,
    subCategory: "Picture Books" as const,
  })),
];

function ChildrenCoverImage({ book }: { book: Book }) {
  const [hasError, setHasError] = useState(false);
  const amazonFallbackUrl = `https://images-na.ssl-images-amazon.com/images/P/${book.id}.01._SCLZZZZZZZ_SX500_.jpg`;

  if (hasError) {
    return (
      <div className="w-36 h-48 sm:w-40 sm:h-54 bg-gradient-to-br from-indigo-950 via-purple-950 to-neutral-900 p-4 shadow-md flex flex-col justify-between border border-[#3075ba]/30 text-left select-none relative overflow-hidden">
        <div className="absolute top-0 right-0 w-14 h-14 bg-[#3075ba]/10 rounded-bl-full pointer-events-none"></div>
        <div>
          <span className="text-[9px] font-bold uppercase tracking-widest text-[#3075ba] block mb-1">
            Children's Book
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
        if (!book.image.startsWith("/images/") && imgElement.src !== amazonFallbackUrl) {
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

export default function ChildrenBookShowcase() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("All");

  const subCategories = ["All", "Picture Books", "Graphic Novels", "Activity & Learning"];

  const filteredItems = useMemo(() => {
    return childrenItems.filter((item) => {
      const matchesSubCategory =
        selectedSubCategory === "All" || item.subCategory === selectedSubCategory;

      if (!searchQuery.trim()) return matchesSubCategory;

      const query = searchQuery.toLowerCase().trim();
      return (
        matchesSubCategory &&
        (item.title.toLowerCase().includes(query) ||
          item.author.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query))
      );
    });
  }, [searchQuery, selectedSubCategory]);

  return (
    <div className="w-full">
      {/* Controls Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-black/60 p-4 sm:p-5 border border-[#3075ba]/30">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {subCategories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setSelectedSubCategory(cat)}
              className={`h-9 px-4 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer select-none ${
                selectedSubCategory === cat
                  ? "bg-[#3075ba] text-white font-bold shadow-md"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
              }`}
            >
              {cat}
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
            placeholder="Search children's titles, authors..."
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

      {/* Grid of Children's Books */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-black/65 border border-white/15 hover:border-[#3075ba] flex flex-col justify-between transition-colors duration-200 group overflow-hidden"
            >
              <div>
                {/* Cover Image Container */}
                <div className="h-64 sm:h-72 overflow-hidden bg-black/40 p-4 flex items-center justify-center relative border-b border-white/10">
                  <ChildrenCoverImage book={item} />
                  <span className="absolute top-3 right-3 bg-[#3075ba] text-white text-[10px] font-bold px-2.5 py-0.5 uppercase tracking-wider z-10">
                    {item.subCategory}
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
                  href={item.link !== "#" ? item.link : "/contact"}
                  target={item.link !== "#" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-[#3075ba] text-white text-xs font-semibold py-2.5 px-3 transition-colors duration-200 uppercase tracking-wide border border-white/10"
                >
                  <span>Explore Book</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 px-4 bg-black/50 border border-white/10 text-gray-300 text-sm">
          No children's titles found matching your search. Try resetting your query.
        </div>
      )}
    </div>
  );
}
