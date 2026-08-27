import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const msgIcon = "https://www.figma.com/api/mcp/asset/945932cf-746a-425c-8221-85b6bf1fff4a.svg";

const faqs = [
  {
    q: "What types of books do you publish?",
    a: "We publish all genres including fiction, non-fiction, children's books, self-help, biographies, and more. Our team works with first-time authors and experienced writers alike.",
  },
  {
    q: "How long does the publishing process take?",
    a: "The timeline varies depending on the length and complexity of your manuscript. Typically, the full process from editing to final publication takes 3–6 months.",
  },
  {
    q: "Do you offer editing and proofreading services?",
    a: "Yes, we offer comprehensive editing services including developmental editing, copy editing, line editing, and proofreading to ensure your manuscript is polished and ready for publication.",
  },
  {
    q: "What formats will my book be available in?",
    a: "We publish in multiple formats — print (paperback and hardcover), eBook (Kindle, EPUB, PDF), and audiobook. You can choose one or all formats based on your needs.",
  },
  {
    q: "How do royalties work?",
    a: "Authors receive a competitive royalty percentage on every copy sold. We offer transparent royalty statements and timely payments. Contact our team for specific royalty rates.",
  },
];

export default function EverythingSection() {
  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="font-bold text-xl sm:text-2xl text-black text-center uppercase leading-tight mb-3">
          Everything You Need To Know
        </h2>
        <p className="text-[#555] text-xs sm:text-sm font-medium text-center leading-relaxed mb-8 sm:mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the
          industry's standard dummy text ever since 1966.
        </p>

        {/* Stack on mobile, side-by-side on lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-black/10">
                <AccordionTrigger className="text-xs sm:text-sm font-semibold text-black text-left hover:no-underline hover:text-[#3075ba] transition-colors py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs text-[#555] leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="bg-[#d9d9d9] rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center">
            <div className="bg-black rounded-xl w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center mb-3">
              <img src={msgIcon} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-bold text-base sm:text-lg text-black capitalize mb-3">
              Still have questions?
            </h3>
            <p className="text-black font-semibold text-xs text-center leading-relaxed mb-5 sm:mb-6 max-w-xs">
              Book a free 30-minute discovery call with our team. No sales pitch — just honest
              answers to your questions.
            </p>
            <a
              href="/contact"
              className="inline-block bg-black h-10 px-6 sm:px-8 leading-10 text-white font-semibold text-sm rounded-sm hover:bg-[#3075ba] transition-colors"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
