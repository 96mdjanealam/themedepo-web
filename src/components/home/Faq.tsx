"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

// ---------------------------------------------------------------------------
// Types & data
// ---------------------------------------------------------------------------

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: "Do I need to pay monthly to keep using the theme?",
    answer: "No, all our themes are a one-time purchase. You get lifetime access to the theme files and 6 months of premium support and updates.",
  },
  {
    id: 2,
    question: "Can I use the theme on multiple projects?",
    answer: "Each license covers a single end product. If you need to use the theme on multiple projects, you'll need to purchase additional licenses.",
  },
  {
    id: 3,
    question: "Do you offer technical support?",
    answer: "Yes, every purchase includes 6 months of dedicated technical support. Our team typically responds within 24 hours on business days.",
  },
  {
    id: 4,
    question: "Are your themes regularly updated?",
    answer: "Absolutely. We release regular updates to keep our themes compatible with the latest versions of WordPress, React, and other platforms.",
  },
  {
    id: 5,
    question: "Do you offer refunds?",
    answer: "We offer a 14-day refund policy if you're not satisfied with your purchase, provided the item hasn't been used in a live project.",
  },
];

// ---------------------------------------------------------------------------
// Accordion item
// ---------------------------------------------------------------------------

const AccordionItem = ({ item, isOpen, onToggle }: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-6 py-6 text-left"
      aria-expanded={isOpen}
    >
      <span className={`font-syne font-semibold text-base sm:text-lg transition-colors duration-200 ${isOpen ? "text-primary" : "text-foreground"}`}>
        {item.question}
      </span>
      <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-colors duration-200 ${isOpen ? "bg-primary text-white" : "border border-gray-300 text-medium-gray"}`}>
        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
      </div>
    </button>

    {/* Answer — animated expand */}
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-48 pb-6" : "max-h-0"}`}>
      <p className="text-sm text-medium-gray leading-relaxed">
        {item.answer}
      </p>
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

const Faq = () => {
  const [openId, setOpenId] = useState<number | null>(FAQ_ITEMS[0].id);

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="py-20 lg:py-32 px-4 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left — header */}
          <div className="lg:w-2/5 shrink-0">
            <div className="inline-flex items-center gap-2 px-3 py-2 border border-primary bg-primary/10 mb-8">
              <span className="w-2 h-2 shrink-0 bg-primary" aria-hidden="true" />
              <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-primary">
                Help Center
              </span>
            </div>
            <h2 className="font-syne font-bold text-4xl sm:text-5xl text-foreground leading-tight mb-6">
              Frequently<br />asked questions.
            </h2>
            <p className="text-sm text-medium-gray leading-relaxed max-w-xs">
              Everything you need to know about the product and billing. Looking
              for something else? Reach out to our team via chat.
            </p>
          </div>

          {/* Right — accordion */}
          <div className="flex-1 border-t border-gray-200">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Faq;