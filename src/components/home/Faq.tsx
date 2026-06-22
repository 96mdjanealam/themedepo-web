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
// Sub-component: AccordionItem
// ---------------------------------------------------------------------------
const AccordionItem = ({ item, isOpen, onToggle }: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between gap-6 py-6 text-left"
      aria-expanded={isOpen}
    >
      <span className={`font-syne text-base font-semibold transition-colors duration-200 sm:text-lg ${
        isOpen ? "text-primary" : "text-foreground"
      }`}>
        {item.question}
      </span>
      {/* Icon frame changes to square matching structural tokens */}
      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xs transition-colors duration-200 ${
        isOpen ? "bg-primary text-white" : "border border-gray-300 text-medium-gray"
      }`}>
        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
      </div>
    </button>

    {/* Modern Dynamic Grid Expansion Layout */}
    <div className={`grid transition-all duration-300 ease-in-out ${
      isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
    }`}>
      <div className="overflow-hidden">
        <p className="text-medium-gray text-sm leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Component: Faq
// ---------------------------------------------------------------------------
const Faq = () => {
  const [openId, setOpenId] = useState<number | null>(FAQ_ITEMS[0].id);

  return (
    <section className="bg-background px-4 py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">

          {/* Left Side Layout — Spans 5 Columns */}
          <div className="lg:col-span-5">
            <div className="mb-8 inline-flex items-center gap-2 border border-primary bg-primary/10 px-3 py-2 w-fit">
              <span className="h-2 w-2 shrink-0 bg-primary" aria-hidden="true" />
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary">
                Help Center
              </span>
            </div>
            <h2 className="font-syne text-foreground mb-6 text-4xl font-bold leading-tight sm:text-5xl">
              Frequently<br />asked questions.
            </h2>
            <p className="text-medium-gray text-sm leading-relaxed max-w-sm">
              Everything you need to know about the product and billing. Looking
              for something else? Reach out to our team via chat.
            </p>
          </div>

          {/* Right Side Layout — Spans 7 Columns */}
          <div className="border-t border-gray-200 lg:col-span-7">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Faq;