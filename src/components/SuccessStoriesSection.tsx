import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import ScrollReveal from "./ui/ScrollReveal.tsx";

const authors = [
  {
    cover: "/images/731e8e33-b924-4dc8-b30e-1e1dd8e604e6.webp",
    name: "Sarah Johnson",
    book: "Wings of Dawn",
    quote: "Hearst Book Publishing made my dream a reality. The support from manuscript to cover was exceptional.",
  },
  {
    cover: "/images/e8db65d7-5b00-4573-bd85-77cc2bfd587d.webp",
    name: "Jeremy Des",
    book: "Universe Within You",
    quote: "The team guided me through every step. My book is now on shelves worldwide — incredible experience.",
  },
  {
    cover: "/images/1cf44384-1ec3-49b2-9c5d-846fbcdaa830.webp",
    name: "Marcus Reed",
    book: "The Silent Road",
    quote: "The editing team transformed my rough draft into a polished masterpiece. I couldn't be happier.",
  },
  {
    cover: "/images/38460aab-76de-4414-8798-d43cf42be03a.webp",
    name: "J. L. Schaffer",
    book: "Caught in the Horizon",
    quote: "From typesetting to distribution, every step was handled professionally. Highly recommend!",
  },
  {
    cover: "/images/b19b18fc-1dcc-4307-b446-fddb5af0f9e1.webp",
    name: "Amara Osei",
    book: "Echoes in Time",
    quote: "A world-class publishing experience. They understood my vision and brought it to life beautifully.",
  },
];

export default function SuccessStoriesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo  = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <section className="py-10 sm:py-12 bg-white">
      <ScrollReveal direction="right" className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header row: title + CTA aligned */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <h2 className="font-bold text-xl sm:text-2xl text-black uppercase leading-tight mb-2">
              Recent Author Success Stories
            </h2>
            <p className="text-[#555] text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the
              industry's standard dummy text ever since 1966.
            </p>
          </div>
          <a
            href="/case-studies"
            className="flex-shrink-0 inline-block bg-black h-10 px-5 sm:px-6 leading-10 text-white font-semibold text-sm hover:bg-[#3075ba] transition-colors whitespace-nowrap self-start"
          >
            View All Case Studies
          </a>
        </div>

        {/* Carousel with outside arrows */}
        <div className="relative flex items-center gap-2 sm:gap-4">

          {/* Prev — hidden on mobile */}
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="hidden sm:flex flex-shrink-0 w-10 h-10 rounded-full bg-black text-white items-center justify-center hover:bg-[#3075ba] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Embla viewport */}
          <div className="overflow-hidden flex-1" ref={emblaRef}>
            <div className="flex">
              {authors.map((a, i) => {
                const isCenter = i === selectedIndex;
                return (
                  <div
                    key={i}
                    /* 2 visible on mobile, 3 on desktop */
                    className="flex-none w-1/2 sm:w-1/3 px-2 sm:px-3 transition-all duration-300"
                  >
                    <div
                      className={`rounded-xl border overflow-hidden bg-white transition-all duration-300 ${
                        isCenter
                          ? "border-black/15 shadow-lg scale-[1.04]"
                          : "border-black/10 shadow-sm scale-100 opacity-80"
                      }`}
                    >
                      <div className="overflow-hidden bg-gray-50 aspect-[3/4]">
                        <img
                          src={a.cover}
                          alt={a.book}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <p className="font-bold text-sm text-black">{a.name}</p>
                        <p className="text-xs text-[#3075ba] font-semibold mb-2">"{a.book}"</p>
                        <p className="text-xs text-[#555] leading-relaxed">{a.quote}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next — hidden on mobile */}
          <button
            onClick={scrollNext}
            aria-label="Next"
            className="hidden sm:flex flex-shrink-0 w-10 h-10 rounded-full bg-black text-white items-center justify-center hover:bg-[#3075ba] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot pagination */}
        <div className="flex justify-center gap-2 mt-5">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? "bg-[#3075ba] w-6"
                  : "bg-black w-4"
              }`}
            />
          ))}
        </div>

      </ScrollReveal>
    </section>
  );
}
