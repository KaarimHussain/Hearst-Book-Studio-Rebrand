import React, { useState, useMemo } from "react";
import { ArrowRight, Search, X, Layers } from "lucide-react";

export interface GenreCardData {
  id: string;
  title: string;
  slug: string;
  href: string;
  image: string;
  badge: string;
  description: string;
  tags: string[];
  subCategoriesCount: number;
}

const genresList: GenreCardData[] = [
  {
    id: "fiction",
    title: "Fiction Novels",
    slug: "fiction",
    href: "/genres/fiction",
    image: "/images/genre/fiction/section-1.png",
    badge: "Cinematic & Narrative",
    description: "Captivating novels, immersive world-building, high-tension plotting, and unforgettable character arcs across all storytelling genres.",
    tags: ["Sci-Fi", "Fantasy", "Thrillers", "Romance", "Horror"],
    subCategoriesCount: 6,
  },
  {
    id: "non-fiction",
    title: "Non-Fiction & Research",
    slug: "non-fiction",
    href: "/genres/non-fiction",
    image: "/images/genre/non-fiction/section-1.png",
    badge: "Editorial & Factual",
    description: "Rigorous factual accounts, investigative journalism, historical narratives, pop-science, and cited research synthesis.",
    tags: ["History", "Science", "Politics", "True Crime", "Memoir"],
    subCategoriesCount: 6,
  },
  {
    id: "childrens-book",
    title: "Children's Books",
    slug: "childrens-book",
    href: "/genres/childrens-book",
    image: "/images/genre/children-book/section-1.png",
    badge: "Full-Spread Illustrated",
    description: "Whimsical picture books, 32-page full-bleed spreads, early reader chapter books, and engaging kids graphic novels.",
    tags: ["Ages 0-3", "Ages 3-7", "Picture Books", "Early Readers"],
    subCategoriesCount: 4,
  },
  {
    id: "self-help",
    title: "Self-Help & Personal Growth",
    slug: "self-help",
    href: "/genres/self-help",
    image: "/images/genre/self-help/section-1.png",
    badge: "Actionable Frameworks",
    description: "Empowering personal growth frameworks, daily habits trackers, mindfulness guides, and actionable companion workbooks.",
    tags: ["Mindset", "Productivity", "Mindfulness", "Habits"],
    subCategoriesCount: 6,
  },
  {
    id: "art-and-illustrations",
    title: "Art & Illustration",
    slug: "art-and-illustrations",
    href: "/genres/art-and-illustrations",
    image: "/images/genre/art-and-illustrations/section-1.png",
    badge: "Studio Atelier & Fine Art",
    description: "Fine art collections, full-bleed graphic spreads, coffee table monographs, concept art portfolios, and high-DPI printing.",
    tags: ["Concept Art", "Children's Art", "Fine Art", "Vector Art"],
    subCategoriesCount: 6,
  },
  {
    id: "biographies-and-autobiographies",
    title: "Biographies & Memoirs",
    slug: "biographies-and-autobiographies",
    href: "/genres/biographies-and-autobiographies",
    image: "/images/genre/biographies-and-autobiographies/section-1.png",
    badge: "Heritage & Archival",
    description: "Honoring life legacies, ancestral family histories, executive memoirs, historical figures, and confidential ghostwriting.",
    tags: ["Memoirs", "Executive Histories", "Family Legacy"],
    subCategoriesCount: 6,
  },
  {
    id: "business",
    title: "Business & Leadership",
    slug: "business",
    href: "/genres/business",
    image: "/images/genre/business/section-1.png",
    badge: "Corporate & Bestseller",
    description: "C-Suite leadership frameworks, startup scale-up playbooks, economic analysis, and Amazon/WSJ bestseller positioning.",
    tags: ["Leadership", "Startups", "Finance", "AI Business"],
    subCategoriesCount: 6,
  },
  {
    id: "comic-book",
    title: "Comic Books & Manga",
    slug: "comic-book",
    href: "/genres/comic-book",
    image: "/images/genre/comic-book/section-1.png",
    badge: "Action Panel Art",
    description: "Dynamic multi-panel art, penciling, inking, digital color grading, sound FX lettering, and global comic press releases.",
    tags: ["Superhero", "Manga", "Cyberpunk", "Webcomics"],
    subCategoriesCount: 6,
  },
  {
    id: "inspirational",
    title: "Inspirational",
    slug: "inspirational",
    href: "/genres/inspirational",
    image: "/images/genre/inspirational/section-1.png",
    badge: "Hope & Life Purpose",
    description: "Uplifting stories of hope, triumph over adversity, daily motivational devotionals, and life calling guides.",
    tags: ["Resilience", "Daily Devotionals", "Life Purpose"],
    subCategoriesCount: 6,
  },
  {
    id: "religious-publishing",
    title: "Religious Publishing",
    slug: "religious-publishing",
    href: "/genres/religious-publishing",
    image: "/images/genre/religious-publishing/section-1.png",
    badge: "Reverent & Theological",
    description: "Reverent scriptural indexing, two-column bible typesetting, pastoral study guides, and global church distribution.",
    tags: ["Theology", "Devotionals", "Pastoral Care"],
    subCategoriesCount: 6,
  },
];

