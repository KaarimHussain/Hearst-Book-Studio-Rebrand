import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const publishedBooks = [
  { cover: "https://www.figma.com/api/mcp/asset/731e8e33-b924-4dc8-b30e-1e1dd8e604e6.png", title: "I Am a Girl", author: "Pamela Avis Harry" },
  { cover: "https://www.figma.com/api/mcp/asset/1cf44384-1ec3-49b2-9c5d-846fbcdaa830.png", title: "The Well of Hope: Bloodlines", author: "Angel Mercado" },
  { cover: "https://www.figma.com/api/mcp/asset/38460aab-76de-4414-8798-d43cf42be03a.png", title: "Caught in the Horizon", author: "J. L. Schaffer" },
  { cover: "https://www.figma.com/api/mcp/asset/e8db65d7-5b00-4573-bd85-77cc2bfd587d.png", title: "The Kingdom", author: "Sherrie Campbell" },
  { cover: "https://www.figma.com/api/mcp/asset/b19b18fc-1dcc-4307-b446-fddb5af0f9e1.png", title: "Universe Mission", author: "Jeremy Tim" },
];

const comingSoonBooks = [
  { cover: "https://www.figma.com/api/mcp/asset/cbd11d27-987c-43f2-8409-a61b6d7414b8.png", title: "Coming Title One", author: "Author Name" },
  { cover: "https://www.figma.com/api/mcp/asset/731e8e33-b924-4dc8-b30e-1e1dd8e604e6.png", title: "Coming Title Two", author: "Author Name" },
];

export default function BooksSection() {
  const [active, setActive] = useState<"published" | "coming">("published");
  const books = active === "published" ? publishedBooks : comingSoonBooks;

  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="font-bold text-xl sm:text-2xl text-black text-center uppercase leading-tight mb-3">
          Book Publishing Coming Soon
        </h2>
        <p className="text-[#555] text-xs sm:text-sm font-medium text-center leading-relaxed mb-7 sm:mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the
          industry's standard dummy text ever since 1966.
        </p>

        {/* 2 items mobile → 2 sm → 3 md → 4 lg; arrows hidden on mobile */}
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-3 sm:-ml-4">
            {books.map((book, i) => (
              <CarouselItem key={i} className="pl-3 sm:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="border-2 border-black/10 rounded-xl overflow-hidden h-full">
                  <div className="h-40 sm:h-60 md:h-80 overflow-hidden bg-gray-50">
                    <img src={book.cover} alt={book.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="p-3 sm:p-4">
                    <p className="font-bold text-xs sm:text-sm text-black">{book.title}</p>
                    <p className="text-xs text-[#555] mt-0.5">by: {book.author}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex left-0 -translate-x-1/2 bg-black text-white hover:bg-[#3075ba] border-none w-9 h-9 sm:w-10 sm:h-10" />
          <CarouselNext className="hidden sm:flex right-0 translate-x-1/2 bg-black text-white hover:bg-[#3075ba] border-none w-9 h-9 sm:w-10 sm:h-10" />
        </Carousel>

        <div className="flex justify-center gap-0 mt-6 sm:mt-8">
          <button
            onClick={() => setActive("published")}
            className={`h-9 px-4 sm:px-6 font-semibold text-xs sm:text-sm transition-colors ${active === "published" ? "bg-black text-white" : "border-2 border-black text-black bg-white"
              }`}
          >
            Published Books
          </button>
          <button
            onClick={() => setActive("coming")}
            className={`h-9 px-4 sm:px-6 font-semibold text-xs sm:text-sm transition-colors ${active === "coming" ? "bg-black text-white" : "border-2 border-black text-black bg-white"
              }`}
          >
            Coming Soon
          </button>
        </div>
      </div>
    </section>
  );
}
