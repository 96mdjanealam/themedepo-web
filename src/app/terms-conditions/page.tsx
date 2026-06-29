import { BulletItem, CardItem, SectionHeading } from "@/components/legal/LegalPagesComps";
import { termsAndConditionsData } from "@/constants/termsAndConditionsData";
import { Mail, MapPin, Phone } from "lucide-react";

// ---------------------------------------------------------------------------
// Type helpers
// ---------------------------------------------------------------------------

type AnyItem = Record<string, unknown>;

const isObjectArray = (items: unknown[]): items is AnyItem[] =>
  items.length > 0 && typeof items[0] === "object" && items[0] !== null;

const isStringArray = (items: unknown[]): items is string[] =>
  items.length > 0 && typeof items[0] === "string";

const hasTitle = (item: AnyItem): item is { title: string; description: string } =>
  "title" in item;

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const TermsConditionsPage = () => {
  const { title, effectiveDate, lastUpdated, company, introduction, sections } =
    termsAndConditionsData;

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-AU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="bg-background">

      {/* Hero */}
      <div className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-2 border border-primary bg-primary/10 mb-6">
            <span className="w-2 h-2 bg-primary shrink-0" aria-hidden="true" />
            <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-primary">
              Legal
            </span>
          </div>
          <h1 className="font-syne font-bold text-4xl sm:text-5xl text-foreground mb-5">
            {title}
          </h1>
          <p className="text-sm text-medium-gray leading-relaxed max-w-xl mb-6">
            {introduction}
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-medium-gray">
            <span>
              <span className="font-bold text-foreground">Effective:</span>{" "}
              {formatDate(effectiveDate)}
            </span>
            <span className="text-gray-300">|</span>
            <span>
              <span className="font-bold text-foreground">Last Updated:</span>{" "}
              {formatDate(lastUpdated)}
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl flex flex-col gap-14">

          {/* Company description */}
          <div className="p-6 bg-primary/5 border-l-4 border-primary">
            <p className="text-sm text-foreground leading-relaxed">
              <span className="font-bold">{company.name}</span> —{" "}
              {company.description}
            </p>
          </div>

          {sections.map((section) => {
            const items = "items" in section ? (section.items as unknown[]) : null;
            const objItems = items && isObjectArray(items) ? items : null;
            const strItems = items && isStringArray(items) ? items : null;
            const titleItems = objItems?.filter(hasTitle);

            return (
              <div key={section.id}>
                <SectionHeading number={section.id} title={section.title} />

                {/* title/description object items (sections 2, 3, 4, 9) */}
                {titleItems && titleItems.length > 0 && (
                  <div className="flex flex-col gap-4">
                    {titleItems.map((item) => (
                      <CardItem
                        key={item.title}
                        title={item.title}
                        description={item.description}
                      />
                    ))}
                  </div>
                )}

                {/* plain string items (section 7) */}
                {strItems && strItems.length > 0 && (
                  <ul className="flex flex-col gap-2">
                    {strItems.map((item) => (
                      <BulletItem key={item}>{item}</BulletItem>
                    ))}
                  </ul>
                )}

                {/* plain description (sections 1, 5, 6, 8, 10, 11, 12, 13) */}
                {"description" in section &&
                  section.description &&
                  !("items" in section) && (
                    <p className="text-sm text-medium-gray leading-relaxed">
                      {section.description as string}
                    </p>
                  )}

                {/* Contact section (14) */}
                {"offices" in section && (
                  <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {(
                        section as typeof section & {
                          offices: { office: string; city: string; address: string }[];
                        }
                      ).offices.map((office) => (
                        <div
                          key={office.city}
                          className="p-5 border border-gray-200 flex flex-col gap-3"
                        >
                          <div>
                            <p className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-primary mb-1">
                              {office.office}
                            </p>
                            <p className="font-syne font-semibold text-foreground">
                              {office.city}
                            </p>
                          </div>
                          <div className="flex items-start gap-2 text-sm text-medium-gray">
                            <MapPin size={14} className="shrink-0 mt-0.5 text-primary" strokeWidth={1.5} />
                            {office.address}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                      {"email" in section && (
                        <a
                          href={`mailto:${(section as { email: string }).email}`}
                          className="inline-flex items-center gap-2 text-sm text-medium-gray hover:text-primary transition-colors duration-200"
                        >
                          <Mail size={14} className="text-primary" strokeWidth={1.5} />
                          {(section as { email: string }).email}
                        </a>
                      )}
                      {"phone" in section && (
                        <a
                          href={`tel:${(section as { phone: string }).phone}`}
                          className="inline-flex items-center gap-2 text-sm text-medium-gray hover:text-primary transition-colors duration-200"
                        >
                          <Phone size={14} className="text-primary" strokeWidth={1.5} />
                          {(section as { phone: string }).phone}
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;