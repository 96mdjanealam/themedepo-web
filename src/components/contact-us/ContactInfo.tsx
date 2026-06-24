import { Clock, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import Link from "next/link";

interface ContactItem {
  label: string;
  lines: string[];
  href?: string;
  Icon: typeof Mail;
}

interface Office {
  city: string;
  tag: string;
  address: string[];
  dark?: boolean;
}

const CONTACT_ITEMS: ContactItem[] = [
  {
    label: "Email Us",
    lines: ["contact@storement.com"],
    href: "mailto:contact@storement.com",
    Icon: Mail,
  },
  {
    label: "Call Us",
    lines: ["+880 1781-885191"],
    href: "tel:+8801781885191",
    Icon: Phone,
  },
  {
    label: "Visit Us",
    lines: [
      "7th Floor, House No 436, Rd No: 14, J Block,",
      "Bashundhara R/A, Dhaka - 1229,",
      "Dhaka, Bangladesh",
    ],
    Icon: MapPin,
  },
  {
    label: "Support Hours",
    lines: ["24/7 Available"],
    Icon: Clock,
  },
];

const OFFICES: Office[] = [
  {
    city: "Melbourne",
    tag: "Headquarters",
    address: ["120 Spencer Street", "Melbourne, VIC 3000", "Australia"],
  },
  {
    city: "Dhaka",
    tag: "Dev Center",
    address: [
      "House: 436, Road: 14, Block: J,",
      "Bashundhara R/A, 1229,",
      "Dhaka, Bangladesh.",
    ],
    dark: true,
  },
];

const OfficeCard = ({ office }: { office: Office }) => {
  const dark = office.dark;

  return (
    <article
      className={`flex flex-col justify-between gap-10 p-6 ${
        dark
          ? "bg-foreground text-white"
          : "border border-gray-200 bg-white"
      }`}
    >
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-full ${
          dark
            ? "bg-white/10 text-white/60"
            : "bg-gray-100 text-medium-gray"
        }`}
      >
        <MapPin size={16} strokeWidth={1.5} />
      </div>
      <div>
        <h3
          className={`mb-1 font-syne text-xl font-bold ${
            dark ? "text-white" : "text-foreground"
          }`}
        >
          {office.city}
        </h3>

        <p
          className={`mb-4 text-[0.6rem] font-bold uppercase tracking-[0.15em] ${
            dark ? "text-white/50" : "text-primary"
          }`}
        >
          {office.tag}
        </p>

        <address
          className={`space-y-1 text-sm not-italic ${
            dark ? "text-white/60" : "text-medium-gray"
          }`}
        >
          {office.address.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </address>
      </div>
    </article>
  );
};

export default function ContactInfo() {
  return (
    <section className="bg-light-gray/5 px-4 py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Header */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 border border-gray-200 bg-white px-3 py-2">
              <MessageSquare size={12} className="text-primary" />
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-medium-gray">
                Say Hello
              </span>
            </div>

            <h2 className="mb-5 font-syne text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Let&apos;s talk
              <br />
              <span className="text-medium-gray">
                about your project.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-relaxed text-medium-gray">
              Ready to transform your digital presence? Our team of experts is
              here to help you build something extraordinary.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10">
            <div className="grid gap-4 sm:grid-cols-2">
              {OFFICES.map((office) => (
                <OfficeCard key={office.city} office={office} />
              ))}
            </div>

            <div className="grid gap-y-10 gap-x-4  sm:grid-cols-2">
              {CONTACT_ITEMS.map(({ label, lines, href, Icon }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-gray-200 bg-white text-primary">
                    <Icon size={16} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="mb-1 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-medium-gray">
                      {label}
                    </p>

                    {lines.map((line, index) =>
                      href && index === 0 ? (
                        <Link
                          key={line}
                          href={href}
                          className="block text-sm text-foreground transition-colors hover:text-primary"
                        >
                          {line}
                        </Link>
                      ) : (
                        <p
                          key={line}
                          className="text-sm leading-relaxed text-foreground"
                        >
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}