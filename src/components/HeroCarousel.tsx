import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const carouselVideos = [
  "/videos/hero-bg.mp4",
  "/videos/video2.mp4", 
  "/videos/video3.mp4", 
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance carousel every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % carouselVideos.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-end overflow-hidden bg-black">
      
      {/* Background Videos with crossfade */}
      <AnimatePresence initial={false}>
        <motion.video
          key={activeIndex}
          src={carouselVideos[activeIndex]}
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      </AnimatePresence>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/65 z-10 pointer-events-none"></div>

      {/* Content */}
      <motion.div 
        className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 pt-24 sm:pt-28"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight uppercase mb-4">
          DO YOU HAVE A<br />
          MANUSCRIPT READY TO<br />
          BE PUBLISHED?
        </h1>

        <p className="text-white font-medium text-sm sm:text-base leading-relaxed mb-8 max-w-xs sm:max-w-md lg:max-w-xl">
          Hearst Book Publishing has made it much easier to self-publish a book,
          with hands-on support from the first word to the final cover.
        </p>

        {/* Carousel Indicators */}
        <div className="flex items-center gap-2">
          {carouselVideos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 transition-all duration-300 ${
                activeIndex === idx 
                  ? "bg-[#3075ba] w-10 sm:w-12" 
                  : "bg-white/70 hover:bg-white w-6 sm:w-8 cursor-pointer"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
