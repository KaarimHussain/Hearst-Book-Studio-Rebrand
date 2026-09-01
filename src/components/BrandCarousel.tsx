import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export interface Brand {
  src: string;
  alt: string;
}

interface BrandCarouselProps {
  brands: Brand[];
}

export default function BrandCarousel({ brands }: BrandCarouselProps) {
  // Triple the brands array to ensure seamless infinite looping across all screen sizes
  const carouselBrands = [...brands, ...brands, ...brands];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!emblaApi || isHovered) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 2500);

    return () => clearInterval(interval);
  }, [emblaApi, isHovered]);

  return (
    <div
      ref={emblaRef}
      className="overflow-hidden w-full select-none cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex">
        {carouselBrands.map((brand, index) => (
          <div
            key={index}
            className="flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 border border-[rgba(185,185,185,0.5)] -ml-px flex items-center justify-center h-28 sm:h-36 lg:h-40 p-4 sm:p-5"
          >
            <img
              src={brand.src}
              alt={brand.alt}
              className="max-h-12 sm:max-h-14 lg:max-h-16 max-w-full object-contain pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
