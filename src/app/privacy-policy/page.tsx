import { privacyPolicyData } from "@/constants/privacyPolicyData";
import { Mail, MapPin, Phone } from "lucide-react";

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

const SectionHeading = ({
  number,
  title,
}: {
  number: number;
  title: string;
}) => (
  <div className="flex items-baseline gap-3 mb-6">
    <span className="font-syne font-bold text-2xl text-primary shrink-0">
      {String(number).padStart(2, "0")}.
    </span>
    <h2 className="font-syne font-bold text-2xl sm:text-3xl text-foreground">
      {title}
    </h2>
  </div>
);

const BulletItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center gap-3 text-sm text-medium-gray">
    <span
      className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"
      aria-hidden="true"
    />
    {children}
  </li>
);

const CardItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span
          className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"
          aria-hidden="true"
        />
        <p className="font-syne font-semibold text-sm text-foreground">
          {title}
        </p>
      </div>
      <p className="text-sm text-medium-gray leading-relaxed">{description}</p>
    </div>
);

// ---------------------------------------------------------------------------
// Type helpers
// ---------------------------------------------------------------------------

type AnyItem = Record<string, unknown>;

const isObjectArray = (items: unknown[]): items is AnyItem[] =>
  items.length > 0 && typeof items[0] === "object" && items[0] !== null;

const isStringArray = (items: unknown[]): items is string[] =>
  items.length > 0 && typeof items[0] === "string";

const hasPurpose = (
  item: AnyItem,
): item is { purpose: string; description: string } => "purpose" in item;

const hasType = (
  item: AnyItem,
): item is { type: string; description: string } => "type" in item;

const hasMeasure = (
  item: AnyItem,
): item is { measure: string; description: string } => "measure" in item;

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const PrivacyPolicyPage = () => {
  const { title, effectiveDate, lastUpdated, company, introduction, sections } =
    privacyPolicyData;

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

      {/* <hr className=" border-gray-100" /> */}

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
            const items =
              "items" in section ? (section.items as unknown[]) : null;
            const objItems = items && isObjectArray(items) ? items : null;
            const strItems = items && isStringArray(items) ? items : null;

            const purposeItems = objItems?.filter(hasPurpose);
            const typeItems = objItems?.filter(
              (i) => hasType(i) || hasMeasure(i),
            );

            return (
              <div key={section.id}>
                <SectionHeading number={section.id} title={section.title} />

                {/* Section 1 — subsections with string item lists */}
                {"subsections" in section && section.subsections && (
                  <div className="flex flex-col gap-6">
                    {(
                      section.subsections as {
                        title: string;
                        items: string[];
                      }[]
                    ).map((sub) => (
                      <div key={sub.title}>
                        <h3 className="font-syne font-semibold text-sm text-foreground mb-3">
                          {sub.title}
                        </h3>
                        <ul className="flex flex-col gap-2">
                          {sub.items.map((item) => (
                            <BulletItem key={item}>{item}</BulletItem>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Sections with purpose/description objects (section 2) */}
                {purposeItems && purposeItems.length > 0 && (
                  <div className="flex flex-col gap-4">
                    {purposeItems.map((item) => (
                      <CardItem
                        key={item.purpose}
                        title={item.purpose}
                        description={item.description}
                      />
                    ))}
                  </div>
                )}

                {/* Sections with type/measure + description objects (sections 3, 5, 6) */}
                {typeItems &&
                  typeItems.length > 0 &&
                  !(purposeItems && purposeItems.length > 0) && (
                    <div className="flex flex-col gap-4">
                      {typeItems.map((item) => (
                        <CardItem
                          key={
                            hasType(item)
                              ? item.type
                              : (item as { measure: string }).measure
                          }
                          title={
                            hasType(item)
                              ? item.type
                              : (item as { measure: string }).measure
                          }
                          description={item.description}
                        />
                      ))}
                    </div>
                  )}

                {/* Sections with plain string items (section 8) */}
                {strItems && strItems.length > 0 && (
                  <ul className="flex flex-col gap-2">
                    {strItems.map((item) => (
                      <BulletItem key={item}>{item}</BulletItem>
                    ))}
                  </ul>
                )}

                {/* Contact email for section 8 */}
                {"contact" in section && section.contact && (
                  <p className="text-sm text-medium-gray mt-4">
                    To exercise your rights, contact us at{" "}
                    <a
                      href={`mailto:${section.contact}`}
                      className="text-primary hover:underline font-semibold"
                    >
                      {section.contact as string}
                    </a>
                  </p>
                )}

                {/* Plain description (sections 4, 7, 9, 10) */}
                {"description" in section &&
                  section.description &&
                  !("items" in section) &&
                  !("subsections" in section) && (
                    <p className="text-sm text-medium-gray leading-relaxed">
                      {section.description as string}
                    </p>
                  )}

                {/* Contact section (11) */}
                {"offices" in section && (
                  <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {(
                        section as typeof section & {
                          offices: {
                            office: string;
                            city: string;
                            address: string;
                          }[];
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
                            <MapPin
                              size={14}
                              className="shrink-0 mt-0.5 text-primary"
                              strokeWidth={1.5}
                            />
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
                          <Mail
                            size={14}
                            className="text-primary"
                            strokeWidth={1.5}
                          />
                          {(section as { email: string }).email}
                        </a>
                      )}
                      {"phone" in section && (
                        <a
                          href={`tel:${(section as { phone: string }).phone}`}
                          className="inline-flex items-center gap-2 text-sm text-medium-gray hover:text-primary transition-colors duration-200"
                        >
                          <Phone
                            size={14}
                            className="text-primary"
                            strokeWidth={1.5}
                          />
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

export default PrivacyPolicyPage;
