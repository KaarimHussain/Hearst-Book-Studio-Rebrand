import React from "react";
import ScrollReveal from "./ui/ScrollReveal";

const packagesList = [
  {
    name: "01 - BASIC PACKAGES",
    price: "$100",
    features: [
      "Editorial Support",
      "Proofreading",
      "Typesetting",
      "Layout Adjustment",
      "Book Formatting",
      "2 Revisions Per Draft",
      "Book Publishing",
    ],
  },
  {
    name: "01 - BASIC PACKAGES",
    price: "$100",
    features: [
      "Editorial Support",
      "Proofreading",
      "Typesetting",
      "Layout Adjustment",
      "Book Formatting",
      "2 Revisions Per Draft",
      "Book Publishing",
    ],
  },
  {
    name: "01 - BASIC PACKAGES",
    price: "$100",
    features: [
      "Editorial Support",
      "Proofreading",
      "Typesetting",
      "Layout Adjustment",
      "Book Formatting",
      "2 Revisions Per Draft",
      "Book Publishing",
    ],
  },
  {
    name: "01 - BASIC PACKAGES",
    price: "$100",
    features: [
      "Editorial Support",
      "Proofreading",
      "Typesetting",
      "Layout Adjustment",
      "Book Formatting",
      "2 Revisions Per Draft",
      "Book Publishing",
    ],
  },
  {
    name: "01 - BASIC PACKAGES",
    price: "$100",
    features: [
      "Editorial Support",
      "Proofreading",
      "Typesetting",
      "Layout Adjustment",
      "Book Formatting",
      "2 Revisions Per Draft",
      "Book Publishing",
    ],
  },
  {
    name: "01 - BASIC PACKAGES",
    price: "$100",
    features: [
      "Editorial Support",
      "Proofreading",
      "Typesetting",
      "Layout Adjustment",
      "Book Formatting",
      "2 Revisions Per Draft",
      "Book Publishing",
    ],
  },
];

export default function PackagesSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <ScrollReveal direction="up" className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Row */}
        <div className="flex flex-col mb-10 text-center items-center">
          <div className="max-w-2xl">
            <h2 className="font-bold text-xl sm:text-2xl text-black uppercase leading-tight mb-3">
              OUR PACKAGES
            </h2>
            <p className="text-[#555] text-xs sm:text-sm font-medium leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text.
            </p>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packagesList.map((pkg, idx) => (
            <div key={idx} className="flex flex-col h-full bg-white drop-shadow-sm border border-gray-100">
              {/* Card Header */}
              <div className="bg-[#111] text-white flex justify-between items-center px-5 sm:px-6 py-4">
                <span className="font-bold text-sm sm:text-base uppercase tracking-wide">
                  {pkg.name}
                </span>
                <span className="font-bold text-base sm:text-lg">
                  {pkg.price}
                </span>
              </div>
              
              {/* Card Body */}
              <div className="bg-[#fcfcfc] flex-1 px-5 sm:px-6 py-7 flex flex-col border-x border-b border-gray-100">
                <p className="font-bold text-black text-sm sm:text-base mb-5">
                  Preparing Your Manuscript!
                </p>
                <ul className="space-y-3.5 mb-8 flex-1">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <img src="/images/fluent-emoji-flat_check-mark-button.png" alt="" className="w-4 h-4 mt-[2px] mr-2.5 flex-shrink-0" />
                      <span className="text-[#555] font-medium text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="block w-full bg-[#111] text-white font-bold text-sm uppercase py-3.5 text-center transition-colors hover:bg-[#3075ba]"
                >
                  GET A QUOTE
                </a>
              </div>
            </div>
          ))}
        </div>

      </ScrollReveal>
    </section>
  );
}
