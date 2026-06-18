import { Headphones, RefreshCw, ShieldCheck, TimerReset } from "lucide-react";
import Link from "next/link";
import { ComponentType, JSX } from "react";

// ---------------------------------------------------------------------------
// Types & data
// ---------------------------------------------------------------------------

interface GuaranteeItem {
  label: string;
  description: JSX.Element;
  Icon: ComponentType<{ size?: number; strokeWidth?: number }>;
}

const ITEMS: GuaranteeItem[] = [
  {
    label: "100% money back guarantee",
    description: (
      <>
        You can contact us for a refund within 14 days after purchase. Check our{" "}
        <Link href="/refund-policy" className="text-primary hover:underline">
          refund policy.
        </Link>
      </>
    ),
    Icon: TimerReset,
  },
  {
    label: "Safe and Secure Payment",
    description: (
      <>
        All transactions are 100% securely processed through Paddle or Stripe
        with industry-standard encryption.
      </>
    ),
    Icon: ShieldCheck,
  },
  {
    label: "24/7 Dedicated Support",
    description: (
      <>
        Our expert team is always ready to assist you. Got a question? We
        provide fast and reliable technical support.
      </>
    ),
    Icon: Headphones,
  },
  {
    label: "Free Lifetime Updates",
    description: (
      <>
        Get early access to all new themes, performance enhancements, and bug
        fixes without paying extra.
      </>
    ),
    Icon: RefreshCw,
  },
];

// ---------------------------------------------------------------------------
// Card
// ---------------------------------------------------------------------------

const GuaranteeCard = ({ item }: { item: GuaranteeItem }) => (
  <div className="flex items-start gap-5 p-8 bg-white border border-gray-200 rounded-lg shadow">
    <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow">
      <item.Icon size={20} strokeWidth={1.5} />
    </div>
    <div>
      <h3 className="font-syne font-semibold text-base text-foreground mb-2">
        {item.label}
      </h3>
      <p className="text-sm text-custom-gray leading-relaxed">
        {item.description}
      </p>
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

const Confidence = () => (
  <section className="py-20 lg:py-32 px-4 bg-light-gray/5">
    <div className="container mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-2 border border-primary bg-primary/10 mb-6">
          <span className="w-2 h-2 shrink-0 bg-primary" aria-hidden="true" />
          <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-primary">
            Our Guarantee
          </span>
        </div>
        <h2 className="font-syne font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground">
          Purchase with confidence.
        </h2>
      </div>

      {/* 2x2 grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {ITEMS.map((item) => (
          <GuaranteeCard key={item.label} item={item} />
        ))}
      </div>
    </div>
  </section>
);

export default Confidence;