export default function GenresOverviewGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filterOptions = [
    "All",
    "Fiction",
    "Non-Fiction",
    "Illustrated",
    "Business & Growth",
    "Specialty & Faith",
  ];

  const filteredGenres = useMemo(() => {
    return genresList.filter((item) => {
      let matchesFilter = true;

      if (selectedFilter === "Fiction") {
        matchesFilter = item.id === "fiction" || item.id === "comic-book";
      } else if (selectedFilter === "Non-Fiction") {
        matchesFilter = item.id === "non-fiction" || item.id === "biographies-and-autobiographies";
      } else if (selectedFilter === "Illustrated") {
        matchesFilter = item.id === "childrens-book" || item.id === "art-and-illustrations" || item.id === "comic-book";
      } else if (selectedFilter === "Business & Growth") {
        matchesFilter = item.id === "business" || item.id === "self-help";
      } else if (selectedFilter === "Specialty & Faith") {
        matchesFilter = item.id === "inspirational" || item.id === "religious-publishing";
      }

      if (!searchQuery.trim()) return matchesFilter;

      const q = searchQuery.toLowerCase().trim();
      return (
        matchesFilter &&
        (item.title.toLowerCase().includes(q) ||
          item.badge.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase().includes(q)))
      );
    });
  }, [searchQuery, selectedFilter]);

  return (
    <div className="w-full">
      {/* Control Bar: Filter Pills & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-white p-4 sm:p-5 border border-gray-200 shadow-sm rounded-lg">
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {filterOptions.map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => setSelectedFilter(opt)}
              className={`h-9 px-4 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer select-none rounded ${
                selectedFilter === opt
                  ? "bg-[#3075ba] text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search genre studios, tags..."
            className="w-full h-9 pl-9 pr-8 bg-gray-50 border border-gray-200 text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#3075ba] focus:bg-white transition-colors rounded"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 p-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Genres Cards Grid */}
      {filteredGenres.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredGenres.map((item) => (
            <div
              key={item.id}
              className="bg-white border-2 border-gray-100 hover:border-[#3075ba] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group overflow-hidden rounded-lg"
            >
              <div>
                {/* Section Cover Preview Header */}
                <div className="h-52 sm:h-60 relative overflow-hidden bg-gray-100 border-b border-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <span className="absolute top-3 left-3 bg-[#3075ba] text-white text-[10px] font-extrabold px-3 py-1 uppercase tracking-widest shadow-md rounded-xs">
                    {item.badge}
                  </span>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-[11px] text-white font-semibold flex items-center gap-1 bg-black/60 px-2.5 py-0.5 border border-white/20 rounded">
                      <Layers className="w-3 h-3 text-[#3075ba]" />
                      <span>{item.subCategoriesCount} Formats</span>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-bold text-gray-900 uppercase mb-2 group-hover:text-[#3075ba] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4 font-normal">
                    {item.description}
                  </p>

                  {/* Sub-Category Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 border border-gray-200 rounded-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Link */}
              <div className="p-5 sm:p-6 pt-0">
                <a
                  href={item.href}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#3075ba] hover:bg-[#2560a0] text-white text-xs font-bold py-3 px-4 transition-colors uppercase tracking-widest rounded shadow-sm"
                >
                  <span>Explore {item.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-white border border-gray-200 text-gray-600 text-sm rounded-lg">
          No genre publishing categories found matching your search.
        </div>
      )}
    </div>
  );
}
