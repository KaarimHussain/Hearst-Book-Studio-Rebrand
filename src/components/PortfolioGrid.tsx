import React from "react";
import ScrollReveal from "./ui/ScrollReveal";

const portfolioItems = [
  "/images/image%2034.png",
  "/images/image%2035.png",
  "/images/image%2036.png",
  "/images/image%2037.png",
  "/images/image%2038.png",
  "/images/image%2039.png",
  "/images/image%2040.png",
  "/images/image%2041.png",
];

export default function PortfolioGrid() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <ScrollReveal direction="up" className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <h2 className="font-bold text-xl sm:text-2xl text-black uppercase leading-tight mb-3">
            OUR PORTFOLIO
          </h2>
          <p className="text-[#555] text-xs sm:text-sm font-medium leading-relaxed max-w-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since 1966.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {portfolioItems.map((imgSrc, idx) => (
            <div 
              key={idx} 
              className="border border-gray-200 bg-white p-3 sm:p-4 h-48 sm:h-60 flex items-center justify-center transition-transform hover:-translate-y-1 hover:shadow-lg duration-300"
            >
              <img 
                src={imgSrc} 
                alt={`Portfolio item ${idx + 1}`} 
                className="w-full h-full object-contain drop-shadow-md" 
              />
            </div>
          ))}
        </div>

      </ScrollReveal>
    </section>
  );
}
